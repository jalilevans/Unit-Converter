/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let initialNumberEl = document.getElementById("initial-number")
let initialNumber = 0
const conversionCards = [
    {header: "Length (Meter/Feet)", body: ""},
    {header: "Volume Liters/Gallons", body: ""},
    {header: "Mass (Kilograms/Pounds)", body: ""}
]   
const cardBody = document.getElementById("card-body")

convertBtn.addEventListener("click", () => {
    if ( Number(initialNumberEl.value) ) {
        initialNumber = Number(initialNumberEl.value)
        calculateConversions(initialNumber)
        render(conversionCards)
    } else {
        console.log("No number entered")
    }
    
})

function calculateConversions(num) {
    calcLength(num)
    calcVolume(num)
    calcMass(num)
    console.log(conversionCards)
}

function calcLength(num) {
    const metersToFeet = (num*3.281).toFixed(3)
    const feetToMeters = (num/3.281).toFixed(3)
    conversionCards[0].body = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`
}

function calcVolume(num) {
    const litersToGallons = (num*0.264).toFixed(3)
    const gallonsToLiters = (num/0.264).toFixed(3)
    conversionCards[1].body = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`
}

function calcMass(num) {
    const kilogramsToPounds = (num*2.204).toFixed(3)
    const poundsToKilograms = (num/2.204).toFixed(3)
    conversionCards[2].body = `${num} kilos = ${kilogramsToPounds} pounds | ${num} pounds = ${poundsToKilograms} kilos`
}

function render(arr) {
    let body = ""
    for (let i = 0; i < arr.length; i++) {
        body += `
            <div class="conversion-box">
                <h3>${arr[i].header}</h3>
                <p>${arr[i].body}</p>
            </div>
            `
    }
    cardBody.innerHTML = body
}