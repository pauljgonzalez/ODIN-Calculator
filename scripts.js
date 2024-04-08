const btnZero = document.querySelector("#zero");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnPeriod = document.querySelector("#period");

const btnClear = document.querySelector("#clear");
const btnPlusMinus = document.querySelector("#plus-minus");
const btnPercentage = document.querySelector("#percentage");
const btnDivision = document.querySelector("#division");
const btnMultiplication = document.querySelector("#multiplication");
const btnSubtracation = document.querySelector("#subtraction");
const btnAddition = document.querySelector("#addition");
const btnEqual = document.querySelector("#equal");

const displayDigits = document.querySelector(".display-digits");

let variableToggle = false;
let firstNumber = "0";
let secondNumber = "";

displayNumberOne()
firstNumber = "";
btnZero.addEventListener("click", function() {
    if(variableToggle === false){
         if(checkNumberOne () === false){return;}
            if(firstNumber === ""){
                return;
            }
            else{
                firstNumberConcat(0);
            }   
        displayNumberOne()
        }
});

btnOne.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(1); 
           }   
       }
   displayNumberOne()
});

btnTwo.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(2); 
           }   
       }
   displayNumberOne()
});

btnThree.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(3); 
           }   
       }
   displayNumberOne()
});

btnFour.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(4); 
           }   
}
   displayNumberOne()
});

btnFive.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(5); 
           }   
       }
   displayNumberOne()
});

btnSix.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(6); 
           }   
       }
   displayNumberOne()
});

btnSeven.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(7); 
           }   
       }
   displayNumberOne()
});

btnEight.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(8); 
           }   
       }
   displayNumberOne()
});

btnNine.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(9); 
           }   
       }
   displayNumberOne()
});

btnPeriod.addEventListener("click", function() {
    console.log(".");
});

btnClear.addEventListener("click", function() {
    firstNumber = 0;
    displayNumberOne();
    firstNumber = "";
    secondNumber = "";
});

btnPlusMinus.addEventListener("click", function() {
    console.log("Plus Minus");
});

btnPercentage.addEventListener("click", function() {
    console.log("%");
});

btnDivision.addEventListener("click", function() {
    console.log("/");
});

btnMultiplication.addEventListener("click", function() {
    console.log("*");
});

btnSubtracation.addEventListener("click", function() {
    console.log("-");
});

btnAddition.addEventListener("click", function() {
    console.log("+");
});

btnEqual.addEventListener("click", function() {
    console.log("=");
});

function checkNumberOne (){
    if( firstNumber.length > 10 ){
        return false;
    }
}

function checkNumberTwo (){
    if( SecondNumber.length > 10 ){
        return false;
    }
}

function displayNumberOne(){
    displayDigits.innerHTML = firstNumber;
}

function firstNumberConcat(number){
    firstNumber = firstNumber + String(number);
    return firstNumber;
}







