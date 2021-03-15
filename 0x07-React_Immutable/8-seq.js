import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);

  const students = seq
    .filter((value) => value.score > 70)
    .map((key) =>
      Map(key).withMutations((elem) => {
        elem
          .set(
            'firstName',
            key.firstName.charAt(0).toUpperCase() + key.firstName.slice(1)
          )
          .set(
            'lastName',
            key.lastName.charAt(0).toUpperCase() + key.lastName.slice(1)
          );
      })
    )
    .toJS();
  console.log(students);
};

export default printBestStudents;
