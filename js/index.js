document.getElementById('players-container').addEventListener('click', function (event) {
    let btn = document.getElementById(event.target.id);
    btn.setAttribute('disabled', true);
    let playerName = event.target.previousElementSibling.firstChild.nextElementSibling.innerText;
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