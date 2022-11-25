const canvas = document.getElementById('canvas');
canvas.height=window.innerHeight
canvas.width=window.innerWidth

var height=window.innerHeight
var width=window.innerWidth

//a
const ctx = canvas.getContext('2d');
let x=10
let y=10
let x2=width-80
let y2=10

ctx.strokeRect(x,y, 50, 50);
ctx.strokeRect(x2,y2, 50, 50);



 function startGame(){
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     let r=requestAnimationFrame(startGame);
    
    ctx.strokeRect(x,y, 50, 50);
    ctx.strokeRect(x2,y2, 50, 50);
    x++;
    x2--;
    if(x>x2)
    {
      cancelAnimationFrame(r)
      ctx.fillStyle = "black";
      ctx.font = "bold 16px Arial";
      ctx.fillText("Game Over bye", (width / 2) - 17, (height / 2) + 8);
       
    }

    
 }

 startGame()