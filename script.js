// Create Board (IIFE / Singleton Module)
const Gameboard = (()=>{
    let board = Array(9).fill(null);

    return{
        getBoard(){
            return [...board];
        },

        addMark(index,marker){
            if(board[index] !== null) return false;
            board[index] = marker;
            return true;
        },
        
        reset(){
            board = Array(9).fill(null);
        },

        isFull(){
            return board.every(cell => cell!== null);
        },
    };
})();

// Create Player (Factor Function)

const createPlayer = (name,marker) =>{
    let moves = [];

    return{
        getName(){
            return name;
        },
        
        getMarker(){
            return marker;
        },

        addMove(index){
            moves.push(index);
        },

        getMoves(){
            return [...moves];
        },

        reset(){
            moves = [];
        },

        hasWon(){
            const winPatterns = [
                [0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]
            ];

            return winPatterns.some(pattern=>
                pattern.every(index => this.getMoves().includes(index))
            );
        }
    };
};

// Game Controller (IIFE / Singleton Module)
const Game = (()=>{

    let player1 = null;
    let player2 = null;
    let currentPlayer = null;
    let gameOver = false;

    return{
        initGame(name1,name2){
            player1 = createPlayer(name1,"X");
            player2 = createPlayer(name2,"O");
            currentPlayer = player1;
            gameOver = false;
        },

        playRound(index){
            if(gameOver) return {success: false, message: "Game is Over"};
            if(!Gameboard.addMark(index,currentPlayer.getMarker())) return {success:false, message:"Cell is already Taken"};

            currentPlayer.addMove(index);

            if(currentPlayer.hasWon()){
                gameOver = true;
                return {success:true,gameOver: true ,winner: currentPlayer.getName()};
            }

            if(Gameboard.isFull()){
                gameOver = true;
                return {success : true, gameOver: true,winner: null};
            }

            //Switch Player
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            return {success : true,gameOver:false};
        },

        getCurrentPlayer(){
            return currentPlayer;
        },

        resetGame(){
            Gameboard.reset();
            player1.reset();
            player2.reset();
            currentPlayer = player1;
            gameOver = false;
        },
    };
})();

// Display (Singleton Module / IIFE)
const DisplayController = (()=>{
  const container = document.querySelector(".container");
  const restartBtn = document.querySelector(".restart");
  const statusDisplay = document.querySelector(".status");
  const player1NameInput = document.querySelector(".player1-name");
  const player2NameInput = document.querySelector(".player2-name");
  const startBtn = document.querySelector(".start");

  const createBoard = () => {
    container.textContent = '';
    const board = Gameboard.getBoard();

    board.forEach((cell,index) =>{
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cube");
        cellDiv.textContent = cell || "";
        cellDiv.addEventListener("click",()=> handleCellClick(index));
        container.appendChild(cellDiv);
    });
    };
    createBoard();

    const handleCellClick = (index) => {
        const currentMarker = Game.getCurrentPlayer().getMarker();
        const result = Game.playRound(index);

        if(result.success){
            const clickedCell = container.children[index];
            clickedCell.textContent = currentMarker;

            if(result.gameOver){
                if(result.winner){
                    statusDisplay.textContent = `${result.winner} wins!`;
                }else{
                    statusDisplay.textContent = "It's a tie!";
                }
            }else{
                    statusDisplay.textContent = `Current Player: ${Game.getCurrentPlayer().getName()} (${Game.getCurrentPlayer().getMarker()})`;
                }
        }
    };

  startBtn.addEventListener("click",()=>{
    
    const name1 = player1NameInput.value || "Player 1";
    const name2 = player2NameInput.value || "Player 2";

    Gameboard.reset();
    Game.initGame(name1,name2);
    statusDisplay.textContent = `Current Player : ${Game.getCurrentPlayer().getName()} (${Game.getCurrentPlayer().getMarker()})`;
    createBoard();
    });

  restartBtn.addEventListener("click",()=>{
    Game.resetGame();
    statusDisplay.textContent = `Current Player : ${Game.getCurrentPlayer().getName()} (${Game.getCurrentPlayer().getMarker()})`;
    createBoard();
  });

})();