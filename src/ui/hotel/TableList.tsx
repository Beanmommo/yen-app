"use client";
import { getHotel, useHotel } from "@/lib/action";
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

export default function TableList() {
  const [hotelArr, error, isLoading] = useHotel();
  const hotelData = dictArrToArr(hotelArr);
  const rows = dataToTableData(hotelData, ["hotel_address", "hotel_name"]);
  const columns = [
    {
      key: "hotel_name",
      label: "HOTEL",
    },
    {
      key: "hotel_address",
      label: "HOTEL ADDRESS",
    },
  ];

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
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
