const boxes=document.querySelectorAll('.box');
let player='X'
const board= [
 '', '', '',
 '', '', '', 
 '', '', ''];

const combinations= [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
  ];
    
 let gameDuring= true;


function winCheck()
{
  let winner=document.querySelector('.winner');
  let btn=document.querySelector('.tryAgain')
 for(let i=0;i<=7;i++)
 {
   const[posA, posB, posC]=combinations[i];
   const valueA=board[posA];
   const valueB=board[posB];
   const valueC=board[posC];
   //win
   if(valueA !== '' && valueA === valueB && valueA === valueC)
   {
    gameDuring= false;
    winner.innerText=`The player with ${player} win the game!!`
    btn.style.opacity=1;
   }
   //draw
   if(board.find(box => box ==="") === undefined && valueA !== valueB && valueA!== valueB)
   {
    gameDuring= false;
    winner.innerText=`Draw`
    btn.style.opacity=1;
   }
}
}

boxes.forEach((box) => {
  box.addEventListener('click', el => {
  const {position} = el.target.dataset;

  if(gameDuring == true && board[position] === '')
      {
        board[position] = player;
      winCheck(); 
      el.target.classList.add(`box--draw-${player}`);
      player=player === "X" ? "O" : "X"
       
      }
    
    })
  
  
  })


function restart()
{
  document.location.reload(false);
}
