
function Gameboard() {
    let gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];

    return {gameBoard}
}


function Player(userName, userSymbol) {
    let name = userName;
    let symbol = userSymbol
    return {name, symbol};
}

function GameController(gameboard) {
    
    let player1 = Player("player 1", "X");
    let player2 = Player("player 2", "O");

    let currPlayer = player1;


    const switchPLayer = () => currPlayer = currPlayer == player1 ?  player2 : player1;
    
    function playerMove(row, col) {
        if(gameboard[row][col] == "") {
            
        }
    }
}


function renderGameBoard() {

}