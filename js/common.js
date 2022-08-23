// common fucntion 


//get inputfield value      
function getInputFieldValueById(inputId) {
    let inputField = document.getElementById(inputId);
    let inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}



function disableButton (button){
    const selectedPlayer = document.getElementById('selected-player');
        button.setAttribute('disabled', true)
    button.style.backgroundColor = '#A2A9AF'; 
    

    // console.log(button)
}

