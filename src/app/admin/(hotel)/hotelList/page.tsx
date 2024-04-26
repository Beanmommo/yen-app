import PageHeading from "@/ui/PageHeading";
import Table from "@/ui/hotel/Table";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <PageHeading headingTitle="Hotel List" />
      <Link href="/admin/addHotel">
        <button>Add Hotel</button>
      </Link>
      <Table />
    </main>
  );
}
