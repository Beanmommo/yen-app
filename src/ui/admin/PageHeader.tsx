import { Divider } from "@nextui-org/divider";

export default function PageHeader({ pageTitle }: { pageTitle: string }) {
  return (
    <div>
      <h1 className=" text-2xl mt-9 text-malamini-primary">{pageTitle}</h1>
      <Divider className="my-4"></Divider>
    </div>
  );
}
