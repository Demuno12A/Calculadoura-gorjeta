let bill = 0
let tipPercentage  = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector ("#bill").valueAsNumber
    calculate()
}


function receiveNumberOfPeople(){
    numberOfPeople = document.querySelector ("#people").valueAsNumber
    calculate()

}

function receiveTipPercentage (value){
    removeButtonSelected()
    let customTipInput = document.querySelector("#custom-tip")


    if (customTipInput.value!== ""){
         customTipInput.value = ""
    }
    
    tipPercentage = value / 100
    buttonSelected = document.querySelector (`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    calculate()
 }

 function receiveCustomTipPercentage (){
    removeButtonSelected()
    buttonSelected = null
    TipPercentaget = document.querySelector("#custom-tip")
    calculate()
  
}
function calculate(){

    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
       
        let  tipAmountStrong = document.querySelector(".amount strong")
        let tipAmountPerson = (bill *  tipPercentage) / numberOfPeople
        amountStrong.innerText = `$${ tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector(".total strong")
        let total = (bill / numberOfPeople) + tipAmountPerson
        
       totalStrong.innerText = `$${total.toFixed(2)}`
 
    } else {
        console.log ("preencha tudo")
    }
}

function reset() {

    billInput.value = ""
    bill = 0

    numberOfPeopleInput.value = ""
    numberOfPeople = 0 
    removeButtonSelected()
    document.querySelector("#custom-tip").value = ""
    tipPercentage = 0
    document.querySelector(".amount strong").innerText = '$0.00'
    document.querySelector(".total strong").innerText = 
'0.00'
}

function removeButtonSelected(){
    if (buttonSelected !== null){

        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}