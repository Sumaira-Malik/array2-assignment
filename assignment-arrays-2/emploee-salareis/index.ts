// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.




type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    calculateSalary: () => number;
    bonus: () => number;
    salary: number;
    totalBonus: number;
}

const calculateSalary = function(this: Employee): number {
    return this.hoursWorked * this.hourlyRate;
};

const bonus = function(this: Employee): number {
    if (this.hoursWorked >= 20) {
        return this.hoursWorked * this.hourlyRate * 0.1;
    } else {
        return 0;
    }
};

const employees: Employee[] = [
    {
        name: "ali",
        hoursWorked: 20,
        hourlyRate: 10,
        calculateSalary: calculateSalary,
        bonus: bonus,
        salary: 0,
        totalBonus: 0
    },
    {
        name: "yasir",
        hoursWorked: 18,
        hourlyRate: 20,
        calculateSalary: calculateSalary,
        bonus: bonus,
        salary: 0,
        totalBonus: 0
    },
    {
        name: "amna",
        hoursWorked: 30,
        hourlyRate: 10,
        calculateSalary: calculateSalary,
        bonus: bonus,
        salary: 0,
        totalBonus: 0
    }
];

// Calculate the salary and bonus for each employee
employees.forEach(employee => {
    employee.salary = employee.calculateSalary();
    employee.totalBonus = employee.bonus();
});

console.log(employees);

