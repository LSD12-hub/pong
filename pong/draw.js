const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

(function setup(){
	
	paddles = new paddles();
	ball = new ball();
	
	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		paddles.draw();
		paddles.update();
		ball.update(paddles.y1coodinate(),paddles.y2coodinate());
		ball.resetball();
		ball.draw();
		ball.score();
		ball.checkWon();
	},20)
	
}());

window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow','');
	console.log(direction);
	paddles.movePaddle1(direction);
	paddles.movePaddle2(direction);
}))