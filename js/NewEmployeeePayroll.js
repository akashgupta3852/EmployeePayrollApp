class EmployeePayrollData {

    // getters method
    get name() {
        return this._name;
    }

    get profilePic() {
        return this._profilePic;;
    }


    get gender() {
        return this._gender;
    }

    get department() {
        return this._department;
    }
    
    get salary() {
        return this._salary;
    }
    
    get startDate() {
        return this._startDate;
    }
    
    get notes() {
        return this._notes;
    }

    // setters method
    set name(name) {
        let nameRegex = RegExp('^[A-Z][a-z A-Z]{2,}$');
        if(name.match(nameRegex))
            this._name = name;
        else 
            throw "Name is incorrect";
    }

    set department(department) {
        this._department = department;
    }

    set salary(salary) {
        this._salary = salary;
    }

    set gender(gender) {
        this._gender = gender;
    }

    set startDate(startDate) {
            this._startDate = startDate;
    }

    set notes(notes) {
          this._notes = notes;
    }

    // method
    toString() { 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this._startDate ? "undefined" : new Date(this.startDate).toLocaleDateString("en-US", options);
        return "Name: " + this._name + "\n Profile Pic: " + this._profilePic  + "\n Gender: " + this._gender 
                + "\n Department: " + this._department + "\n Salary: " + this._salary + "\n Start Date: " 
                + empDate + "\n Notes: " + this._notes;
    }
}