// 5. Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director()

//console.log(createEmployee(200));
//console.log(createEmployee(1000));
//console.log(createEmployee('$500'));

// 6. Creating functions specific to employees
//const isDirector = (employee: Director | Teacher): boolean => employee.workFromHome() === 'Working from home';
const isDirector = (employee: TeacherInterface | DirectorInterface): employee is Director => (employee as Director).workDirectorTasks !== undefined;

const executeWork = (employee: TeacherInterface | DirectorInterface): void => {
  let res = undefined;
  isDirector(employee) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
  console.log(res);
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
