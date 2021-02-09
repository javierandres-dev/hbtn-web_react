'use strict';
// 1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any;
};
/*
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);
*/
// 2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number,
};
/*
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
*/
// 3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string =>`${firstName.charAt(0)}. ${lastName}`;
/*
// 4. Writing a class
interface ConstructorStudent {
  new(firstName: string, lastName: string): ClassStudent;
}

interface ClassStudent {
  firstName: string;
  lastName: string;
}

class StudentClass implements ClassStudent {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}

console.log(printTeacher("John", "Doe"));*/
