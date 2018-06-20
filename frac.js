var canvas=document.querySelector('canvas');
var context=canvas.getContext('2d'),
width=canvas.width=window.innerWidth,
height=canvas.height=window.innerHeight;

context.strokeStyle='green';

var p0={
	x:width/2,
	y:height-50

},
p1={
	x:width/2,
	y:50
},
/*branchAngle=Math.PI/4,
trunkRatio=0.5, branchLength=5;

function tree(p0,p1,limit)
{
	var dx=p1.x-p0.x,
	    dy=p1.y-p0.y,
	    dist=Math.sqrt(dx*dx+dy*dy),
	    branchLength=dist*(1-trunkRatio);
	    angle=Math.atan2(dy/dx),
	    pA={
	    	x:p0.x+trunkRatio*dx,
	    	y:p0.y+trunkRatio*dy
	    },
	    pB={
	    	x:pA.x+Math.cos(angle+branchAngle)*branchLength,
	    	y:pA.y+Math.sin(angle+branchAngle)*branchLength
	    },
	    pC={
	    	x:pA.x+Math.cos(angle-branchAngle)*branchLength,
	    	y:pA.y+Math.sin(angle-branchAngle)*branchLength
	    }
	    c.beginPath();
	    c.moveTo(p0.x,p0.y);
	    c.lineTo(p1.x,p1.y);
	    c.stroke();

	    if(limit>0)
	    {
	    	tree(pA,pC,limit-1);
	    	tree(pA,pB,limit-1);
	    }
	    else
	    {
	    	c.beginPath();
	    	c.moveTo(pA.x,pA.y);
	    	c.lineTo(pB.x,pB.y);
	    	c.stroke();

	    	c.beginPath();
	    	c.moveTo(pA.x,pA.y);
	    	c.lineTo(pC.x,pC.y);
	    	c.stroke();
	    	

	    }

}

tree(p0,p1,3);
*/
 branchAngleA = randomRange(-Math.PI / 2, Math.PI / 2),
		branchAngleB = randomRange(-Math.PI / 2, Math.PI / 2),

trunkRatio = randomRange(0.25, 0.75);

function randomRange(min, max) {
	return min + Math.random() * (max - min);
}



function tree(p0, p1, limit) {
		//requestAnimationFrame(tree(p0,p1,limit-1));
		//context.clearRect(0,0,width,height);
		/*if(branchAngleA<Math.PI/2)
		{
			branchAngleA++;
		}
		else if(branchAngleA>Math.PI/2)
		{
			branchAngleA-=Math.PI;
		}
		if(branchAngleB<Math.PI/2)
		{
			branchAngleB++;
		}
		else if(branchAngleB>Math.PI/2)
		{
			branchAngleB-=Math.PI;
		}*/


       


		var dx = p1.x - p0.x,
		dy = p1.y - p0.y,
		dist = Math.sqrt(dx * dx + dy * dy),
		angle = Math.atan2(dy, dx),
		branchLength = dist * (1 - trunkRatio),
		pA = {
			x: p0.x + dx * trunkRatio,
			y: p0.y + dy * trunkRatio
		},
		pB = {
			x: pA.x + Math.cos(angle + branchAngleA) * branchLength,
			y: pA.y + Math.sin(angle + branchAngleA) * branchLength,
		},
		pC = {
			x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
			y: pA.y + Math.sin(angle + branchAngleB) * branchLength,
		};
		var color="#" +Math.floor(Math.random()*16777215).toString(16);
		context.lineWidth=5;
		context.strokeStyle=color;


		context.beginPath();
		context.moveTo(p0.x, p0.y);
		context.lineTo(pA.x, pA.y);
		context.stroke();

		if(limit > 0) {
			tree(pA, pC, limit - 1);
			tree(pA, pB, limit - 1);
		}
		else {
			context.beginPath();
			context.moveTo(pB.x, pB.y);
			context.lineTo(pA.x, pA.y);
			context.lineTo(pC.x, pC.y);
			context.stroke();
		}
		branchAngleA += randomRange(-0.02, 0.02);
		branchAngleB += randomRange(-0.02, 0.02);
		trunkRatio += randomRange(-0.02, 0.02);
	}

	function animate(){
		//requestAnimationFrame(animate);
		//context.clearRect(0,0,width,height);

	var brA = randomRange(-Math.PI / 2, Math.PI / 2);
	var brB = randomRange(-Math.PI / 2, Math.PI / 2);

		tree(p0, p1, 8,brA,brB);


	}
animate();
