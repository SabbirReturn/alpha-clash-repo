document.getElementById('playNow').addEventListener('click', function(){
    // let homeSection = document.getElementById('home-section');
    // homeSection.classList.add('hidden');
    hideElementById('home-section');

    // let playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
    showElementById('play-ground')
    continueGame();
})

// function handleKeyBoardEvent(){

// }



document.addEventListener('keyup',function handleKeyBoardEvent(event){
    let pressAlphabet =event.key;
    if(pressAlphabet === 'Escape'){
        gameOver()
    }

    let currentAlphabetElement = document.getElementById('screenAlphabet');
    let currentAlphabet = currentAlphabetElement.innerText;
    let expectAlphabet = currentAlphabet.toLocaleLowerCase();
    
    
    if(expectAlphabet === pressAlphabet){
        // let currentScoreElement = document.getElementById('score');
        // let currentScoreText = currentScoreElement.innerText;
        // let currentScore = parseInt(currentScoreText);
        // let updateScore = currentScore+1;
        // currentScoreElement.innerText = updateScore;
        let currentScore = getInnerText('score');
        let updateScore = currentScore + 1;
        setInnerText('score',updateScore);
        removeBackGroundColor(expectAlphabet);
        continueGame();
    }
    else{
        let currentLife = getInnerText('life');
        let updateLife = currentLife - 1;
        setInnerText('life',updateLife);
        if(currentLife === 0){
            gameOver();
        }
    }
    
})

function gameOver(){
    hideElementById('play-ground');
    showElementById('finalScore');
    let newScore = getElementTextById('score');
    setInnerText('final-score', newScore);
    let currentAlphabet = getElementTextById('screenAlphabet')
    removeBackGroundColor(currentAlphabet);
}

function continueGame(){
    let alphabet = getARandomAlphabet();
    setInnerText('screenAlphabet',alphabet);

    // set keyboard backGround color
    setBackGroundColor(alphabet);
}

document.getElementById('play-again').addEventListener('click', function(){
    hideElementById('finalScore');
    showElementById('play-ground');
    setInnerText('score',0);
    setInnerText('life',5);
    continueGame();
})