const canvas = document.querySelector(".canvas");
const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const ctx = canvas.getContext("2d");
const scale = 10;
var isStart = false;
var isGameOver = false;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;
var itvset
var highScore;

function Snake() {
  this.x = 2 * scale;
  this.y = 2 * scale;
  this.xMove = 10;
  this.yMove = 0;
  this.total = 0;
  this.tail = [];
  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    for (let i=0; i<this.tail.length; i++) {
     ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    console.log(this.total)
    this.tail[this.total - 1] =
      { x: this.x, y: this.y };

    if ((this.x + this.xMove< 300 && this.x + this.xMove >= 0) && (this.y + this.yMove< 300 && this.y + this.yMove >= 0)){
      this.x += this.xMove;
      this.y += this.yMove;
    }else{
      
      isGameOver =true;
    }
  }

  this.changeDirection = function(direction) {
    if(this.tail.length===0||(this.yMove !== 0 && (direction === 37 || direction === 39))||(this.xMove !== 0 && (direction === 38 || direction === 40))){
      switch(direction) {
        case 38:
          this.xMove = 0;
          this.yMove = -scale * 1;
          break;
        case 40:
          this.xMove = 0;
          this.yMove = scale * 1;
          break;
        case 37:
          this.xMove = -scale * 1;
          this.yMove = 0;
          break;
        case 39:
          this.xMove = scale * 1;
          this.yMove = 0;
          break;
      }
    }
  }

  this.eat = function(Coin) {
    if (this.x === Coin.x && this.y === Coin.y) {
      this.total++;
      return true;
    }

    return false;
  }

  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        clearInterval(itvset)
        isGameOver =true;
      }
    }
    
  }
}


function Coin() {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }

  this.draw = function() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}

function setup() {
  snake = new Snake();
  coin = new Coin();
  coin.pickLocation();

  itvset = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coin.draw();
    snake.update();
    snake.draw();

    if (snake.eat(coin)) {
      coin.pickLocation();
    }

    snake.checkCollision();
    if(isGameOver){
      if(snake.total > highScore)
        highScore = snake.total
      localStorage.setItem("highscore",highScore)
      alert(`Game Over Your score is ${snake.total} point\nThe highest score is ${highScore} point`)
      clearInterval(itvset)
      document.querySelector('.score').innerHTML = "Press Enter to continue"
      snake.total = 0;
      snake.tail = [];
    }else
      document.querySelector('.score').innerHTML = `Score : ${snake.total} point`
  }, 50);
}

function keyDownHandler(evt){
  const direction = evt.keyCode;
  if(37 <=direction && direction <=40){
    snake.changeDirection(direction);
  }else if(direction === 13){
    if(!isStart){
      startBtnEvent()
      isStart = true;
    }else{
      stopBtnEvent()
      isStart = false;
    }
  }
}

function startBtnEvent(){
  clearInterval(itvset)
  
  isGameOver = false;
  if(localStorage.getItem("highscore")== null)
    highScore = 0
  else
    highScore = localStorage.getItem("highscore")
  setup()
}
function stopBtnEvent(){
  clearInterval(itvset)
  isGameOver = true;
  
}

startBtn.addEventListener("click",startBtnEvent)
stopBtn.addEventListener("click",stopBtnEvent)
document.onkeydown = keyDownHandler