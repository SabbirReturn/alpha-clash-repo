function addClass(elementById){
    let element = document.getElementById(elementById);
    element.classList.add('hidden')
}

function removeClass(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('hidden');
}