


var Particle = function(){
	this.xPosition = 0;
	this.yPosition = random(height);
	this.xSpeed = random(6,10);
	this.ySpeed = random(-5,5);
	this.lifeSpan = 1000;

	this.update = function(){
		this.xPosition += this.xSpeed;
		this.yPosition += this.ySpeed;
		this.lifeSpan --;
	}
	this.display = function(){		
		push();
			noStroke();
			fill(255, 45);
			translate(this.xPosition,this.yPosition);

			var scaleFactor = map(this.lifeSpan, 500,0, 1,0);
			scale(scaleFactor);
			ellipse(0,0,5);
		pop();
	}
	this.checkDead = function(){
		if (this.lifeSpan < 1){
			return true;
		} else {
			return false;
		}
	}
}