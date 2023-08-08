var canvas = document.getElementById("myCanvas");

var startX, startY;
var currentX, currentY;

var ctx = canvas.getContext("2d");

if(screen.width < 992)
{
    canvas.width = screen.width - 100;
    canvas.height = screen.height -250;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    startX = e.touches[0].clientX - canvas.offsetLeft;
    startY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(startX, startY);
    ctx.lineTo(currentX, currentY);

    ctx.stroke();

    startX = currentX;
    startY = currentY;
}

var color = "red";
var width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    startX = e.clientX- canvas.offsetLeft;
    startY = e.clientY- canvas.offsetTop;

    mouse_event = "mouseDown";
   
    
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    currentX = e.clientX- canvas.offsetLeft;
    currentY = e.clientY- canvas.offsetTop;

    if (mouse_event == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);

        ctx.stroke();
    }
   
    startX = currentX;
    startY = currentY;

}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup()
{
   mouse_event = "mouseup"
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//i drew a touch drawing, link:https://docs.google.com/document/d/1VXyQvYo2B6YW0sfntfq7XlJCGemX6d7VMsMqjc04m0c/edit?usp=sharing