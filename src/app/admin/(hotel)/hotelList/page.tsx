import { getHotel } from "@/lib/action";
import { Hotel } from "@/lib/definitions";
import { dictArrToArr } from "@/lib/utils";
import PageHeading from "@/ui/PageHeading";
import Table from "@/ui/Table";
import TableBody from "@/ui/TableBody";
import TableHead, { TableHeadType } from "@/ui/TableHead";
import Link from "next/link";

export default async function Page() {
  const hotelSnapshot = await getHotel();
  const hotelList = dictArrToArr(hotelSnapshot);
  const tableHeadTitle: TableHeadType[] = [
    {
      title: "Hotel",
    },
    {
      title: "Address",
    },
    {
      title: "Room Type",
    },
  ];

  const tableBodyData = [
    hotelList.map((hotel: Hotel) => {
      return {
        key: hotel.id,
        hotelName: hotel.hotel_name,
        hotelAddress: hotel.hotel_address,
        roomType: "0",
      };
    }),
  ];
  return (
    <main>
      <PageHeading headingTitle="Hotel List" />
      <Link href="/admin/addHotel">
        <button>Add Hotel</button>
      </Link>
      <Table>
        <TableHead headTitle={tableHeadTitle}></TableHead>
        <TableBody></TableBody>
      </Table>
    </main>
  );
}
