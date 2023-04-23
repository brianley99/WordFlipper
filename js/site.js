//Controller
function getValues() {
    //Get inputs from the user and decides what to do with it
    let userInput = document.getElementById('inputMessage').value;

    let reversedInput = reverseString(userInput);

    displayString(reversedInput);
}

//Business Logic
function reverseString(message) {
    //Take a string, returns string in reverse
    let reverseMessage = '';

    for (let index = message.length -1; index >= 0; index--){
        reverseMessage += message[index];
    }

    //Turns string to lowercase
    reverseMessage = reverseMessage.toLowerCase();

    return reverseMessage;

}

//View
function displayString(reverseMessage) {
    //Displays string on the page
    document.getElementById('msg').textContent = reverseMessage;
    document.getElementById('results').classList.remove('d-none');
}
