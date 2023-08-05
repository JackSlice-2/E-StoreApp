import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PayOrderColumn, paycolumns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  paypalData: PayOrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  paypalData,
}) => {
  return (
    <>
      <Heading
        title={`Paypal Orders (${paypalData.length})`}
        description="Manage paypal orders for your store"
      />
      <Separator />
      <DataTable
        searchKey="products"
        columns={paycolumns}
        data={paypalData}
      />
    </>
  );
};
