"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InfoColumn = {
  id: string
  name: string
  billboardid: string
  icon: string
  phonenumber: string
  whatsapp: string
  instagram: string
  facebook: string
  email: string
  createdAt: string;
}

export const columns: ColumnDef<InfoColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },{
    accessorKey: "billboardid",
    header: "billboardid",
  },{
    accessorKey: "phonenumber",
    header: "phonenumber",
  },{
    accessorKey: "whatsapp",
    header: "whatsapp",
  },{
    accessorKey: "instagram",
    header: "instagram",
  },{
    accessorKey: "facebook",
    header: "facebook",
  },{
    accessorKey: "email",
    header: "email",
  },{
    accessorKey: "icon",
    header: "icon",
  },{
    accessorKey: "createdAt",
    header: "Date",
  },{
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  },
]
