function init(){
	var h1tags=getElementByTagName("h1");
	h1tags.onClick=colorchange();
}
function colorchange(){
	this.innerHTML="Dayum";

	var newcolor= '#'+Math.floor( Math.random()*16777215).toString(16);
	this.style.color=newcolor;
}

onload=init;