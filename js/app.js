// This arrray is for store the names of selected players 
const playerNameArray = [];

function selectedPlayerName(name){
    const playerName = name.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerNameArray.push(playerObj);
    const numberOfPlayer = playerNameArray.length;
    console.log(numberOfPlayer)
}