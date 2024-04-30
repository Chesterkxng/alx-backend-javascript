export default function getStudentsByLocation(students, city) {
  if (!(students instanceof Array) && typeof city !== 'string') {
    return [];
  }
  return students.filter((students) => students.location === city);
}
