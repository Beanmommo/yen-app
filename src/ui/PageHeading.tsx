interface PageHeadingProp {
  headingTitle: string;
}

export default function PageHeading(prop: PageHeadingProp) {
  return (
    <div className=" grid grid-cols-1 gap-5 mb-5">
      <h1 className=" text-2xl text-[#0013BA] uppercase tracking-wider">
        {prop.headingTitle}
      </h1>
      <span className=" border border-dashed"></span>
    </div>
  );
}
