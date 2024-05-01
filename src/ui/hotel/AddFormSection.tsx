import { NAV_ROUTE } from "@/app/admin/const";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export default function AddFormSection() {
  return (
    <form>
      <Input type="text" label="HOTEL NAME" className="my-4" radius="sm" />
      <Input type="text" label="HOTEL ADDRESS" className="mb-4" radius="sm" />
      <h5 className="text-primary cursor-pointer">Pin Location in Map</h5>
      <div className="grid gap-4 grid-cols-2 max-w-60">
        <Button
          as={Link}
          href={NAV_ROUTE.HOTEL.HOME}
          variant="bordered"
          className=" my-4"
        >
          Cancel
        </Button>
        <Button
          as={Link}
          href={NAV_ROUTE.HOTEL.HOME}
          className=" my-4"
          color="primary"
        >
          Add Hotel
        </Button>
      </div>
    </form>
  );
}
