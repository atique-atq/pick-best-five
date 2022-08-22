// getting the player name 
document.getElementById('players-container').addEventListener('click', function (event) {
    // if five name is added already, it will only give error alert
    if (document.querySelectorAll('ol li').length === 5) { 
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
}