export default function concatArrays(array1, array2, string) {
  let concatArray = [];
  concatArray = array1.concat(array2);
  let i = 0;
  while (i < string.length) {
    concatArray.push(string[i]);
    i += 1;
  }
  return concatArray;
}
