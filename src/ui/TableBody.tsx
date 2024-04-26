type TableDataType = {
  data: {
    id: string;
    [index: string]: any;
  }[];
};

interface TableBodyProp {
  tableData?: TableDataType;
}

const TableBody: React.FunctionComponent<TableBodyProp> = (
  prop: TableBodyProp,
) => {
  return (
    <tbody>
      <tr>
        <td>test</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
