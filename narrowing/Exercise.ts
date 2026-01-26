//Discriminated Union
type ApiResponse = | {status: 'success'; data: string[]}
                   | {status: 'error'; error: string}
                   | {status: 'loading'}



function handleResponse(res:ApiResponse):string {

    if(res.status === 'success'){
        return res.data.join(',')
    }else if(res.status === 'error'){
        return res.error
    }
    return res.status
}

// && by splitting the API Response Type too goes here 

interface successResponse {
    status: 'success';
    data: string[]
}

interface errorResponse {
    status : 'error';
    error: string;
}

interface loading {
    status : 'loading'
}

type ApiResponse2 = successResponse | errorResponse | loading

const handleResponse2 = (res:ApiResponse2): string => {
    if(res.status === 'success'){
        return res.data.toString()
    }else if (res.status === 'error'){
        return res.error
    }
    return res.status
}

//Truthiness + optional properties
type User1 = {
    id:number;
    name:string;
    email?: string
}

function getEmailDomain (user: User1):string {
    if(user.email !== undefined){
        return user.email
    }else {
        return "No Email found"
    }
};

//typeof + union
function formatValue(value:string | number) : string {
    if(typeof value === 'number'){
        return value.toString();
    }
    return value.toUpperCase();
};


// in Operator
type Admin = {
    role: 'admin';
    permissions: string[]
}
type Customer = {
    role: 'customer';
    purchase: number;

};

type Person = Admin | Customer;

function describePerson(person:Person):string{
    if ('permissions' in person){
        return 'Admin'
    }
    return person.role
};

//instanceof 
class AppError extends Error{
    code:number;
    constructor(message:string,code:number){
        super(message);
        this.code = code
    }
};

function handleError(error: unknown): string {
    if(error instanceof AppError){
        console.log(error.code)
        return error.message
    }
    return "Unknown error"
};

//Type predicate(advanced)
type Cat = {meow(): void};
type Dog = {bark(): void};
type myAnimal = Cat | Dog


function isDog(animal:myAnimal): animal is Dog {
    return 'bark' in animal
};

function makeSound(animal:myAnimal){
    if(isDog(animal)){
        animal.bark()
    }else{
        animal.meow()
    }
}



