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

interface CallorConstruct{
    (n?:number):string;
    new (s:string): Date
}

const fn = (ctor:CallorConstruct) => {
    console.log(ctor(10))
    console.log(new ctor('10'))
}



fn(Date);
