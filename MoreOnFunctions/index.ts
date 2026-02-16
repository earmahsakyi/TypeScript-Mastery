//More on functions
//defining a simple function
function greeter(fn:(a:string)=> void){
    fn("Hello world")
}

function printToConsole(s:string){
    console.log(s)
};

greeter(printToConsole);


//Call signatures
type DescribableFunction = {
    description: string;
    (someArg:number): boolean;
};

function doSomething(fn: DescribableFunction){
console.log(fn.description + 'returned' + fn(6))
};

function myFunc(someArg: number){
    return someArg > 3;
}

myFunc.description = 'BurnaBoy';

doSomething(myFunc)

//javascripts object that can be called without new
//Construct signatures
interface CallorConstruct{
    (n?:number):string;
    new (s:string): Date
}

const fn = (ctor:CallorConstruct) => {
    console.log(ctor(10))
    console.log(new ctor('10'))
}



fn(Date);

//Generic functions
function firstElement(arr: any[]){
    return arr[0];// would be better returning the type of the array elements 

}

function firstElement2<Type>(arr: Type[]): Type | undefined {
    return arr[0];// would be better returning the type of the array elements 
    
}
const s = firstElement2(['a','b']);
const z = firstElement2([2,3]);
const a = firstElement2([]);

//inference
function map<Input,Output>(arr: Input[],func:(arg: Input)=> Output){
    return arr.map(func);
}

const parsed = map([1,2],(n)=> console.log(n));

//Constraints
function longest<Type extends {length: number}>(a: Type, b: Type){
    if(a.length >= b.length){
        return a
    }else {
        return b
    }
}
const longerArray = longest([1,2],[1,2,3])
const longerstring = longest('alice','burna')

//specifying type Arguments
function combine<Type>(arr1: Type[],arr2:Type[]): Type[]{
    return arr1.concat(arr2)
}

const arr = combine<string | number>(['hello'],[1,2,3])

//optional parameters
function f(x?: number){
  return x?.toString()
}

//Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
  
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3,2);//No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

//declaring 'this' in a function
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function (){
        this.admin = true;
    }
};

//Other types to know about
//void
function noop(){
    return;
}

//functions with unknown return types
function safeParse(s:string): unknown{
    return JSON.parse(s)
}


//never 
//some functions never returns a value
function fail(msg: string): never {
    throw new Error(msg)
};

function fn1(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
};

//Rest parameters
function multiply(n: number, ...m: number[]){
    return m.map(x => n * x)
}

multiply(10,2,4,4);


//parameter destructuring
function sum({a, b, c}:{a: number, b:number, c: number}){
    console.log(a + b + c)
}

//using a name type as well
type ABC = {
    a: number;
    b: number;
    c:number;
};
function sum1({a, b, c}:ABC){
    console.log(a + b + c)
};

//Assignability of Functions
 // Return type Void

 type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
 
const v2 = f2();
 
const v3 = f3();