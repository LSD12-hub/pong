function ball(){

	this.x = 150;
	this.y = 100;
	this.speedx = -2;
	this.speedy = -2;
	this.size = 10;
	this.player1 = 0;
	this.player2 = 0;
	
	this.update = function(y1, y2){
		this.x += this.speedx;
		this.y += this.speedy;
		
		if(this.y === canvas.height - 10){
			this.speedy *= -1;
		}else if(this.y === 0){
			this.speedy *= -1;
		}
		//console.log(y2); // collision for ball and paddles.
		if(this.x === 10 && this.y >= y1 - 20 && this.y <= y1 + 20){
			this.speedx *= -1;
		}else if(this.x === 280 && this.y >= y2 - 20 && this.y <= y2 + 20){
			this.speedx *= -1;
		}
		
	}
	
	this.score = function(){
		ctx.font = "20px Arial";
		ctx.fillText(this.player1 + " : " + this.player2, 131, 20);
	}
	
	this.resetball = function(){
		if(this.x === 0){
			this.x = 150;
			this.y = 100;
			this.player2++;
		}else if(this.x === canvas.width){
			this.x = 150;
			this.y = 100;
			this.player1++;
		}
	}
	
	this.draw = function(){
		ctx.fillStyle = "#FFFF3e";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	
	this.checkWon = function(){
		if(this.player1 > 9 || this.player2 > 9){
			if(this.player1 > this.player2){
				alert('Player 1 has won');
				this.player1 = 0;
				this.player2 = 0;
			}else{
				alert('Player 2 has won');
				this.player1 = 0;
				this.player2 = 0;
			}
		}
	}
}