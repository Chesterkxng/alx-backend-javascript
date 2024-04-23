export default function createIteratorObject(report) {
  const list = [];
  for (const department of Object.values(report.allEmployees)) {
    list.push(...department);
  }
  return list;
}
