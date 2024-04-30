export default function setFromArray(array) {
  const finalSet = new Set();
  array.forEach((element) => finalSet.add(element));
  return finalSet;
}
