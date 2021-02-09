'use strict';
// 0. Creating an interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstSudent: Student = {
  firstName: 'Javier',
  lastName: 'Patarroyo',
  age: 44,
  location: 'Bogotá',
}

const secondSudent: Student = {
  firstName: 'Andrés',
  lastName: 'Garzón',
  age: 45,
  location: 'Colombia',
}

const studentsList: Array<Student> = [ firstSudent, secondSudent ];

const $body: HTMLBodyElement  = document.querySelector('body');
const $table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student) => {
  const $row: HTMLTableRowElement = $table.insertRow()
  const $name: HTMLTableDataCellElement = document.createElement('td');
  const $location: HTMLTableDataCellElement = document.createElement('td');
  $name.textContent = student.firstName;
  $location.textContent = student.location;
  $row.appendChild($name);
  $row.appendChild($location);
});
$body.appendChild($table);
