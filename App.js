// favMovie("The Sandlot")
// function favMovie (movie) {
//     console.log (`My favorite movie is ${movie}`);
// }

let favMovie = (movie = `The Room`, name = `Tommy Wiseau`) => { console.log(`My name is ${name} and my favorite movie is ${movie}.`); };
favMovie()

let getFirstName = (fullName) => {
    return console.log(`My first name is, "${fullName.split(' ')[0]}".`);
};

getFirstName('Justin Kelley');

let getFirstNameConcise = (fullName) => console.log(`My First name is , "${fullName.split(' '[1])}".`);
getFirstNameConcise("Justin Kelley");

function doMath(x, y) {
    let exponent = Math.pow(x, y);
    let product = x * y;

    return { exponent, product };
};

let results = doMath(2, 3);


console.log(`The exponent is ${results.exponent}.`);

console.log(`The product is ${results.product}.`);

let spreadArray = [ `Justin`, `Birmingham`, `Wings` ];

let spreadFunction = (name, location, food) => {
    console.log(`My name is ${name}.`);
    console.log(`I live in ${location}.`);
    console.log(`My favorite food is ${food}.`);
};

spreadFunction(...spreadArray);

let myName = `Justin`;

let anotherSpreadFunction = (anotherName) => {
    console.log(`Before: ${anotherName}`);
    let spreadName = [ ...anotherName ];
    console.log(`After:`);
    for(let i = 0; i < spreadName.length; i += 1) {
        console.log(spreadName[i]);
    };
}
anotherSpreadFunction(myName);