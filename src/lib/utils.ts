export function dictArrToArr(dict: { [index: string]: any }) {
  let array = [];
  for (let key in dict) {
    array.push(dict[key]);
  }
  return array;
}
