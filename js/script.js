

function Gameboard() {
    let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];

    return {gameBoard}
}

const renderGameBoard = ( () => {
    let mBoard = document.querySelector("#game-board");
    let nGame = Gameboard();

    for(let i = 0; i < nGame.gameBoard.length; i++) {
        

        for(let j = 0; j < nGame.gameBoard[i].length; j++) {
            let div = document.createElement("div");
            div.classList = "game__square";
            div.setAttribute("data-position", (i + "" + j));
            div.innerText = nGame.gameBoard[i][j]
            mBoard.appendChild(div);
        }
        
    }

})();


function Player(userName, userSymbol) {
    let name = userName;
    let symbol = userSymbol
    return {name, symbol};
}

function GameController(nGameboard) {
    // console.log(gameboard);
    let player1 = Player("player 1", "x");
    let player2 = Player("player 2", "o");
    let gameboard = nGameboard();
    let currPlayer = player1;
    let gArr = gameboard.gameBoard;
    console.log(gameboard);

    const switchPlayer = () => currPlayer = currPlayer == player1 ?  player2 : player1;
    
    function playerMove(row, col) {
        
        if(gArr[row][col] == "") {
            gArr[row][col] = currPlayer.symbol;
            switchPlayer();
            
        }
        else {
            
           alert("pick an empty spot");
        }
    }

    function checkWin() {
        
        if(gArr[0][0] == "x" && gArr[0][1] == "x" && gArr[0][2] == "x") {
            return true;
        }
        if(gArr[0][0] == "o" && gArr[0][1] == "o" && gArr[0][2] == "o") {
            return true;
        }
        if(gArr[1][0] == "x" && gArr[1][1] == "x" && gArr[1][2] == "x") {
            return true;
        }
        if(gArr[1][0] == "o" && gArr[1][1] == "o" && gArr[1][2] == "o") {
            return true;
        }
        if(gArr[2][0] == "x" && gArr[2][1] == "x" && gArr[2][2] == "x") {
            return true;
        }
        if(gArr[2][0] == "o" && gArr[2][1] == "o" && gArr[2][2] == "o") {
            return true;
        }
        if(gArr[0][0] == "x" && gArr[1][0] == "x" && gArr[2][0] == "x") {
            return true;
        }
        if(gArr[0][0] == "o" && gArr[1][0] == "o" && gArr[2][0] == "o") {
            return true;
        }
        
        if(gArr[0][1] == "x" && gArr[1][1] == "x" && gArr[2][1] == "x") {
            return true;
        }
        if(gArr[0][1] == "o" && gArr[1][1] == "o" && gArr[2][1] == "o") {
            return true;
        }
        if(gArr[0][2] == "x" && gArr[1][2] == "x" && gArr[2][2] == "x") {
            return true;
        }
        if(gArr[0][2] == "o" && gArr[1][2] == "o" && gArr[2][2] == "o") {
            return true;
        }
        if(gArr[0][0] == "x" && gArr[1][1] == "x" && gArr[2][2] == "x") {
            return true;
        }
        if(gArr[0][0] == "o" && gArr[1][1] == "o" && gArr[2][2] == "o") {
            return true;
        }
        if(gArr[0][2] == "x" && gArr[1][1] == "x" && gArr[2][0] == "x") {
            return true;
        }
        if(gArr[0][2] == "o" && gArr[1][1] == "o" && gArr[2][0] == "o") {
            return true;
        }
        

    }

    function playGame() {
        console.log(currPlayer);
        let mBoard = document.querySelector("#game-board");
        let score = document.querySelector(".score");
        mBoard.addEventListener("click", (e) => {
            let pos = e.target.dataset.position.split("");
            e.target.innerText = currPlayer.symbol;
            
            let player = currPlayer.name;
            playerMove(+pos[0], +pos[1]);
            
            console.log(player);
            if(checkWin() == true) {
                score.innerText = (`${player} wins!!!!`);
            }
            
        })
        
    }

    return {playGame};
}

let game = GameController(Gameboard)
game.playGame();


function startGame() {
    let btn = document.querySelector("#strt__btn");
    let mBoard = document.querySelector("#game-board");
    btn.addEventListener("click", () => {
        mBoard.style.display = "flex";
        btn.style.display = "none";
    });
}

startGame();