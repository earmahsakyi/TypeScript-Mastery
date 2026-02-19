//anonymous
function greet(person: {name: string; age:number}){
    return "hello" + person.name;
}


//through interface 
interface Person1 {
    name: string;
    age:number
};

function greet1(person: Person1){
    return "hello" + person.name;
}

type  Person2 = {
    name: string;
    age:number
};

function greet2(person: Person2){
    return "hello" + person.name;
}


// optional Properties
interface PaintOptions {
    shape : Shape;
    xPos?: number;
    ypos?: number;
}

function PaintShape(opts: PaintOptions){
    let xPos = opts?.xPos;
    // if(opts.xPos != undefined){
    //     xPos = opts.xPos
    // }
    return xPos

};

//readOnly properties
interface sometype {
    readonly name : string;
};

function doSomething(obj : sometype){
    console.log(obj.name);
//but can't  re-assign it.
    // obj.name = 'hello'
};

interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
//   home.resident = {
//     name: "Victor the Evictor",
//     age: 42,
//   };
}

