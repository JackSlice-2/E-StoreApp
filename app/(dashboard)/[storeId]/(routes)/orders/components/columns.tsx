"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action";

export type CommonOrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export type OrderColumn = CommonOrderColumn;

export type PayOrderColumn = CommonOrderColumn & {
  id: string;
  totalPrice: string;
  createdAt: string;
  orderID: string;
  payerID: string;
  paymentID: string;
  billingToken: string;
  facilitatorAccessToken: string;
  paymentSource: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
 {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "orderID",
    header: "PayPal OrderID",
  },
  {
    accessorKey: "payerID",
    header: "Paypal PayerID",
  },
  {
    accessorKey: "paymentID",
    header: "Paypal PaymentID",
  },
  {
    accessorKey: "billingToken",
    header: "Paypal BillingToken",
  },{
    accessorKey: "billingToken",
    header: "Paypal BillingToken",
  },{
    accessorKey: "facilitatorAccessToken",
    header: "Paypal facilitatorAccessToken",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
]

