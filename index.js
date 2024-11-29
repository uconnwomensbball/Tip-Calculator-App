//INPUTS
const billInput = document.getElementById("bill-input")
const customInput = document.getElementById("custom-input")
const peopleInput = document.getElementById("people-input")

//BUTTONS
const fivePercentBtn = document.getElementById("five-percent-btn")
const tenPercentBtn = document.getElementById("ten-percent-btn")
const fifteenPercentBtn = document.getElementById("fifteen-percent-btn")
const twentyfivePercentBtn = document.getElementById("twentyfive-percent-btn")
const fiftyPercentBtn = document.getElementById("fifty-percent-btn")
const resetBtn = document.getElementById("reset-btn")

//RESULTS
const tipResultEl = document.getElementById("tip-result-el")
const totalResultEl = document.getElementById("total-result-el")

//WARNINGS
const billZeroWarning = document.getElementById("bill-zero-warning")
const peopleZeroWarning = document.getElementById("people-zero-warning")

//PERCENT ICON
const percentIcon = document.getElementById("percent-icon")

//CUSTOM
let tipSelected = 0

//FUNCTIONS
document.addEventListener("click", function(e){
    if (e.target.id === "five-percent-btn"){
        tipSelected = .05
        customInput.value = ""}
    else if (e.target.id === "ten-percent-btn"){
        tipSelected = .10
        customInput.value = ""}
    else if (e.target.id === "fifteen-percent-btn"){
        tipSelected = .15
        customInput.value = ""}
    else if (e.target.id === "twentyfive-percent-btn"){
        tipSelected = .25
        customInput.value = ""}
    else if (e.target.id === "fifty-percent-btn"){
        tipSelected = .50
        customInput.value = ""}
        calculateTip(tipSelected)
})

customInput.addEventListener("input", function(){
    percentIcon.style.display = "block"
    tipSelected = customInput.value / 100
    calculateTip(tipSelected)
})

function calculateTip(tip){
    let bill = parseInt(billInput.value)
    let people = parseInt(peopleInput.value)
    if (billInput.value && peopleInput.value >=1){
        tipResultEl.textContent = `$${((bill * tip)/(people)).toFixed(2)}`
        totalResultEl.textContent = `$${(((bill * tip) + bill)/people).toFixed(2)}`}
    checkInputs()
}
  
resetBtn.addEventListener("click", function(){
    billInput.value = ""
    customInput.value = ""
    peopleInput.value = ""
    tipResultEl.textContent = "$0.00"
    totalResultEl.textContent = "$0.00"
}) 

function resetResults(){
    tipResultEl.textContent = "$0.00"
    totalResultEl.textContent = "$0.00"
}

function checkInputs(){
    //BillInput  
    if (billInput.value === "0" || billInput.value === ""){
        billInput.classList.remove("blue-border")
        billInput.classList.add("red-border")
        billZeroWarning.textContent = "Can't be zero"}
    else {
        billInput.classList.remove("red-border")
        billZeroWarning.textContent = ""}
        
    if (billInput.value !== 0 && billInput.value){
        billInput.classList.add("blue-border")}
    else{
        billInput.classList.remove("blue-border")}
    
     if (billInput.value < 0 || billInput.value >100000){
        billInput.value = ""
        resetResults()}
    
    //CustomInput
    if (customInput.value === ""){
        percentIcon.style.display = "none"
        customInput.classList.remove("blue-border")}
    else {
        customInput.classList.add("blue-border")}
        
    if (customInput.value < 0 || customInput.value >100 || customInput.value.includes(".")||       customInput.value.includes("-")){
        customInput.value = ""
        percentIcon.style.display = "none"
        resetResults()}
    
       //PeopleInput
     if (peopleInput.value === "0" || peopleInput.value === ""){
        peopleInput.classList.remove("blue-border")
        peopleInput.classList.add("red-border")
        peopleZeroWarning.textContent = "Can't be zero"}
    else {
        peopleInput.classList.remove("red-border")
        peopleZeroWarning.textContent = ""}
    
    if (peopleInput.value !== 0 && peopleInput.value){
        peopleInput.classList.add("blue-border")}  
    else{
        peopleInput.classList.remove("blue-border")}
        
    if (peopleInput.value < 0 || peopleInput.value > 100|| peopleInput.value.includes(".")){
        peopleInput.value = ""
        resetResults()}
}