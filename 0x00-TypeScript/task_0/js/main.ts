'use strict';

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

const $body = document.querySelector('body');
const $table = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row = $table.insertRow()
  const $name = document.createElement('td');
  const $location = document.createElement('td');
  $name.textContent = student.firstName;
  $location.textContent = student.location;
  row.appendChild($name);
  row.appendChild($location);
});
$body.appendChild($table);
