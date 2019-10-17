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




// *** Stretch Problem ***
// - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// - Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// - Add a graduate method to a student.
// - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.