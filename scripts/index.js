document.getElementById('playNow').addEventListener('click', function(){
    // let homeSection = document.getElementById('home-section');
    // homeSection.classList.add('hidden');
    addClass('home-section');

    // let playGround = document.getElementById('play-ground');
    // playGround.classList.remove('hidden');
    removeClass('play-ground')
    continueGame();
})

function continueGame(){
    let alphabet = getARandomAlphabet();
    console.log(alphabet);
}