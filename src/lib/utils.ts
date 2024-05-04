export function dictArrToArr(dict: { [index: string]: any }) {
  let array = [];
  for (let key in dict) {
    array.push(dict[key]);
  }
  return array;
}

// format data array to table data, adding key prop
export function dataToTableData(
  data: { [index: string]: any },
  keys: string[],
) {
  let tableData = [];
  let count = 0;
  for (let id in data) {
    count++;
    const dict = data[id];
    var extractData: { [key: string]: string } = {};
    extractData.key = count.toString();
    extractData.id = id;
    for (let index in keys) {
      extractData[keys[index].toString()] = dict[keys[index]].toString();
    }
    tableData.push(extractData);
  }
  return tableData;
}

//adding query to url string
export function addQueryToUrl(url: string, key: string, value: string) {
  return `${url}?${key}=${value}`;
}
