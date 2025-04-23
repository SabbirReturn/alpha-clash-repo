function hideElementById(elementById){
    let element = document.getElementById(elementById);
    element.classList.add('hidden')
}

function showElementById(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('hidden');
}

function setInnerText(elementById,value){
    let element = document.getElementById(elementById);
    element.innerText = value;
}
function setBackGroundColor(elementById){
    let element = document.getElementById(elementById);
    element.classList.add('bg-amber-400')
}
function removeBackGroundColor(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('bg-amber-400')
}
function getInnerText(elementById){
    let elementId = document.getElementById(elementById);
    let element = elementId.innerText;
    let value = parseInt(element);
    return value;

}
function getElementTextById(elementById){
    let element = document.getElementById(elementById);
    let text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    
    let randomNumber = Math.random()*25;
    let index = Math.round(randomNumber);
    
    let alphabet = alphabets[index];
    return alphabet;
}