import PageHeading from "@/ui/PageHeading";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <PageHeading headingTitle="Hotel List" />
      <Link href="/admin/hotelList/addHotel">
        <button>Add Hotel</button>
      </Link>
    </div>
  );
}
