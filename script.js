

const gamePlay = (function () {
    let text = 'X'
    const game = []
    const elements = document.getElementsByClassName('data')
    const winner = document.querySelector('.winnerDisplay') 
    
    function winnerDisplay() {
        winner.textContent = `Congratulations ${text} player you've won !!!`
    }    


    function addText(){
        for(let i = 0; i < elements.length; i++){
            elements[i].addEventListener('click', ()=>{
                renderGame()
                if(elements[i].textContent === '' && checkWin() === false){
                    elements[i].textContent = text
                    renderGame()
                    if(checkWin() === true){
                        winnerDisplay()
                    }
                    text = switchValue(text)
                    computerPlay()
                    
                }
                
            })
        }
    }
    


    //! this function used to render the results of the game to the array 

    function renderGame() {
        const gameBoard = document.getElementsByClassName('data');
        for (let i = 0; i < gameBoard.length; i++) {
            game[i] = gameBoard[i].textContent;
        }
    }

    //! this function checks the array for a winner with 8 different possibilities 
    function checkWin() {
        if (game[0] === game[1] && game[2] === game[1] && game[1] !== '') return true;
        if (game[3] === game[4] && game[5] === game[3] && game[3] !== '') return true;
        if (game[6] === game[7] && game[8] === game[6] && game[6] !== '') return true;
        if (game[0] === game[3] && game[6] === game[0] && game[0] !== '') return true;
        if (game[1] === game[4] && game[7] === game[1] && game[1] !== '') return true;
        if (game[2] === game[5] && game[8] === game[2] && game[2] !== '') return true;
        if (game[0] === game[4] && game[8] === game[0] && game[0] !== '') return true;
        if (game[2] === game[4] && game[6] === game[2] && game[2] !== '') return true;
        return false;
    }

    function switchValue(value){
        if(value === 'X') return 'O'
        return 'X'
    }


    function computerPlay(){
        let play =  Math.floor(Math.random()*9)
        renderGame()
        for(;;){
        if(elements[play].textContent === '' && checkWin()!== true){
            elements[play].textContent = text 
            renderGame()
            if(checkWin()){
                winnerDisplay()
            }
            text = switchValue(text)
            return true;
        }
            if(checkWin()){
                return false
            }
        play =  Math.floor(Math.random()*9)
        continue

    }
}
    return {
        addText,
   }
})();
gamePlay.addText()
