"use strict";
//Narrowing
// function padLeft(padding: number| string, input:string): string{
//     throw new Error("Not implemented yet");
// }
function padLeft(padding, input) {
    if (typeof padding === "number") {
        console.log(" ".repeat(padding));
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
//exapmple 2 truthiness checking
const printAll = (strs) => {
    if (strs && typeof strs === 'object')
        for (const s of strs) {
            console.log(s);
        }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
    }
};
//Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
;
function printAll2(strs) {
    if (strs !== null) {
        if (strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
}
;
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value * factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    else {
        animal.fly;
    }
}
;
//InstanceOf narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
;
//Assignment
let xR = Math.random() < 0.5 ? 10 : "Hello";
xR = 10; //assigning any other than number or string will results in a error
console.log(xR);
//control flow analysis
function example1() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "Hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
;
//using types predicates 
function isFish(pet) {
    return pet.swim() !== undefined;
}
// // let pet = getSmallPet()
// if(isFish(pet)){
//     pet.swim()
// }else{
//     pet.fly()
// }
