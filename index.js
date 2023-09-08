const inputSlider =document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");
const passWordDisplay =document.querySelector("[data-passWordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numbersCheck =document.querySelector("#numbers");
const symbolsCheck =document.querySelector("#symbols");
const indicator =document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateButton");
const allCheckBox =document.querySelector("input[type=checkbox]"); 
const symbols = '!@~`#$%^&*(){}:?/";';


let password="";
let passwordLength = 15;
let checkCount =1;

handleSlider();
// Set the length of Password
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText =passwordLength;
}

function setIndicator(color) {
    indicator.style.background= color;
    //shadow
}

function getRndInteger(min,max) {
     return Math.floor(Math.random()*(max-min))+min//will give the int from Min to Max
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper= false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum||hasSym) && passwordLength>=8) {
        setIndicator("#0f0");
    } else if(
        (hasUpper || hasLower) &&
        (hasNum || hasSym) &&
        passwordLength>=6
    ) {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }
}

 async function copyContent() {
     try{
   await navigator.clipboard.writeText(passWordDisplay.value);
   copyMsg.innerText="copied";
     }
     catch(e) {
        copyMsg.innerText="Failed";
     }
     //To make copy wala span visible
     copyMsg.classList.add("active");

     setTimeout(()=>{
        copyMsg.classList.remove("active");
     },2000);
}

function handleCheckBoxChange() {
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        checkbox.addEventListener('change', handleCheckBoxChange);
        checkCount++;
    })

    //Special Conditiion
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider;
    }
}

allCheckBox.forEach((checkbox)=>{
   checkbox.addEventListener('change',handleCheckBoxChange); 
})

inputSlider.addEventListener('input', function (e) {
        passwordLength = e.target.value;
        handleSlider();
    })

copyBtn.addEventListener('click', ()=>{
    if(passWordDisplay.value)
    copyContent(); 
})

generate.addEventListener('click',() => {
    //none of the checkboxes are selected
    if(checkCount<=0) return;

    if(passwordLength<checkCount) {
        passwordLength=checkCount;
        handleSlider;
    }
});


 
 

