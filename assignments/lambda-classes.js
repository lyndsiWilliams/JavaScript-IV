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
            this.catchPhrase = attr.catchPhrase
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.subject}.`;
    }
}




// *** Student ***

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground,
            this.className = attr.className,
            this.favSubjects = attr.favSubjects
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${this.subject}.`
    }
}




// *** Project Manager ***

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
            this.favInstructor = attr.favInstructor
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}



// *** Objects ***

// Person

const Hagrid = new Person({
    name: 'Rubeus Hagrid',
    location: 'Hut outside of Hogwarts',
    age: 60,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `I shouldn't have done that.`
})

const Bellatrix = new Person({
    name: 'Bellatrix Lestrange',
    location: 'The House of Black',
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
    catchPhrase: `If you die, you need not hand it in.`
})

const Snape = new Instructor({
    name: 'Severus Snape',
    location: 'Hogwarts',
    age: 38,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Always.`
})



// Student

const Harry = new Student({
    name: 'Harry Potter',
    location: 'Hogwarts',
    age: 16,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Expecto Patronum!`
})

const Ron = new Student({
    name: 'Ron Weasley',
    location: 'The Burrow',
    age: 16,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Why spiders???`
})

const Hermione = new Student({
    name: 'Hermione Granger',
    location: 'England',
    age: 16,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `It's leviOsa, not levioSA!`
})



// Project Manager

const Dumbledore = new ProjectManager({
    name: 'Albus Dumbledore',
    location: 'Hogwarts',
    age: 150,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `One can never have enough socks.`
})

const Voldemort = new ProjectManager({
    name: 'Voldemort',
    location: 'Malfoy Manor',
    age: 71,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `There is no good and evil, there is only power and those too weak to seek it.`
})



// *** Attribute testing ***






// *** Stretch Problem ***
// - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// - Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// - Add a graduate method to a student.
// - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.