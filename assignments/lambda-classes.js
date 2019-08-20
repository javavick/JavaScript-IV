// CODE here for your Lambda Classes

//=============== PERSON CLASS (BASE) ===============

class Person {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}. I'm from ${this.location}.`);
  }
}

const john = new Person({
  name: "John",
  age: 23,
  location: "New Jersey"
});

const susan = new Person({
  name: "Susan",
  age: 28,
  location: "California"
});

console.log(john);
john.speak();
console.log(susan);
susan.speak();

//=============== STUDENT CLASS ===============

class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
    this.grade = object.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach((atr) => console.log(atr));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun the Sprint Challenge for ${subject}.`);
  }

  graduate() {
    if (this.grade >= 70) {
      console.log(`Congratulations, ${this.name}! You've graduated!`);
    } else {
      console.log(
        `I'm sorry, ${
          this.name
        }. You can't graduate just yet. Let's work on those assignments again!`
      );
    }
  }
}

const joshua = new Student({
  name: "Joshua",
  age: 32,
  location: "Texas",
  previousBackground: "Cook",
  className: "WEBPT293",
  favSubjects: ["JavaScript", "Node.JS", "React"],
  grade: 65
});

const holly = new Student({
  name: "Holly",
  age: 30,
  location: "Michigan",
  previousBackground: "Engineer",
  className: "IOSPT78",
  favSubjects: ["Swift", "Xcode", "Protocols"],
  grade: 86
});

console.log(joshua);
joshua.listsSubjects();
joshua.sprintChallenge("Advanced CSS");
console.log(holly);
holly.PRAssignment("Navigation Controller");

//=============== INSTRUCTOR CLASS ===============

class Instructor extends Person {
  constructor(object) {
    super(object);
    this.specialty = object.specialty;
    this.favLanguage = object.favLanguage;
    this.catchphrase = object.catchphrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }

  randomizer(student) {
    let num = Math.floor(Math.random() * 101);

    if (num <= 50) {
      student.grade = student.grade + Math.floor(Math.random() * 31);
    } else {
      student.grade = student.grade - Math.floor(Math.random() * 31);
    }

    console.log(student.grade);
  }
}

const kain = new Instructor({
  name: "Kain",
  age: 21,
  location: "New York",
  specialty: "React",
  favLanguage: "JavaScript",
  catchphrase: "Heyoooooo!"
});

const steph = new Instructor({
  name: "Stephanie",
  age: 45,
  location: "Hawaii",
  specialty: "Node.JS",
  favLanguage: "JavaScript",
  catchphrase: "Awww yeah!"
});

console.log(kain);
kain.demo("Classes");
console.log(steph);
steph.grade(holly, "JavaScript IV");

//=============== PROJECT MANAGER CLASS ===============

class ProjectManager extends Instructor {
  constructor(object) {
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }

  standup(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const chloe = new ProjectManager({
  name: "Chloe",
  age: 56,
  location: "Florida",
  specialty: "CSS",
  favLanguage: "Python",
  catchphrase: "Ho-ho!",
  gradClassName: "WEBPT311",
  favInstructor: "Steph"
});

const ashley = new ProjectManager({
  name: "Ashley",
  age: 32,
  location: "Arizona",
  specialty: "HTML",
  favLanguage: "Ruby",
  catchphrase: "Lemon squares.",
  gradClassName: "WEBPT626",
  favInstructor: "Kain"
});

console.log(chloe);
chloe.standup("memes");
console.log(ashley);
ashley.debugsCode(joshua, "Preprocessing I");

//=============== STRETCH ===============

kain.randomizer(joshua);
joshua.graduate();
steph.randomizer(holly);
holly.graduate();
