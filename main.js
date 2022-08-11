canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_height= 100;
greencar_width= 75;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
background_imgTag=new Image();
background_imgTag.onload= uploadBackground_image;
background_imgTag.src= background_image;

greencar_imgTag=new Image();
greencar_imgTag.onload= uploadgreencar_image;
greencar_imgTag.src= greencar_image;
}

function uploadBackground_image() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);


}

function uploadgreencar_image() {
	
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
   if(greencar_y>=0)
   {
	greencar_y=greencar_y-20;
	uploadBackground_image();
	uploadgreencar_image();
	console.log("when up arrow key is pressed,x="+greencar_x+"and y="+greencar_y);
   }
}

function down()
{
   if(greencar_y<=550)
   {
	greencar_y=greencar_y+20;
	uploadBackground_image();
	uploadgreencar_image();
	console.log("when down arrow key is pressed,x="+greencar_x+"and y="+greencar_y);
   }
}

function left()
{
	if(greencar_x>=0)
   {
	greencar_x=greencar_x-20;
	uploadBackground_image();
	uploadgreencar_image();
	console.log("when left arrow key is pressed,x="+greencar_x+"and y="+greencar_y);
   }
}

function right()
{
	if(greencar_x<=750)
   {
	greencar_x=greencar_x+20;
	uploadBackground_image();
	uploadgreencar_image();
	console.log("when right arrow key is pressed,x="+greencar_x+"and y="+greencar_y);
   }
}
