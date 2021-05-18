class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
    this.email =
      firstName.toLowerCase() + "." + lastName.toLowerCase() + "@company.com";
  }
}
const emp1 = new Employee("Mary", "Abdul");
console.log(emp1);
