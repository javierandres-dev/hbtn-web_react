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
const isDirector = (employee: Director | Teacher): boolean => employee.workFromHome() === 'Working from home';

const executeWork = (employee: Director | Teacher): string => {
  let res = undefined, check = isDirector(employee);
  if (isDirector(employee)) {
    //res = employee.workFromHome();
    res = employee.workDirectorTasks();
    } else {
      //res = employee.workFromHome();
      res = employee.workTeacherTasks();
    }
    console.log(check)
    console.log(res);
    return res;
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
