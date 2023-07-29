const express = require('express');
const axios = require('axios');
const { parseString } = require('xml2js');
const app = express();
const PORT = 5000;

app.use(express.json());

// Enable CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
console.log('CORS enabled');

// Function to fetch XML data from the provided URL
async function fetchXMLFromURL(url) {
  try {
    const response = await axios.get(url, { responseType: 'text' });
    return response.data;
  } catch (error) {
    console.error('Error fetching XML from URL:', error);
    throw new Error('An error occurred while fetching XML data from the URL.');
  }
}

// Endpoint to handle the Correios API request
app.post('/calculate-shipping', async (req, res) => {
  console.log('Request received:', req.body);

  try {
    console.log('Data sent to Correios API:', req.body);

    const correiosResponse = await axios.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx', {
      params: req.body,
      responseType: 'text',
    });

    console.log('Correios API Response:', correiosResponse.data.status); 

    // Parse the XML string into a JavaScript object
    parseString(correiosResponse.data, { explicitArray: false, trim: true }, (err, parsedData) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return res.status(500).json({ error: 'An error occurred while parsing XML response.' });
      }

      console.log('Correios API JSON response:', parsedData);

      // Send the extracted data from the JavaScript object as the response
      if (parsedData.Servicos && parsedData.Servicos.cServico) {
        res.json(parsedData.Servicos.cServico);
      } else {
        res.status(500).json({ error: 'No shipping options available for the provided CEP.' });
      }

      console.log('New response sent:', parsedData);
    });

  } catch (error) {
    console.error('Error fetching Correios API:', error);
    console.error('Response data from Correios API:', error.response?.data);

    res.status(500).json({ error: 'An error occurred while fetching shipping data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
