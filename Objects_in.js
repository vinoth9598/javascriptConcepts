// object literal Notation

const student = {
    fullName : "Ram",
    father : "Sam",
    age : 12, 
    address : "cherry road",
    city : "salem",
    about : function(){
        return `${this.fullName} is from ${this.city}`;
    },
    eligibility : function(){
        return this.age >= 18 ;
    },
};

console.log(student);
console.log(student.about());
console.log(student.eligibility());


//Factory Function 
const studentMethod = {
    about : function() {
        return `${this.fullName} is from ${this.city}`;
    },
    eligibility: function() {
        return this.age >= 18 ;
    },
};

function addStudent(fullName, father, age, address, city) {
    const user = {};
    user.fullName = fullName ,
    user.father = father,
    user.age = age ;
    user.address = address ,
    user.city = city ,
    user.about = studentMethod.about ;
    user.eligibility = studentMethod.eligibility ;

    return user ;
}
console.log(addStudent("Sam", "Raja", 25, "Gandhi Road","Salem"));

//prototype inheritance 
const studentMethod = {
    about : function() {
        return `${this.fullName} is from ${this.city}` ;
    },
    eligibility: function() {
        return this.age >= 18 ;
    }
};

function addStudent(fullName, father, age, address, city){
    const user = Object.create(studentMethod);
    user.fullName = fullName ;
    user.father = father ;
    user.age = age ;
    user.address = address ;
    user.city = city ;
    return user ;
}

console.log(addStudent("Sam","Raja",25,"Gandhi Road","Salem"));