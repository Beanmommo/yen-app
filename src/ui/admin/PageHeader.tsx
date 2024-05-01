import { Divider } from "@nextui-org/divider";

export default function PageHeader({ pageTitle }: { pageTitle: string }) {
  return (
    <div>
      <h1 className="uppercase tracking-wider text-2xl mt-9 text-primary">
        {pageTitle}
      </h1>
      <Divider className="my-4"></Divider>
    </div>
  );
}
