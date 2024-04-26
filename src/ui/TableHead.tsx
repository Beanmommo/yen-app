import { table } from "console";

export type TableHeadType = {
  title: string;
};

interface TableHeadProp {
  headTitle?: TableHeadType[];
}

const TableHead: React.FunctionComponent<TableHeadProp> = (
  prop: TableHeadProp,
) => {
  return (
    <thead>
      <tr>
        {prop.headTitle?.map((tableTitle) => {
          return <th key={tableTitle.title}>{tableTitle.title}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
