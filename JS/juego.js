let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");

let radius_js = 8;
let xRandom;
let yRandom;
let actualWidth = screen.width;
let actualHeight = screen.height;

function drawCircle(x, y, radius, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radius,0,2*Math.PI);
    pincel.fill();
}

function getRandomNumber(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return (Math.floor(Math.random() * (max - min + 1) + min));
}

function targetDesing(x, y){
    drawCircle(x, y, radius_js + 2*radius_js, "red");
    drawCircle(x, y, radius_js + radius_js, "white");
    drawCircle(x, y, radius_js, "red");
}

function clearScreen(){
    pincel.clearRect(0,0,actualWidth,actualHeight);
}

let x = 0;

function updateScreen(){
    clearScreen();
    xRandom = getRandomNumber(3*radius_js,actualWidth-3*radius_js);
    yRandom = getRandomNumber(3*radius_js,actualHeight-3*radius_js);
    targetDesing(xRandom, yRandom);
    x++;
}

setInterval( updateScreen, 1000 );

function shoot( event ){
    let xShoot = event.pageX - screen.offsetLeft - 3;
    let yShoot = event.pageY - screen.offsetTop - 3;

    if( xShoot > xRandom - radius_js && xShoot < xRandom + radius_js &&
        yShoot > yRandom - radius_js && yShoot < yRandom + radius_js ){
            Swal.fire({
                title : "Acertaste",
                text : "Felicidades, distes en el blanco",
                icon:"success"
            });
        }
}

screen.onclick = shoot;