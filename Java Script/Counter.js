'use strict'

const counter = document.querySelector("input#counter");
const subFive = document.querySelector("button#takeFive");
const subOne = document.querySelector("button#takeOne");
const clear = document.querySelector("button#reset");
const plusOne = document.querySelector("button#addOne");
const plusFive = document.querySelector("button#addFive");
const output = document.querySelector("section#history");
//  subtracting 5 from display
const takeFive = () => {
    const current = counter.value;
    console.log("Curr:", current);

    const newValue = Number.parseInt(current) - 5;
    console.log("New:", newValue);

    counter.value = newValue;
    addHistory(current, change, newValue);
}

// Subtracting 1 from display
const takeOne = () => {
    const current = counter.value;
    console.log("Curr:", current);

    const newValue = Number.parseInt(current) - 1;
    console.log("New:", newValue);

    counter.value = newValue;
    addHistory(current, change, newValue);

}
// Reset the display to 0  
const reset = () => {
   
    counter.value = 0;
    addHistory(null, change, null);
}

// Adding 1 to the display      
const addOne = () => {
    const current = counter.value;
    console.log("Curr:", current);

    const newValue = Number.parseInt(current) + 1;
    console.log("New:", newValue);

    counter.value = newValue;
    addHistory(current, change, newValue);
}
// Adding 5 to the display
const addFive = () => {
    const current = counter.value;
    console.log("Curr:", current);

    const newValue = Number.parseInt(current) + 5;
    console.log("New:", newValue);

    counter.value = newValue;
    addHistory(current, change, newValue);
}
// Keeping a history log
// const addHistory = (current, change, newValue);
// const newHistory = document.createElement("p");
// if (change === 0) {
//     newHistory.innerText = 0;
//     } else {
//         newHistory.innerText = `${current} ${change} = ${newValue}`;
// output.appendChild(newHistory);
//     }

subFive.addEventListener("click", takeFive);
subOne.addEventListener("click", takeOne);
clear.addEventListener("click", reset);
plusOne.addEventListener("click", addOne);
plusFive.addEventListener("click", addFive);
