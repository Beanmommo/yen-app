"use client";
import { getHotel, useHotel } from "@/lib/action";
import { dictArrToArr } from "@/lib/utils";
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
      key: "hotel_address",
      label: "HOTEL ADDRESS",
    },
    {
      key: "hotel_name",
      label: "HOTEL",
    },
  ];
  //const row = dataToTableData(hotelArray, ["hotel_address", "hotel_name"]);

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

function dataToTableData(data: { [index: string]: any }, keys: string[]) {
  let tableData = [];
  let count = 0;
  for (let id in data) {
    count++;
    const dict = data[id];
    var extractData: { [key: string]: string } = {};
    extractData.key = count.toString();
    extractData.id = id;
    for (let index in keys) {
      extractData[keys[index].toString()] = dict[keys[index]].toString();
    }
    tableData.push(extractData);
  }
  return tableData;
}
