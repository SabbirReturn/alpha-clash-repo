function addClass(elementById){
    let element = document.getElementById(elementById);
    element.classList.add('hidden')
}

function removeClass(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    
    let randomNumber = Math.random()*25;
    let index = Math.round(randomNumber);
    
    let alphabet = alphabets[index];
    return alphabet;
}