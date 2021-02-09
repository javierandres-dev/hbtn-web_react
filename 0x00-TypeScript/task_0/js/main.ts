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

const $body: HTMLBodyElement = document.querySelector("body");
const $table: HTMLTableElement = document.createElement("table");
const $thead: HTMLTableSectionElement = document.createElement("thead");
const $tbody: HTMLTableSectionElement = document.createElement("tbody");
const $rowHead: HTMLTableRowElement = $thead.insertRow(0);
const $cell1Head: HTMLTableCellElement = $rowHead.insertCell(0);
const $cell2Head: HTMLTableCellElement = $rowHead.insertCell(1);

$cell1Head.textContent = "firstName";
$cell2Head.textContent = "location";
$table.append($thead);

studentsList.forEach((student: Student) => {
  const $row: HTMLTableRowElement = $tbody.insertRow(0);
  const $cell1: HTMLTableCellElement = $row.insertCell(0);
  const $cell2: HTMLTableCellElement = $row.insertCell(1);

  $cell1.textContent = student.firstName;
  $cell2.textContent = student.location;
});

$table.append($tbody);
$body.append($table);
