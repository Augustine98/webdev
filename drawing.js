var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
c.fillStyle='blue';
c.strokeStyle='red';
var color ="#"+((1<<24)*Math.random()|0).toString(16);
	c.strokestyle=color;

var mouse={
	cx:undefined,
	cy:undefined
}

var colorArray=['#013C8C','#034D8F','#014873','#0BBDAE','#F06005'];

window.addEventListener('mousemove',function (event) {
	mouse.cx=event.x;
	mouse.cy=event.y;
	console.log(mouse);
	// body...
});
window.addEventListener('resize',function()
{
	canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
})
//c.fillRect(number,number,number,number);
//
//{
	var x=10;
	var number =10;
	var y=10;
	var velocity_x=[];
	var velocity_y=[];
	var radius=[];
	var color_p=[];
	var vxmax=10;
	var vymax=10;
	var maxRadius =200;
	var minRadius =10;
	function getDistance(ax,ay,bx,by)
	{
		return Math.sqrt(Math.pow(ax-bx,2)+Math.pow(ay-by,2));
	}

	var px=[];
	var py=[];
	for(var t=0;t<number;t++)
	{
		var tx=Math.floor(Math.random()*window.innerWidth);
		px.push(tx);
		var ty=Math.floor(Math.random()*window.innerHeight);
		var tr=Math.random()*maxRadius;
		radius.push(tr);
		py.push(ty);


		var vx=Math.floor(Math.random()*vxmax);
		velocity_x.push(vx);
		var vy=Math.floor(Math.random()*vymax);
		velocity_y.push(vy);
		var clr=colorArray[Math.floor(Math.random()*colorArray.length)];
		//var clr="#"+Math.floor(Math.random()*16777215).toString(16);
    color_p.push(clr);
		
	}

function dot(ax,ay,bx,by)
{
	return ax*bx+ay*by;
}
function mod(ax,ay)
{
	return Math.sqrt(ax*ax+ay*ay);
}

function animate()


{
 requestAnimationFrame(animate);
	
	c.clearRect(0,0,window.innerWidth,window.innerHeight);

	//for(var i=0;i<10;i++)
	var color="#" +Math.floor(Math.random()*16777215).toString(16);

	/*var x=Math.random()*window.innerWidth;

	var y=Math.random()*window.innerHeight;*/
	
   for(var i=0;i<number;i++)
   {

   	c.beginPath();
   	c.fillStyle=color_p[i];
   	c.strokeStyle=color_p[i];	
	
	
	var distx,disty;
	for(var j=0;j<i;j++)
	{
		distx=px[i]-px[j];
		disty=py[i]-py[j];
		var modp=getDistance(px[i],py[i],px[j],py[j]);
		if(modp<radius[i]+radius[j])
		{
			velocity_x[i]=velocity_x[i]-2*dot(velocity_x[i],velocity_y[i],velocity_x[j],velocity_y[j])/mod(distx,disty)*distx;
			velocity_y[i]=velocity_y[i]-2*dot(velocity_x[i],velocity_y[i],velocity_x[j],velocity_y[j])/mod(distx,disty)*disty;
		}

	}
	px[i]+=velocity_x[i];
	py[i]+=velocity_y[i];
	if(px[i]+10>=window.innerWidth||px[i]<=10)
		velocity_x[i]*=-1;//(-1*Math.floor(Math.random()*10+1));
	if(py[i]+10>=window.innerHeight||py[i]<=10)
		velocity_y[i]*=-1;//*Math.floor(Math.random()*10+1);
	c.arc(px[i],py[i],radius[i],0,Math.PI*2,false);
	//c.fill();

	if(Math.abs(mouse.cx-px[i])<500&&Math.abs(mouse.cy-py[i])<500&&radius[i]<maxRadius)
		c.fill();
		//radius[i]+=80;
	else if(radius[i]>minRadius)
		c.stroke();
		//radius[i]-=1;

	

   }
	
}

animate();
	
//}

