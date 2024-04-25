export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * get name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * set the name of the course
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * get length of the course
   */
  get length() {
    return this._length;
  }

  /**
   * set the length of the course
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * get the students names
   */
  get students() {
    return this._students;
  }

  /**
   * set the array of students
   */
  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
