// call method in js
function total(eng,mat){
    console.log(this.name + " got " + (eng + mat) + " Marks " );
}

const user = {name : "Ram"} ;

total.call(user, 65, 75);

//apply method in js
function total(eng, mat){
    console.log(this.name + " got " + (eng + mat) + " Marks ");
}

const user = {name : "vinoth"};

total.apply(user, [65, 75]);

//Bind method in js

function total(eng, mat){
    console.log(this.name + " got " + (eng, mat) + " Marks");
}

const user = { name : "Ram"} ;
const fun = total.bind(user, 65, 75);