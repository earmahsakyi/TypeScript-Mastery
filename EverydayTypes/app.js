"use strict";
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// let myName: string = "Alice";
//parameter type annotation
function greet(name) {
    console.log(`Hello ${name.toUpperCase()} !!`);
}
greet('Burna');
//Return type annotation
function getFavNum() {
    return 23;
}
async function myName() {
    return 23;
}
//Anonymous functions 
const names = ["Alice", "Bob", "Eve", "Burna", "John"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log(`the coord of x value is ${pt.x}`);
    console.log(`the coord of y value is ${pt.y}`);
}
printCoord({ x: 7, y: 8 });
function printName(obj) {
    console.log(`Hello ${obj.first}`);
    console.log(obj.last?.toUpperCase());
}
printName({ first: "Burna" });
function printId(id) {
    console.log(`Your id is ${id}`);
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log(`Hello ${x.join(' and ')}`);
    }
    else {
        console.log(`Welcome lone traveler ${x}`);
    }
}
welcomePeople(["Burna", "Boy", "Alice"]);
function coord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
const coords = (x) => {
    console.log(x);
};
coords(12);
function getBear(bear) {
    console.log(bear.honey);
    console.log(bear.name);
}
const bear = {
    name: "Hello",
    honey: true
};
getBear(bear);
//type assertion
const myCanvas = document.getElementById('my-canva');
const canva = document.getElementById('canva');
const x = "hello";
let y = "hello";
y = "hello";
//combining lieral types
function printText(s, alignment) {
    console.log(`Hello ${s} this is ${alignment}alignment`);
}
;
printText("Burna", "center");
//function return types 
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    //
}
configure({ width: 100 });
configure("auto");
// const req = {
//     url: "https://ex.com",
//     method: "GET" as "GET"
// }
//   handleRequest(req.url,req.method);
//using as const to convert the entire object to be type literal
const reqs = {
    url: "https://ex.com",
    method: "GET"
};
handleRequest(reqs.url, reqs.method);
/* null and undefined using them depends on with either strictNullChecks option being on or off
with strictNullChecks on ; you will need to test those values before using methods on them with if and else then
the postfix !
*/
const liveDangerously = (x) => {
    console.log(x.toFixed());
};
//less common primitive
const oneHundred = BigInt(100);
//or
const oneHund = 100n;
//Function parameter & return annotation
function calculateTotal(order) {
    return order.products.reduce((sum, product) => sum + product.price, 0);
}
//Union types + narrowing
const getUserLabel = (user) => {
    if (user.role === "Admin") {
        return `Admin: ${user.name}`;
    }
    return `Customer: ${user.name}`;
};
const sendEmail = (user) => {
    if (!user.email) {
        console.log("No email provided!");
        return;
    }
    console.log(`sending email to ${user.email}`);
};
//async function + Promise return types
const fetchUser = async (id) => {
    return {
        id,
        name: "Emmanuel",
        role: "Admin",
        isActive: true
    };
};
//type assertions
const input = document.getElementById("UserId");
const userId = Number(input.value);
