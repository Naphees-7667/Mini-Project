const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

let msg = document.querySelector(".msg")

for(let select of dropdowns){

    for(let currCode in countryList){

        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected"
        }

        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected"
        }

        select.append(newOption);

    }

    select.addEventListener("change", (evt) => {

        updateFlag(evt.target);
        
    })
}

async function updateExchangeRate(){
    let amount = document.querySelector("input");
    let amtVal = parseInt( amount.value);
    
    if(isNaN(amtVal) || amtVal < 1){
        amtVal = 1;
    }

    //! important to take care of try and catch block

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    try{
        const response = await fetch(URL)
        if(!response.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json()
        let rate = data[toCurr.value.toLowerCase()];

        if(rate == undefined){
            throw new Error("Invalid currency code or data not available")
        }

        let finalAmount = rate * amtVal;

        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    }

    catch(error){
        msg.innerText = `Error: ${error.message}`
    }

}

const updateFlag = (element) => {

    let currCode = element.value;

    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    // * let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

btn.addEventListener("click" ,(evt) => {
    evt.preventDefault();
    updateExchangeRate()
})

window.addEventListener("load", () => {
    updateExchangeRate();
})