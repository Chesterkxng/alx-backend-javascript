export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];
  for (const idxWord of array) {
    appendArray.push(appendString + idxWord);
  }
  return appendArray;
}
