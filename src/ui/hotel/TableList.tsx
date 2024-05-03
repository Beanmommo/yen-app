"use client";
import { useHotel } from "@/lib/action";
import { Hotel } from "@/lib/definitions";
import { dataToTableData, dictArrToArr } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/table";
import { useCallback } from "react";

export default function TableList() {
  const [hotelArr, error, isLoading] = useHotel();
  const rows = dataToTableData(dictArrToArr(hotelArr), [
    "hotel_address",
    "hotel_name",
    "id",
  ]);
  const columns = [
    {
      key: "hotel_name",
      label: "HOTEL",
    },
    {
      key: "hotel_address",
      label: "HOTEL ADDRESS",
    },
    { key: "id", label: "ACTION" },
  ];

  const renderCell = useCallback(
    (hotel: { [x: string]: any }, columnKey: any) => {
      const cellValue = hotel[columnKey];
      switch (columnKey) {
        case "hotel_name":
        case "hotel_address":
          return <p>{cellValue}</p>;
        case "id": //Action
          return <p className=" bg-red-500">{cellValue}</p>;
        default:
          return <p>{cellValue}</p>;
      }
    },
    [],
  );

  return (
    <Table aria-label="Hotel List Table">
      <TableHeader columns={columns}>
        {(columns) => (
          <TableColumn key={columns.key}>{columns.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
