
// The actual game play //

$(document).ready(function () {
    //to start with.. //
let playerX = []; // empty array to store what player x's clicks
let playerO = []; // to store what player o's clicks
let playerClick = 0; 

//collect score each round//
let scoreX = "";
let scoreO = "";
let draw = "";

//winning conditions //

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
         // highlight the winning lines //
         if ((player.includes(1) && player.includes(2) && player.includes(3)) ) {
            winner = true;
            $('#1').addClass('gradient-border');
            $('#2').addClass('gradient-border');
            $('#3').addClass('gradient-border');
        } else if ((player.includes(4) && player.includes(5) && player.includes(6)) ) {
            $('#4').addClass('gradient-border');
            $('#5').addClass('gradient-border');
            $('#6').addClass('gradient-border');
        } else if ((player.includes(7) && player.includes(8) && player.includes(9)) ) {
            $('#7').addClass('gradient-border');
            $('#8').addClass('gradient-border');
            $('#9').addClass('gradient-border');
        } else if ((player.includes(1) && player.includes(4) && player.includes(7)) ) {
            $('#1').addClass('gradient-border');
            $('#4').addClass('gradient-border');
            $('#7').addClass('gradient-border');
        } else if ((player.includes(2) && player.includes(5) && player.includes(8)) ) {
            $('#2').addClass('gradient-border');
            $('#5').addClass('gradient-border');
            $('#8').addClass('gradient-border');
        } else if ((player.includes(3) && player.includes(6) && player.includes(9)) ) {
            $('#3').addClass('gradient-border');
            $('#6').addClass('gradient-border');
            $('#9').addClass('gradient-border');
        } else if ((player.includes(1) && player.includes(5) && player.includes(9)) ) {
            $('#1').addClass('gradient-border');
            $('#5').addClass('gradient-border');
            $('#9').addClass('gradient-border');
        } else if ((player.includes(3) && player.includes(5) && player.includes(7)) ) {
            $('#3').addClass('gradient-border');
            $('#5').addClass('gradient-border');
            $('#7').addClass('gradient-border');
        };
    
         return winner;
};

//show the winner

    
    // defined x and o and push to player's array//
       $('.box').on('click', function(){
        const boardGameId = $(this).attr("id");
            playerClick ++;
            let currentPlayer = "";
            if( playerClick % 2 === 0) {
                playerO.push(+boardGameId);
                currentPlayer = 'o';
                $(this).text(currentPlayer).addClass('playero');
                $('.message').text(`Player X turn`);
        
                } else {
                playerX.push(+boardGameId);
                currentPlayer = 'x'; 
                $(this).text(currentPlayer).addClass('playerx');
                $('.message').text(`Player O turn`);
                }
            $(this).text(currentPlayer);
            $(this).attr('disabled',true);
            
            if(findWinner(playerX)) {
                scoreX ++
                $('#x').text(`: ${scoreX}`).css('color', 'rgb(60, 190, 0)');
                $('.message').text(`Player x won`);
                $('.box').attr('disabled', true);
                return;
                }
                else if (findWinner(playerO)) {
                scoreO ++
                $('#o').text(`: ${scoreO}`).css('color', 'rgb(212, 55, 55)');
                 $('.message').text(`Player o won`);
                $('.box').attr('disabled', true); // disable button after clicked //
                return;
                }
         
                //draw //
                if (playerClick === 9) {
                    draw ++
                 $('.message').text('Draw!');
                 $('#dre').text(`: ${draw}`).css('color', '#a166ab');
                 $('#1').addClass('draw');
                 $('#2').addClass('draw');
                 $('#3').addClass('draw');
                 $('#4').addClass('draw');
                 $('#5').addClass('draw');
                 $('#6').addClass('draw');
                 $('#7').addClass('draw');
                 $('#8').addClass('draw');
                 $('#9').addClass('draw');
           
                }; 

        // restart game button //
        $('.restartGame').on('click', function () {
            restartGame();
        });
        
    });

    //function to restart the game//
    const restartGame = function () {
    playerClick = 0;
    $('.box').text('').removeClass('gradient-border');
    $('.box').attr('disabled', false);
    playerO = [];
    playerX = [];
    $('.message').text('');
    $('.box').removeClass('playerx');
    $('.box').removeClass('playero');
    };


});
