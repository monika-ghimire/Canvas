


const canvas = document.getElementById('canvas');
canvas.height=window.innerHeight
canvas.width=window.innerWidth

var width=window.innerWidth
const ctx = canvas.getContext('2d');
var x=window.innerWidth-80;
 var y=window.innerHeight-80;

var speed=5;
ctx.strokeRect(x,y, 50, 50);


function rectBox(){
    
    x=x-5;
    requestAnimationFrame(rectBox);
    ctx.clearRect(0, 0, canvas.width, canvas.height,speed);
    ctx.strokeRect(x,y, 50, 50);
    if(x<0)
    {
        x= Math.random()*window.innerWidth-80;
        y= Math.random()*window.innerHeight-80;
     
    }
    

}
    
rectBox()
   