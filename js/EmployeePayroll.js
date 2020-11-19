class EmployeePayrollData {
    // Property
    name;
    gender;
    department;
    salary;
    startDate;
    notes;

    constructor(...params) {
        this.name = params[0];
        this.gender = params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
        this.notes = params[5];
    }

    get getName() {
        return this.name;
    }

    get getGender() {
        return this.gender;
    }

    get getDepartment() {
        return this.department;
    }
    
    get getSalary() {
        return this.salary;
    }
    
    get getStartDate() {
        return this.startDate;
    }
    
    get getNotes() {
        return this.notes;
    }

    set setName(name) {
        this.name = name;
    }

    set setDepartment(department) {
        this.department = department;
    }

    set setSalary(salary) {
        this.salary = salary;
    }

    set setGender(gender) {
        this.gender = gender;
    }

    set setStartDate(startDate) {
          this.startDate = startDate;
    }

    set setNotes(notes) {
          this.notes = notes;
    }

    toString() { 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        new Date(this.startDate).toLocaleDateString("en-US", options);
        return " Name: " + this.name + "\n Gender: " + this.gender + "\n Department: " + this.department + "\n Salary: " + this.salary + "\n Start Date: " + empDate + "\n Notes: " + this.notes;
    }
}

const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};

const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z][a-z A-Z]{2,}$');
    if(nameRegex.test(name.value))
        nameError.textContent = "";
    else
        nameError.textContent = "Name is incorrect";
});

function save() {
    try {
        let name = document.querySelector('#name').value;
        let gender = document.querySelector('input[name=gender]:checked').value;
        let deptList = new Array();
        let departments = document.querySelectorAll('input[name=department]:checked');
        for (let i = 0; i < departments.length; i++) {
            deptList.push(department[i].value);
        }
        let salary = document.querySelector('#salary').value;
        let year = document.querySelector('#year').value;
        let month = document.querySelector('#month').value;
        let day = document.querySelector('#day').value;
        let startDate = new Date(year, month-1, day);
        let notes = document.querySelector('#notes').value;
        let newEmployee = new EmployeePayrollData(name, gender, deptList, salary, startDate, notes);
        alert(newEmployee);
    } catch (error) {
        alert(error);
    }
}