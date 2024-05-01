export function dictArrToArr(dict: { [index: string]: any }) {
  let array = [];
  for (let key in dict) {
    array.push(dict[key]);
  }
  return array;
}

/* Example Input
hotelSnapshot: {"id1": {...hotel props}, "id2": {...hotel props}}
*/
