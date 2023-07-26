import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
};

export async function POST(req: Request) {
    const { orderID, payerID, paymentID, billingToken, facilitatorAccessToken, paymentSource } = await req.json();
    
    if (!orderID || !payerID) {
        return new NextResponse("Order ID and Payer ID are required", { status:400 });
    }

    // Here, you can handle the payment approval and store the necessary information in your database
    console.log('Payment Approved:', { orderID, payerID, paymentID, billingToken, facilitatorAccessToken, paymentSource });

    // You can process the payment here and create an order in your database similar to what you did for Stripe.

    // For example:
    const paypalPayment = await prismadb.payPalPayment.create({
        data: {
            orderID,
            payerID,
            paymentID,
            billingToken,
            facilitatorAccessToken,
            paymentSource,
            // Add other payment details as needed
        },
    });

    // Return a success response
    return new NextResponse("Payment successful", { status: 200 });
}
