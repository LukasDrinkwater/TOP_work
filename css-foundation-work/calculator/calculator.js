var calcFunction;
var argA = "";
var sumOfCalculations = 0;
var argB = "";
var screenOutput;

// functions for basic math operators
function add (a, b) {
    return (a + b);

    //add function the round it to 2 decimals
};

function subtract (a, b) {
    return (a - b);
};

function multiply (a, b) {
    //let sum = numbers.reduce((a, b) => a * b, 1);
    let sum = (a * b);
    return(sum);
};

function divide (a, b) {
    return (a / b);
};

function operate (a, b) {

    switch (calcFunction) {
        case "add":
            return add(a, b);           

        case "subtract":
            return subtract(a, b);         

        case "multiply":
            return multiply(a, b);           

        case "divide":
            return divide(a,b);
        default:

        //maybe output an error saying youve not imput correctly.
            break;
    }
};


// code to add an eventlistener to all the buttons in the number
// container. The if statement checks to see if calcFunction has
//already been ran from pressing one of the math buttons. And
// if it has it assigns the number to argB instead of argA

const numberContainer = document.querySelector(".numberContainer");
const numberContainerButtons = numberContainer.querySelectorAll(".numberButtons");
var display = document.querySelector(".display");
numberContainerButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML += button.innerHTML;
        if(calcFunction === undefined) {
            argA += button.innerHTML;
            console.log(argA);
        }
        else {
            argB += button.innerHTML;
            console.log(argB);
        }
        
    });
});

//add event listener to the equals button.
const equalsButton = numberContainer.querySelector(".equals");
equalsButton.addEventListener('click', () => {
    display.innerHTML = doMath();
    // argB = parseInt(display.innerHTML);
    // refreshDisplay();
    // display.innerHTML = Math.round((doMath() + Number.EPSILON) * 100) / 100;
});


//function that runs when the equals button is pressed.
// parse the string to INT in here
function doMath() {
    let parsedA, parsedB = 0;
    parsedA = parseInt(argA);
    parsedB = parseInt(argB);
    return operate(parsedA, parsedB);
};


// function to clear the display variable

function refreshDisplay() {
    display.textContent = null;
};

//when the AC button is clicked it removes the text being
//displayed in the screen.
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', () => {
        console.log(display);
    refreshDisplay();
});

//code when the math function buttons are clicked.
// if calcFunction isnt undefined it sets sumOfCalculations
// if it isnt set it sets it.
const mathButtonsContainer = document.querySelector(".mathButtons");
const mathButtons = mathButtonsContainer.querySelectorAll('button');
mathButtons.forEach(button => {
    if(button.className == "clearButton") {
        return;
    }
    button.addEventListener('click', () => {
        display.innerHTML += button.textContent;
        if(calcFunction !== undefined) {
            sumOfCalculations = doMath();
            console.log(sumOfCalculations);
            argA = sumOfCalculations;
            argB = "";
        }  
        calcFunction = button.id
       
    });
});


