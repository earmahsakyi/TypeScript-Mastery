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
    if(x){
        return x.toString()
    }else {
        return null 
    }

}