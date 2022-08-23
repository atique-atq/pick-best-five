// getting the player name 
document.getElementById('players-container').addEventListener('click', function (event) {
    // if five name is added already, it will only give error alert
    if (getPlayerNumber() === 5) { 
        alert("Sorry!! You Can Not Pick more than five players!!")
    }
    else {
        let btn = document.getElementById(event.target.id);
        btn.setAttribute('disabled', true);
        // accessing player name 
        let playerName = event.target.previousElementSibling.firstChild.nextElementSibling.innerText;
        displayPlayerList(playerName)
    }
})

//displaying player name
function displayPlayerList(playerName) {    
    let ol = document.getElementById('selected-player-list');
    let listItem = document.createElement('li');
    listItem.classList.add("list-group-item", "text-light", "p-1");
    listItem.innerText = playerName;
    ol.appendChild(listItem);
    let playerTotalExpense = getPlayerTotalExpense();
    //after adding a new player list, empty the previous calculation;
    makeEmptyFieldValue(playerTotalExpense);
    makeEmptyFieldValue(getNetExpense());
    // makeEmptyInputValue(getManagerInput());
    // makeEmptyInputValue(getCoachInput());

}

//calculate total player price
function calculatePlayerPrice() {
    let inputPlayerPriceField = document.getElementById('perPlayerCostInput')
    let inputPlayerPriceInNumber = parseFloat(inputPlayerPriceField.value) 
    if (inputPlayerPriceInNumber >= 0) {
        totalPlayerPrice = getPlayerNumber() * inputPlayerPriceInNumber
        getPlayerTotalExpense().innerText = totalPlayerPrice;
        // after calculating player price, empty the input field
        makeEmptyInputValue(inputPlayerPriceField)
    }
    else {
        giveErrorAlert();
    }
}

//calculate net price
function calculateNetPrice() {
    let inputManagerPriceInNumber = parseFloat(getManagerInput().value);
    let inputCoachPriceInNumber = parseFloat(getCoachInput().value);
    let playerTotalExpense = parseFloat(getPlayerTotalExpense().innerText);
    if (inputManagerPriceInNumber >= 0 && inputCoachPriceInNumber >= 0 && playerTotalExpense >=0) {
        let netTotalExpense = playerTotalExpense + inputManagerPriceInNumber + inputCoachPriceInNumber;
        getNetExpense().innerText = netTotalExpense; 
       //empty input manager and couch value after calculation
        makeEmptyInputValue(getManagerInput());
        makeEmptyInputValue(getCoachInput());
    }
    else {
        giveErrorAlert();
    }
}

/*--------------------
   utility functions 
 --------------------*/

// retrieve player total expense field
function getPlayerTotalExpense() {
    return document.getElementById('player-total-expense');
}

//retrive net expense field
function getNetExpense() {
    return document.getElementById('total-expense');
}

//get current selected players
function getPlayerNumber() {
    return document.querySelectorAll('ol li').length;
}

function getManagerInput() {
    return document.getElementById('managerCostInput');
}

function getCoachInput() {
    return document.getElementById('coachCostInput');
}

// function for empty any filed
function makeEmptyFieldValue(field) { 
    field.innerText = '';
}

//function for empty any input filed
function makeEmptyInputValue(inputField) { 
    inputField.value = '';
}

function giveErrorAlert() {
    alert('Please check your insert value');
}
