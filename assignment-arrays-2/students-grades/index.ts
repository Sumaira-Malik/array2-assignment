// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.

type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
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

const calculateAverageGrade = (grades: number[]) => {
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
};

for (const student of students) {
  const averageGrade = calculateAverageGrade(student.grades);
  console.log(`${student.name} has an average grade of ${averageGrade}`);
}




