let emoji = document.querySelector("#emoji")
let des = document.querySelector("#des")

let data;

async function randomEmojee(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=9c7371a64001b1fe2e0dee2314654ef48704cd01")
    data = await response.json()
}

randomEmojee();

emoji.addEventListener('click' , (evt) => {
    let random = parseInt(Math.random()*data.length);
    let description = data[random].unicodeName.split('.')
    let des2 = description[1].substring(2,description[1].length)
    emoji.innerText = data[random].character;
    des.innerText = des2
})

// ! working of spilit function in array 