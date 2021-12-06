'use strict';

function subtract (num1, num2) {
return num1-num2;
}

console.log(subtract(10-50));

const welcome = function (name, age, gender) {
name: Tom 
age: 23
gender: male 
return console.log(`Hi, my name is  ${name}, i am  ${age}, years old and i am  ${gender}`);
}

const {name, age, job} = me;
const print = ({name=tom, age=23, job=developer}) => {
    console.log(`name: ${name}, age: ${age}, job: ${job}`)
}

// Create a callback function that asks for a user to enter a value, then increase that value by 10 through another function.
const increase = (val) => {
    alert(`The new value is ${val+10}`);
}

const parent = (child) => {
    let value = parseInt(prompt("Please enter a value"));
    child(value);
}

parent(increase);