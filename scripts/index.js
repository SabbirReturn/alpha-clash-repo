document.getElementById('playNow').addEventListener('click', function(){
    // let homeSection = document.getElementById('home-section');
    // homeSection.classList.add('hidden');
    addClass('home-section');

    // let playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
    removeClass('play-ground')
    continueGame();
})

// function handleKeyBoardEvent(){

// }



document.addEventListener('keyup',function handleKeyBoardEvent(event){
    let pressAlphabet =event.key;
    console.log('player press', pressAlphabet);

    let currentAlphabetElement = document.getElementById('screenAlphabet');
    let currentAlphabet = currentAlphabetElement.innerText;
    let expectAlphabet = currentAlphabet.toLocaleLowerCase();
    
    
    if(expectAlphabet === pressAlphabet){
        
        removeBackGroundColor(expectAlphabet);
        continueGame();
    }
    else{
        console.log('you loss');
    }
    
})


function continueGame(){
    let alphabet = getARandomAlphabet();
    setInnerText('screenAlphabet',alphabet);

    // set keyboard backGround color
    setBackGroundColor(alphabet);
}