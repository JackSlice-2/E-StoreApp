import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, PayOrderColumn, columns, paycolumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

type OrderOrPayOrderColumn = OrderColumn | PayOrderColumn;

interface OrderClientProps {
  stripeData: OrderColumn[];
  paypalData: PayOrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  stripeData,
  paypalData,
}) => {
  return (
    <>
      <Heading
        title={`Orders (${stripeData.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      {/* Display regular orders */}
      <DataTable searchKey="products" columns={columns} data={stripeData} />
      {/* Display PayPalPayment data */}
      <DataTable
        searchKey="products"
        columns={paycolumns}
        data={paypalData as OrderOrPayOrderColumn[]}
      />
    </>
  );
};
