import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { OrderColumn, PayOrderColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

type OrderOrPayOrderColumn = OrderColumn | PayOrderColumn;

interface OrderClientProps {
  stripeData: OrderColumn[];
  paypalData: PayOrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  stripeData,
  paypalData,
}) => {
  const combinedData: OrderOrPayOrderColumn[] = [...stripeData, ...paypalData];

  const total = combinedData.length.toString();

  return (
    <>
      <Heading
        title={`All Orders (${total})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={combinedData} />
    </>
  );
};
