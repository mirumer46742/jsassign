function switchFunc()
{
	var clrOne=document.getElementById('clrboxone').style.backgroundColor;
	document.getElementById("clrboxone").style.backgroundColor=document.getElementById("clrboxtwo").style.backgroundColor;
	document.getElementById("clrboxtwo").style.backgroundColor=clrOne;
}

function colorFunc(){
var x=document.getElementById("selcolor").options.selectedIndex;
var y=document.getElementById("selbox").options.selectedIndex;

switch(x){
case 0:
	colour="maroon";break;
case 1:
	colour="blue";break;
case 2:
	colour="green";break;
case 3:
	colour="yellow";break;
case 4:
	colour="pink";break;
case 5:
	colour="black";break;
case 6:
	colour="cyan";break;
case 7:
	colour="white";break;

}

switch(y){

case 0:
	box="Box 1";break;
case 1:
	box="Box 2";break;
}

if(box=="Box 1")
	document.getElementById("clrboxone").style.backgroundColor=colour;
else
	document.getElementById("clrboxtwo").style.backgroundColor=colour;
}