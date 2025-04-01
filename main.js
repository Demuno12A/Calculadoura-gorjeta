let bill = 0
let tipPercentage  = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector ("#bill").valueAsNumber
}


function receiveNumberOfPeople(){
    numberOfPeople = document.querySelector ("#people").valueAsNumber

}

function receiveTipPercentage (value){
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }

    let customTipInput = document.querySelector("#custom-tip")


    if (customTipInput.value!== ""){
         customTipInput.value = ""
    }
    
    tipPercentage = value / 100
    buttonSelected = document.querySelector (`#button-${value}`)
    buttonSelected.classList.add("button-selected")
 }

 function receiveCustomTipPercentage (){
  
    if (buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
    TipPercentaget = document.querySelector("#custom-tip")
  
}