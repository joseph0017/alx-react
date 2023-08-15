import { Seq } from 'immutable';

export function printBestStudents (object) {
    const bestStudents = Seq(object)
    .filter((student) => 
        student.score >= 70
    )
    .map((student) => ({
        ...student,
        firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
        lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject()
    console.log(bestStudents)
}

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   }
// };

// const bestStud = printBestStudents(grades);
// console.log(bestStud)