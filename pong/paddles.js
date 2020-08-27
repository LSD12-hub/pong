function paddles(){
	
	this.y1 = 100;
	this.x1 = 0;
	this.x2 = 300;
	this.y2 = 100;
	this.size = 40;
	this.speed = 10;
	
	this.draw = function(){
		
		ctx.fillStyle = "#FF3e3e";
		ctx.fillRect(this.x1, this.y1 - 20, 10, this.size);
		
		ctx.fillStyle = "#3eFF3e";
		ctx.fillRect(this.x2 -10, this.y2 - 20, 10, this.size);
		
		ctx.fillStyle = "#FFFFFF";
		for(let i = 0; i < canvas.height; i += 20){
			ctx.fillRect(150, i, 2.5, 10);
		}
		
	}
	
	this.update = function(){
		if(this.y1 <= 20){
			this.y1 = 20;
		}else if(this.y1 >= canvas.height - 20){
			this.y1 = canvas.height - 20;
		}
		
		if(this.y2 <= 0){
			this.y2 = 0;
		}else if(this.y2 >= canvas.height - 20){
			this.y2 = canvas.height - 40;
		}
		
	}
	
	this.movePaddle1 = function(move, answer){
		switch(move){
			case 'w':
				this.y1 -= this.speed;
				break;
			case 's':
				this.y1 += this.speed;
				break;
		}
	}
	
	this.movePaddle2 = function(move){
		switch(move){
			case 'Up':
				this.y2 -= this.speed;
				break;
			case 'Down':
				this.y2 += this.speed;
				break;
		}
	}
	
	this.y1coodinate = function(){
		return this.y1; 
	}
	this.y2coodinate = function(){
		return this.y2;
	}	
}