let listDrawnNumbers = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;


function displayTextOnScreen(tag, texto) {
    let field = document.querySelector(tag);
    field.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Male', {rate:1.0});
    

}
function displayInitialMessage() {
    displayTextOnScreen('h1', 'Secret number game!');
    displayTextOnScreen('p', 'Choose a number between 1 to 10.');

}

displayInitialMessage();

function checkKick() {
    let kick = document.querySelector('input').value;

    if (kick == secretNumber) {
        displayTextOnScreen('h1', 'Congratulations, you got it right!');
        let wordTry = attempts > 1 ? 'attempts' : 'attempt';
        let attemptedMenssage = `You discovered the secret number with ${attempts} ${wordTry}!`;
        displayTextOnScreen('p', attemptedMenssage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (kick > secretNumber) {
            displayTextOnScreen('p', 'The secret number is smaller.');
        } else {
            displayTextOnScreen('p', 'The secret number is bigger.');
        }
        attempts++;
        clearField();
    }

}
function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let quantityListElement = listDrawnNumbers.length;

    if (quantityListElement == limitNumber) {
        listDrawnNumbers = [];
    }

    if (listDrawnNumbers.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        listDrawnNumbers.push(chosenNumber);
        console.log(listDrawnNumbers);
        return chosenNumber;
    }
}

function clearField() {
    kick = document.querySelector('input');
    kick.value = '';

}

function restartGame() {
    secretNumber = generateRandomNumber();
    clearField();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}