// This arrray is for store the names of selected players 
const playerNameArray = [];

// This function is for display players name in Selected area
function displayPlayerName(playerName) {
    let totalPrice = 0;
    const selectedPlayer = document.getElementById('selected-player');
    selectedPlayer.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        // console.log(playerNameArray[i].playerName)
        const name = playerNameArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = name;
        selectedPlayer.appendChild(li)


    }
    if (playerName.length > 5) {
        alert("You can't add more  than 5")
    }

}

function selectedPlayerName(button) {
    const playerName = button.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerNameArray.push(playerObj);
    // const numberOfPlayer = playerNameArray.length;

    displayPlayerName(playerNameArray)
}




// calculation part 

document.getElementById('btn-calculate').addEventListener('click', function () {
    const numebrOfSelectedPlayers = document.getElementById('selected-player')
    // grab the value of perPlayer Cost 
    const perPlayerCostString = document.getElementById('price-input-field').value;
    const perPlayerCost = parseFloat(perPlayerCostString)

    //calculation of totalPlayer Cost 
    const totalPlayerCost = perPlayerCost * numebrOfSelectedPlayers.childNodes.length;
    const totalPlayerExpenses = document.getElementById('total-expenses');
    totalPlayerExpenses.innerText = totalPlayerCost;




})


document.getElementById('btn-total-calculate').addEventListener('click', function(){
    //manager cost 
    const managerCostString = document.getElementById('manager-cost').value;
    const managerCost = parseFloat(managerCostString);

    // Coach cost
    const coachCostString = document.getElementById('coach-cost').value;
    const coachCost = parseFloat(coachCostString);

    // Total player cost 
    const totalPlayerCostString = document.getElementById('total-expenses').innerText
    const totalPlayerCost = parseFloat(totalPlayerCostString)

    // Final cost calculation 
    const finalCost =  managerCost + coachCost +    totalPlayerCost ;

    // Final cost upload in dom 
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = finalCost;

    
})


