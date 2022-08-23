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

    //validation 
    if (playerNameArray.length === 0) {
        alert('You not chose any player. Please select 5 player ')
        perPlayerCostString.value = '';
        return;
    }
    else if (isNaN(perPlayerCost)) {
        alert('Enter a valid Amount');
        perPlayerCostString.value = '';
        return;
    } else if (perPlayerCost < 0) {
        alert('Enter a positive number');
        perPlayerCostString.value = '';
        return;
    }


    //calculation of totalPlayer Cost 
    const totalPlayerCost = perPlayerCost * numebrOfSelectedPlayers.childNodes.length;
    const totalPlayerExpenses = document.getElementById('total-expenses');
    totalPlayerExpenses.innerText = totalPlayerCost;




})


document.getElementById('btn-total-calculate').addEventListener('click', function () {
    //manager cost 
    const managerCostString = document.getElementById('manager-cost').value;
    const managerCost = parseFloat(managerCostString);

    // Coach cost
    const coachCostString = document.getElementById('coach-cost').value;
    const coachCost = parseFloat(coachCostString);

    // Total player cost 
    const totalPlayerCostString = document.getElementById('total-expenses').innerText
    const totalPlayerCost = parseFloat(totalPlayerCostString)


     //validation 
   if (isNaN(managerCost)) {
        alert('Set  the salary of Manager');
        managerCost.value = '';
        return;
    } else if (managerCost < 0) {
        alert('Enter a positive number');
        managerCost.value = '';
        return;
    }else if(isNaN(coachCost)){
        alert('Set the sallary of Coach');
        managerCost.value = '';
        return;
    }else if(coachCost < 0){
        lert('Enter a positive number');
        managerCost.value = '';
    }

    // Final cost calculation 
    const finalCost = managerCost + coachCost + totalPlayerCost;

    // Final cost upload in dom 
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = finalCost;


})


