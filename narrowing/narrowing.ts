//Narrowing
// function padLeft(padding: number| string, input:string): string{
//     throw new Error("Not implemented yet");
// }

function padLeft(padding: number| string, input:string): string{
    if(typeof padding === "number"){
        console.log(" ".repeat(padding))
        return " ".repeat(padding) + input
    }
    return padding + input;
}


//exapmple 2 truthiness checking
const printAll= (strs: string | string[] | null) => {
    if(strs && typeof strs === 'object')
        for (const s of strs){
    console.log(s)
    }else if (typeof strs === 'string'){
        console.log(strs)
    }else{

    }
}

//Equality narrowing
function example(x:string | number, y: string | boolean){
    if(x === y){
        x.toUpperCase()
        y.toUpperCase()
    }else{
        console.log(x)
        console.log(y)
    }
};

function printAll2 (strs: string | string[] | null ){
    if(strs !==  null){
        if(strs === 'object'){
            for (const s of strs){
                console.log(s)
            }
        }
    }else if(typeof strs === 'string'){
        console.log(strs);
    }
};

interface Container {
    value: number | null | undefined;
}

function multiplyValue (container: Container, factor: number){
    if(container.value != null){
        console.log(container.value)
        container.value * factor
    }
}


//The in operator Narrowing 
type Fish = {
swim : ()=> void
}
type Bird = {
fly : ()=> void
}
type Human = {
fly? : ()=> void;
swim? : ()=> void;
}

function move(animal: Fish | Bird | Human) {
    if( "swim" in animal){
        return animal.swim
    }else{
        animal.fly
    }
    
};

//InstanceOf narrowing
function logValue(x: Date | string){
    if (x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
};

//Assignment
let xR = Math.random() < 0.5 ? 10 : "Hello"

xR = 10; //assigning any other than number or string will results in a error
console.log(xR)

//control flow analysis
function example1(){
    let x: string | number | boolean
     x = Math.random()< 0.5
     console.log(x)

     if(Math.random() < 0.5){
        x="Hello"
        console.log(x)
     }
     else{
        x= 100
        console.log(x)
     }
     return x
};

//using types predicates 
function isFish (pet: Fish | Bird): pet is Fish{
    return(pet as Fish).swim() !== undefined
}

// // let pet = getSmallPet()
// if(isFish(pet)){
//     pet.swim()
// }else{
//     pet.fly()
// }

