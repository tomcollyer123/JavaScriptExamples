'use strict'


document.querySelector("button#textColour").addEventListener("click", blueToRed);
document.querySelector("button#bgColour").addEventListener("click", greenToPink);
document.querySelector("button#fonts").addEventListener("click", tnrToArial);

const blueParagraph = document.querySelector("#blueText");
// Changes the first paragraph's text colour from blue to red.
function blueToRed() {
  blueParagraph.style.color = "red";
  blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

const greenParagraphs = document.querySelectorAll(".greenBg");
// Changes the second paragraph's green background to pink.
function greenToPink() {
  for (let greenParagraph of greenParagraphs) {
    greenParagraph.className = "hotpinkBg";
    greenParagraph.textContent = greenParagraph.textContent.replace("green","hotpink");
  }
}

const tnrParagraph = document.querySelector("#tnrParagraph");
// Change the font style of the last paragraph from Times New Roman to Arial.
function tnrToArial() {
  tnrParagraph.style.fontFamily = "arial";
  tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}