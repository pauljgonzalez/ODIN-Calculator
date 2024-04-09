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
let sum = "";
let calulations = "";

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
        displayNumberOne();
        }

    if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
        if(secondNumber ===""){
            return;
        }
        else{
            secondNumberConcat(0);
        }
    displayNumberTwo();
    }
});

btnOne.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(1); 
           }   
        displayNumberOne()
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(1);
            }
        displayNumberTwo();
    }
   
});

btnTwo.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(2); 
           } 
        displayNumberOne()  
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(2);
            }
        displayNumberTwo();
    }
   
});

btnThree.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(3); 
           }
        displayNumberOne()   
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(3);
            }
        displayNumberTwo();
    }
   
});

btnFour.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(4); 
           }  
        displayNumberOne()
        }

        if(variableToggle === true){
            if(checkNumberTwo() === false){return;}
                else{
                secondNumberConcat(4);
                }
            displayNumberTwo();
        }
}); 
   

btnFive.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(5); 
           }  
        displayNumberOne() 
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(5);
            }
        displayNumberTwo();
    }
   
});

btnSix.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(6); 
           }  
        displayNumberOne() 
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(6);
            }
        displayNumberTwo();
    }
   
});

btnSeven.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(7); 
           }   
        displayNumberOne()
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(7);
            }
        displayNumberTwo();
    }
   
});

btnEight.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(8); 
           }   
        displayNumberOne()
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(8);
            }
        displayNumberTwo();
    }
   
});

btnNine.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat(9); 
           }   
        displayNumberOne()
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(9);
            }
        displayNumberTwo();
    }
   
});

btnPeriod.addEventListener("click", function() {
    if(variableToggle === false){
        if(checkNumberOne () === false){}
           else {
            firstNumberConcat("."); 
           }   
        displayNumberOne()
       }

       if(variableToggle === true){
        if(checkNumberTwo() === false){return;}
            else{
            secondNumberConcat(".");
            }
        displayNumberTwo();
    }
   
});

btnClear.addEventListener("click", function() {
    firstNumber = 0;
    displayNumberOne();
    firstNumber = "";
    secondNumber = "";
    sum = "";
    variableToggle = false;
});

btnPlusMinus.addEventListener("click", function() {
    console.log("Plus Minus");
});

btnPercentage.addEventListener("click", function() {
    console.log("%");
});

btnDivision.addEventListener("click", function() {
    variableToggle = true;
    calulations = 'division';
});

btnMultiplication.addEventListener("click", function() {
    variableToggle = true;
    calulations = 'multiplication';
});

btnSubtracation.addEventListener("click", function() {
    variableToggle = true;
    calulations = 'subtraction';
});

btnAddition.addEventListener("click", function() {
    if( firstNumber == ""){
        return;
    }
    variableToggle = true;
    calulations = 'add';
});

btnEqual.addEventListener("click", function() {
    calculate();
});

function checkNumberOne (){
    if( firstNumber.length > 10 ){
        return false;
    }
}

function checkNumberTwo (){
    if( secondNumber.length > 10 ){
        return false;
    }
}

function displayNumberOne(){
    displayDigits.innerHTML = firstNumber;
}
function displayNumberTwo(){
    displayDigits.innerHTML = secondNumber;
}

function firstNumberConcat(number){
    firstNumber = firstNumber + String(number);
    return firstNumber;
}

function secondNumberConcat(number){
    secondNumber = secondNumber + String(number);
    return firstNumber;
}

function calculate(){
    if(firstNumber == 0 || firstNumber == ''){
        sum = 0;
    }
    if(secondNumber == 0 || secondNumber == ''){
        sum = firstNumber;
    }
    if (calulations == 'add'){
        sum = Number(firstNumber) + Number(secondNumber);
    }
    if (calulations == 'subtraction'){
        sum = Number(firstNumber) - Number(secondNumber);
    }
    if (calulations == 'multiplication'){
        sum = Number(firstNumber) * Number(secondNumber);
    }
    if (calulations == 'division'){
        sum = Number(firstNumber) / Number(secondNumber);
    }
    
    sum = String(sum);
    if(sum.includes(".")){
        sum = Number(sum)
        sum = sum.toFixed(2);
        sum = String(sum);
    }
    if(sum.length > 10)
    {   
     sum = "ERROR";
     displayDigits.innerHTML = sum;
     firstNumber ="";
     secondNumber ="";
    }
    displayDigits.innerHTML = sum;

    firstNumber = sum;
    secondNumber = "";
    calulations = "";
}








