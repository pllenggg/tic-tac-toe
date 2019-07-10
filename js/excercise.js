
///////////////////////////////////// winning //////////////////////////////////////
//const winningRule = [ [1, 2, 3], [4, 5, 6], [7, 8 ,9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ];

                    
// function to make player x and player o take turns

let playerX = []; // empty array to store what player x's clicks
let playerO = []; // to store what player o's clicks
let playerClick = 0;

$(document).ready(function () {
    // type the code below here //
    
    // defined x and o and push to player's array//
        $('.box').on('click', function(){
            const boardGameId = $(this).attr("id");
            
            let currentPlayer = "";
            if( playerClick % 2 === 0) {
                playerO.push(+boardGameId);
                currentPlayer = 'o';
                // $(this).text('o');
            } else {
                playerX.push(+boardGameId)
                // $(this).text('x'); 
                currentPlayer = 'x'; 
            };
    
            findWinner(playerO);
            findWinner(playerX);
            playerClick ++;
            $(this).text(currentPlayer);
            $(this).attr('disabled',true);
           
            //show the winner
               if(findWinner(playerX)) {
                   $('.win-item').text(`Player x won`);
                   console.log(`playerX win`)
                   $('.box').attr('disabled', true);
                   return;
               }
             else if (findWinner(playerO)) {
                $('.win-item').text(`Player o won`);
                   $('.box').attr('disabled', true);
                   return;
                }
            
            //draw function 
                if (playerClick === 9) {
                    $('.win-item').text('Draw!');
                    console.log(`draw`);
                }
        }); 
        
        $('.restartGame').on('click', function () {
            restartGame();
        });
        
    });




    
// match the array x and o with the winning rule and determined which player is the winner //
const findWinner = function (player) {
    let winner = false;// when the game starts, winner does 

    if ( (player.includes(1) && player.includes(2) && player.includes(3)) ||
         (player.includes(4) && player.includes(5) && player.includes(6)) ||
         (player.includes(7) && player.includes(8) && player.includes(9)) ||
         (player.includes(1) && player.includes(4) && player.includes(7)) ||
         (player.includes(2) && player.includes(5) && player.includes(8)) ||
         (player.includes(3) && player.includes(6) && player.includes(9)) ||
         (player.includes(1) && player.includes(5) && player.includes(9)) ||
         (player.includes(3) && player.includes(5) && player.includes(7)) ) {

            winner = true; 
         }
         return winner;

};


//restart the game//
const restartGame = function () {
    window.location.reload();
    // playerClick = 0;
    // $('.box').text('');
    // $('.box').attr('disabled', false);
    // playerO = [];
    // playerX = [];
    // $('.win-item').text('');
};



