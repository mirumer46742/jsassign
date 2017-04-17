function switchFunc(){
	var clrOne=document.getElementById('clrboxone').style.backgroundColor;
	//document.getElementById("clrboxone").style.backgroundColor='green';
	//alert(clrOne.style.backgroundColor);
	var clrTwo = document.getElementById("clrboxtwo").style.backgroundColor;

	var clrTemp= clrTwo;

//	alert(clrTemp);


	//	alert(clrTwo.style.backgroundColor);
	//alert(clrOne.style.backgroundColor);
	//alert(clrTwo.style.backgroundColor);
	//alert(clrTemp.style.backgroundColor);
	//document.getElementById("clrboxone");
	//alert(document.getElementById("clrboxone").style.backgroundColor);
	//document.getElementById("clrboxtwo").style.backgroundColor=clrOne.style.backgroundColor;
	//clrTwo.style.backgroundColor='blue';

	document.getElementById("clrboxone").style.backgroundColor=clrTemp;
	document.getElementById("clrboxtwo").style.backgroundColor=clrOne;

	//clrTwo.style.backgroundColor="red";
	//document.getElementById("clrboxone").style.backgroundColor=clrTemp.style.backgroundColor;
	//document.getElementById('switcher').style.fontsize="20px";
}


function colorFunc(){
	//alert(document.getElementById("selcol"));
	//alert(document.getElementById("selbox"));


//	var colorSelect = document.getElementById("selcolor").options;
//	alert(colorSelect.selectedIndex);

var clroption = document.getElementById("selcolor").options;
var clrindex = document.getElementById("selcolor").selectedIndex;

var boxoption = document.getElementById("selbox").options;
var boxindex = document.getElementById("selbox").selectedIndex;
//alert(y);
//alert("Color is "+ clroption[clrindex].text);
//alert("ColourIndex is "+ clroption[clrindex].index);
var colour = clroption[clrindex].text;
var box= boxoption[boxindex].text;


if(box=="Box 1")
	document.getElementById("clrboxone").style.backgroundColor=colour;
else
	document.getElementById("clrboxtwo").style.backgroundColor=colour;




//document.getElementById(clrbox)




//alert(y);
//alert("Box is "+ boxoption[boxindex].text );
//alert("Box Index is "+ boxoption[boxindex].index );


}