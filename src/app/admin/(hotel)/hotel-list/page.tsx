import PageHeader from "@/ui/admin/PageHeader";
import TableList from "@/ui/hotel/TableList";
import { Button } from "@nextui-org/button";

export default function Page() {
  return (
    <div>
      <PageHeader pageTitle="Hotel List Page" />
      <div className=" grid grid-cols-2 mb-9">
        <p>10 HOTELS</p>
        <div className="flex justify-end">
          <Button>Add Hotel</Button>
        </div>
      </div>
      <TableList />
    </div>
  );
}
