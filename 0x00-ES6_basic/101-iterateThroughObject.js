export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let i = 0;
  for (const employees of reportWithIterator) {
    str += employees;
    if (i < reportWithIterator.length - 1) {
      str += ' | ';
    }
    i += 1;
  }
  return str;
}
