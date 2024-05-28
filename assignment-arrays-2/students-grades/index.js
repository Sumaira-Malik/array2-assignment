"use strict";
// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
Object.defineProperty(exports, "__esModule", { value: true });
const students = [
    {
        name: "sana",
        grades: [90, 80, 70],
    },
    {
        name: "farhana",
        grades: [80, 70, 60],
    },
    {
        name: "naila",
        grades: [70, 60, 50],
    },
    {
        name: "hina",
        grades: [60, 50, 40],
    },
    {
        name: "farah",
        grades: [50, 40, 30],
    },
];
const calculateAverageGrade = (grades) => {
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
};
for (const student of students) {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`${student.name} has an average grade of ${averageGrade}`);
}
