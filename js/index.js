document.getElementById('players-container').addEventListener('click', function (event) {
    let playerName = event.target.previousElementSibling.firstChild.nextElementSibling.innerText;
    // console.log(playerName);
    displayPlayerList(playerName)
})

function displayPlayerList(playerName) {
    let ol = document.getElementById('selected-player-list');
    let listItem = document.createElement('li');
    listItem.classList.add("list-group-item", "text-light", "p-1");
    listItem.innerText = playerName;
    console.log(listItem);
    ol.appendChild(listItem);
}