import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  stripeData: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  stripeData,
}) => {
  return (
    <>
      <Heading
        title={`Stripe Orders (${stripeData.length})`}
        description="Manage Stripe orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={stripeData} />
    </>
  );
};
