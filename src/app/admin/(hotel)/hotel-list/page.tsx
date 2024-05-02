import PageHeader from "@/ui/admin/PageHeader";
import TableList from "@/ui/hotel/TableList";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { NAV_ROUTE } from "../../const";

export default function Page() {
  return (
    <div>
      <PageHeader pageTitle="Hotel List" />
      <div className=" grid grid-cols-2 mb-9">
        <p>10 HOTELS</p>
        <div className="flex justify-end">
          <Button
            as={Link}
            href={NAV_ROUTE.HOTEL.ADD}
            variant="bordered"
            color="primary"
          >
            + Add Hotel
          </Button>
        </div>
      </div>
      <TableList />
    </div>
  );
}
