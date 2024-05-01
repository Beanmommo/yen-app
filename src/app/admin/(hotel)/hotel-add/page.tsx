import PageHeader from "@/ui/admin/PageHeader";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { NAV_ROUTE } from "../../const";
import AddFormSection from "@/ui/hotel/AddFormSection";

export default function Page() {
  return (
    <div>
      <PageHeader pageTitle="Add Hotel" />
      <AddFormSection />
    </div>
  );
}
