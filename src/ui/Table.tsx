import { ReactNode, TableHTMLAttributes } from "react";

interface TableProp extends TableHTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

const Table: React.FunctionComponent<TableProp> = (prop: TableProp) => {
  return <table {...prop}>{prop.children}</table>;
};

export default Table;
