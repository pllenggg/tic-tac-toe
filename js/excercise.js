//game elements //
let playerX = []; // empty array to store what player x's clicks
let playerO = []; // to store what player o's clicks
let playerClick = 0;

//winning conditions //
const findWinner = function (player) {
    let winner = false;// when the game starts, winner does 
    if ((player.includes(1) && player.includes(2) && player.includes(3)) ) {
        winner = true;
        $('#1').addClass('glow');
        $('#2').addClass('glow');
        $('#3').addClass('glow');
    }

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

//function to restart the game//
const restartGame = function () {
    // window.location.reload();
    playerClick = 0;
    $('.box').text('');
    $('.box').attr('disabled', false);
    playerO = [];
    playerX = [];
    $('.message').text('');
};

// The actual game play //

$(document).ready(function () {
    
    // defined x and o and push to player's array//
       const gameplay = $('.box').on('click', function(){
            const boardGameId = $(this).attr("id");
            
            let currentPlayer = "";
            if( playerClick % 2 === 0) {
                playerO.push(+boardGameId);
                currentPlayer = 'o';
                $('.nextTurn').text(`Player 'x' turn`);

            } else {
                playerX.push(+boardGameId);
                currentPlayer = 'x'; 
                $('.nextTurn').text(`Player 'o' turn`);
            };
            playerClick ++;

            // findWinner(playerO);
            // findWinner(playerX);

            $(this).text(currentPlayer);
            $(this).attr('disabled',true);
           
            //show the winner
               if(findWinner(playerX)) {
                   $('.message').text(`Player x won`);
                   $('.box').attr('disabled', true);
                   return;
               }
             else if (findWinner(playerO)) {
                    $('.message').text(`Player o won`);
                   $('.box').attr('disabled', true); // disable button after clicked //
                   return;
                }
            
            //draw //
                if (playerClick === 9) {
                    $('.message').text('Draw!');
                }
        }); 
        
        // restart game button //
        $('.restartGame').on('click', function () {
            restartGame();
        });
        
    });

    


