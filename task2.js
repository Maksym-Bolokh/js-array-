const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  // Ваш код тут

  let topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  // Ваш код тут

  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  // Ваш код тут

  students.push(student);
  return students; // можна повернути масив для подальшого використання
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  // Ваш код тут

  let filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      filteredStudents.push(students[i]);
    }
  }
  return filteredStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };