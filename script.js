const displayController = (() => {
    const container = document.querySelector(".container");
    const start = document.querySelector("#start");
    const clear = document.querySelector("#clear");
    let count = 0;
    container.addEventListener("click", displayXsAndOs);
    start.addEventListener("click", clearDisplay);
    clear.addEventListener("click", clearEverything);

    function displayXsAndOs(e){
        if(e.srcElement.textContent === "")
        {
            if (count%2===0)
            {
                e.srcElement.textContent = "X";
            }
            else if (count%2!==0){
                e.srcElement.textContent = "O";
            }
            count++;
        }
      
    };

    function clearDisplay(){
        const ticTacToeCells = document.querySelectorAll(".grid");
        const winDisplay = document.querySelector(".win");
        winDisplay.textContent = "";
        for (let i = 0; i < ticTacToeCells.length; i++) {
            ticTacToeCells[i].textContent="";
        }
        count = 0;
    };

    function clearEverything(){
        clearDisplay();
        const players = document.querySelectorAll(".the-players");
        for (let i = 0; i < players.length; i++) {
            players[i].value="";
        }
    };
    
})();


const gameBoard = (() => {
    const gameBoardArray = [];
    const container = document.querySelector(".container");
    const start = document.querySelector("#start");
    let player1 = null;
    let player2 = null;

    const Player = (name) => {
        const winDisplay = document.querySelector(".win");
        const win = () => {
            winDisplay.textContent = name+ " wins!";
        };
        const draw = () => {
            winDisplay.textContent = "It's a draw!";
        };
        return {name, win, draw};
    };
    

    start.addEventListener("click", startGame);
    container.addEventListener("click", changeGameBoardArray);

    function startGame(){
        const nameOfPlayer1 = document.querySelector("#player1").value;
        const nameOfPlayer2 = document.querySelector("#player2").value;
        player1 = Player(nameOfPlayer1);
        player2 = Player(nameOfPlayer2);
    };
    

    function changeGameBoardArray(gameBoardArray){
        const ticTacToeCells = document.querySelectorAll(".grid");
        for (let i = 0; i < ticTacToeCells.length; i++) {
            gameBoardArray[i] = ticTacToeCells[i].textContent;
        }
        winConditions(gameBoardArray);
        return gameBoardArray
    };

    function winConditions(gameBoardArray){
        if ((gameBoardArray[0]===gameBoardArray[1] && gameBoardArray[1]===gameBoardArray[2]) && gameBoardArray[0]!==""){
            chooseWinner(gameBoardArray[0]);
        }
        else if ((gameBoardArray[3]===gameBoardArray[4] && gameBoardArray[4]===gameBoardArray[5]) && gameBoardArray[3]!==""){
            chooseWinner(gameBoardArray[3]);
        }
        else if ((gameBoardArray[6]===gameBoardArray[7] && gameBoardArray[7]===gameBoardArray[8]) && gameBoardArray[6]!==""){
            chooseWinner(gameBoardArray[6]);
        }
        else if ((gameBoardArray[0]===gameBoardArray[3] && gameBoardArray[3]===gameBoardArray[6]) && gameBoardArray[0]!==""){
            chooseWinner(gameBoardArray[0]);
        }
        else if ((gameBoardArray[1]===gameBoardArray[4] && gameBoardArray[4]===gameBoardArray[7]) && gameBoardArray[1]!==""){
            chooseWinner(gameBoardArray[1]);
        }
        else if ((gameBoardArray[2]===gameBoardArray[5] && gameBoardArray[5]===gameBoardArray[8]) && gameBoardArray[2]!==""){
            chooseWinner(gameBoardArray[2]);
        }
        else if ((gameBoardArray[0]===gameBoardArray[4] && gameBoardArray[4]===gameBoardArray[8]) && gameBoardArray[0]!==""){
            chooseWinner(gameBoardArray[0]);
        }
        else if ((gameBoardArray[2]===gameBoardArray[4] && gameBoardArray[4]===gameBoardArray[6]) && gameBoardArray[2]!==""){
            chooseWinner(gameBoardArray[2]);
        }
        else{
            let count = 0;
            for (let i = 0; i < 9; i++) {
                if(gameBoardArray[i] !== "")
                {
                    count++;
                }
            }
            if(count === 9)
            {
                player1.draw();
            }
        }
    };

    function chooseWinner(value){
        if(value==="X"){
            player1.win();
        }
        else{
            player2.win();
        }
    }


})();

  