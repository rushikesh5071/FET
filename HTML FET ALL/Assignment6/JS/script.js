var canvas = document.getElementById("canvas");  
if (canvas.getContext)   
{  
var ctx = canvas.getContext("2d");         
var gradient = ctx.createLinearGradient(10, 0, 500, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1 / 6, 'orange');
gradient.addColorStop(2 / 6, 'yellow');
gradient.addColorStop(3 / 6, 'green');
gradient.addColorStop(4 / 6, 'blue');
gradient.addColorStop(5 / 6, 'indigo');
gradient.addColorStop(1, 'violet');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 75);
}


function draw() {
    
    var canvas1 = document.getElementById('can');
    ctx = canvas1.getContext('2d');
    var img = new Image();
    img.onload = function() {
        for (var j = 0; j < 3; j++) {
            console.log('ssss')
            ctx.drawImage(img,20,20);
        //   ctx.drawImage(img, j * 50, 38);
        }
    };
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  }