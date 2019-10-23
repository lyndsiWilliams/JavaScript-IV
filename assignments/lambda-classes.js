// CODE here for your Lambda Classes

// *** Person ***

class Person {
    constructor(attr) {
        this.name = attr.name,
            this.age = attr.age,
            this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}




// *** Instructor ***

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty,
            this.favLanguage = attr.favLanguage,
            this.catchPhrase = attr.catchPhrase,
            this.subject = attr.subject
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${this.subject}.`;
    }
}




// *** Student ***

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground,
            this.className = attr.className,
            this.favSubjects = attr.favSubjects,
            this.subject = attr.subject
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(student) {
        return `${student.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(student) {
        return `${student.name} has begun sprint challenge on ${this.subject}.`
    }
}




// *** Project Manager ***

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
            this.favInstructor = attr.favInstructor,
            this.name = attr.name,
            this.channel = attr.channel,
            this.subject = attr.subject
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}



// *** Objects ***

// Person

const Hagrid = new Person({
    name: 'Rubeus Hagrid',
    location: 'the Hut outside of Hogwarts',
    age: 60,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `I shouldn't have done that.`
})

const Bellatrix = new Person({
    name: 'Bellatrix Lestrange',
    location: 'the House of Black',
    age: 46,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I may be bad, but I'm perfectly good at it.`
})



// Instructor

const McGonagall = new Instructor({
    name: 'Minerva McGonagall',
    location: 'Hogwarts',
    age: 72,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `If you die, you need not hand it in.`,
    subject: 'Transfiguration'
})

const Snape = new Instructor({
    name: 'Severus Snape',
    location: 'Hogwarts',
    age: 38,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Always.`,
    subject: 'Potions'
})



// Student

const Harry = new Student({
    name: 'Harry Potter',
    location: 'Hogwarts',
    age: 16,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Expecto Patronum!`,
    favSubjects: 'History of Dark Arts',
    subject: 'Potions'
})

const Ron = new Student({
    name: 'Ron Weasley',
    location: 'The Burrow',
    age: 16,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Why spiders???`,
    favSubjects: 'Lunch',
    subject: 'Potions'
})

const Hermione = new Student({
    name: 'Hermione Granger',
    location: 'England',
    age: 16,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `It's leviOsa, not levioSA!`,
    favSubjects: 'Arithmancy',
    subject: 'Transfiguration'
})



// Project Manager

const Dumbledore = new ProjectManager({
    name: 'Albus Dumbledore',
    location: 'Hogwarts',
    age: 150,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `One can never have enough socks.`,
    channel: 'Hogwarts School of Witchcraft and Wizardry',
    subject: 'Arithmancy'
})

const Voldemort = new ProjectManager({
    name: 'Voldemort',
    location: 'Malfoy Manor',
    age: 71,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `There is no good and evil, there is only power and those too weak to seek it.`,
    channel: 'The Death Eaters',
    subject: 'History of Dark Arts'
})



// *** Attribute testing ***

// Person - speak

console.log('TESTING PERSON :');

console.log(Hagrid.speak());
console.log(Bellatrix.speak());

// Instructor - demo, grade

console.log('TESTING INSTRUCTOR :');

console.log(McGonagall.demo());
console.log(McGonagall.grade(Hermione));

console.log(Snape.demo());
console.log(Snape.grade(Ron));

// Student - listsSubjects, PRAssignment, sprintChallenge

console.log('TESTING STUDENT :');

console.log(Harry.listsSubjects());
console.log(Harry.PRAssignment(Harry));
console.log(Harry.sprintChallenge(Harry));

console.log(Ron.listsSubjects());
console.log(Ron.PRAssignment(Ron));
console.log(Ron.sprintChallenge(Ron));

console.log(Hermione.listsSubjects());
console.log(Hermione.PRAssignment(Hermione));
console.log(Hermione.sprintChallenge(Hermione));

// ProjectManager - standUp, debugsCode

console.log('TESTING PROJECTMANAGER :');

console.log(Dumbledore.standUp());
console.log(Dumbledore.debugsCode(Ron));

console.log(Voldemort.standUp());
console.log(Voldemort.debugsCode(Harry));




// *** Stretch Problem ***
// - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// - Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// - Add a graduate method to a student.
// - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.