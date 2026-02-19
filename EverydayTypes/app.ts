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
function  welcomeMessage (name:string){
console.log(`Hello ${name.toUpperCase()} !!`)
}

welcomeMessage('Burna')

//Return type annotation
 function getFavNum (): number {
    return 23
 }

 async function myName (): Promise<number> {
    return 23;
 }

 //Anonymous functions 
 const names = ["Alice","Bob", "Eve","Burna","John"];

names.forEach(function(s){
    console.log(s.toUpperCase());
});

function printCoord (pt: {x:number,y:number}){
    console.log(`the coord of x value is ${pt.x}`)
    console.log(`the coord of y value is ${pt.y}`)
}

printCoord({x:7,y:8});

function printName(obj: { first: string, last?:string}){
    console.log(`Hello ${obj.first}`);
    console.log(obj.last?.toUpperCase());
}
printName({first:"Burna"})

function printId(id:number | string){
    console.log(`Your id is ${id}`)
}

function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        console.log(`Hello ${x.join(' and ')}`)
    }else{
        console.log(`Welcome lone traveler ${x}`)
    }
}
welcomePeople(["Burna","Boy", "Alice"]);

//type alias 
type Point = {
    x: number;
    y: number;
};

type Ppt = number | string;


function coord(pt:Point){
    console.log(pt.x);
    console.log(pt.y);
}

const coords = (x:Ppt) => {
console.log(x)
}
coords(12)

//interfaces
interface Points {
    x:number;
    y:number;
}

//diff betn interfaces and type alias 
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}


function getBear(bear:Bear){
    console.log(bear.honey);
    console.log(bear.name);
}

const bear = {
    name:"Hello",
    honey: true
}

getBear(bear)


//types alias 
type Animals = {
    name:string;
}

type bears = Animal & {
    honey: boolean
};

//type assertion
const myCanvas = document.getElementById('my-canva') as HTMLCanvasElement;
const canva = <HTMLCanvasElement> document.getElementById('canva');

const x = "hello" as string;

let y: "hello" = "hello";
y = "hello"

//combining lieral types
function printText (s:string, alignment: "left" | "right" | "center"){
    console.log(`Hello ${s} this is ${alignment}alignment`)

};
printText("Burna","center")

//function return types 
function compare (a:string, b:string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1
}

//combining it with non literals
interface Options {
    width: number
}

function configure(x: Options | "auto"){
    //
}
 configure({width:100}) 
 configure("auto")

//literal infereneces
declare function handleRequest(url:string, method: "GET" | "POST") : void;

// const req = {
//     url: "https://ex.com",
//     method: "GET" as "GET"
// }
//   handleRequest(req.url,req.method);

//using as const to convert the entire object to be type literal
const reqs = {
    url: "https://ex.com",
    method: "GET"
} as const

  handleRequest(reqs.url,reqs.method);

  /* null and undefined using them depends on with either strictNullChecks option being on or off
 with strictNullChecks on ; you will need to test those values before using methods on them with if and else then 
 the postfix !
  */
const liveDangerously = (x?: number | null) => {
    console.log(x!.toFixed());
};

//less common primitive
const oneHundred : bigint = BigInt(100);

//or
const oneHund :bigint = 100n;

//Practice 
//core primitives & literals
type Role = "Admin" | "Customer";
type OrderStatus = "pending" | "paid" | "shipped";


//Object types + Optional properties

interface User {
    id: number;
    name: string;
    email?: string;
    role: Role;
    isActive: boolean;
}

//type alias for reuse 
type Product = {
    id: number;
    name:string;
    price:number;
}

//arrays + object composition
interface Order {
    id: number;
    userId: number;
    products: Product[];
    status: OrderStatus;
    notes?: string
}

//Function parameter & return annotation
function calculateTotal(order:Order): number {
    return order.products.reduce((sum,product)=> sum + product.price,0)
}

//Union types + narrowing
const getUserLabel = (user:User) : string => {
    if(user.role === "Admin"){
        return `Admin: ${user.name}`
    }
    return `Customer: ${user.name}`
}

const sendEmail = (user:User): void => {
    if(!user.email){
        console.log("No email provided!")
        return;
    }
    console.log(`sending email to ${user.email}`);
}

//async function + Promise return types

const fetchUser = async (id:number): Promise<User> => {
    return {
        id,
        name:"Emmanuel",
        role:"Admin",
        isActive: true
    }
};

//type assertions
const input = document.getElementById("UserId") as HTMLInputElement;
const userId = Number(input.value);