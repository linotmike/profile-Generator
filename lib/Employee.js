
//  Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }
    getname() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getrole() {
      return this.role;
    }
  }
  module.exports = Employee;
  