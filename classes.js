// CLASSES introduced ecmaScript 2015 

class Emp { // create instance of array
  constructor(name,age,married) { // create keys 
    this.name = name;
    this.age = age;
    this.married = married;
    this.skills = [];
  }
  print() {
    console.log(`${this.name} : ${this.age} : ${this.married}`);

  }
  addSkill(skill) {
    this.skills.push(skill);
  }
  printSkills() {
    this.print();
    for(let i = 0; i < this.skills.length; i++)
    console.log(this.skills[i]);
  }
}
let emp1 = new Emp('John',25, true); // create values in object
emp1.addSkill('Java');
emp1.addSkill('Javascript');
emp1.print();
let emp2 = new Emp('Chris',44, false);

emp1.printSkills();
