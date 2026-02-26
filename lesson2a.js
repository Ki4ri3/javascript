// Object Data Type:
// An object in JS is a data type that stores data in form of key value pairs.

let person = {
    Name : "Kiarie Lewis",
    Age : 70,
    isRegistered : true
};

console.log("The Detals of the person is: ",person)

// First method isi by use of the square brackets.
console.log("The age is: ",person["Age"])

// Second method is by use of the dot (.)notation.
console.log(person.Name)

// Check the data type
console.log(typeof(person))

// Array Data Type:
// Refers to a collection of items that are on indexes
let countries = ["Kenya","Uganda","Rwanda","Burundi","Ethiopia","Somali","Eritrea"]
 console.log("The entire array of countries is: ",countries)

//  To access the items of an array we use the index
 console.log(countries[3])

//  You can slice items of an array.
console.log(countries.slice(2,5))