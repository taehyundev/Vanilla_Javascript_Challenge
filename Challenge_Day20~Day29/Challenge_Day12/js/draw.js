const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
var ch_x = 10
var ch_y = 0

var player;
var coin;

//player ob
function Player() {
  this.score = 0;
  this.x = 0;
  this.y = 0;
  this.draw = function () {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
  this.update = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 300, 300)
  }
  this.updateScore = function () {
    var scoreDiv = document.querySelector(".scoreshow")
    scoreDiv.innerHTML = `Score : ${this.score}`
  }
}

//coin  ob
function Coin() {
  this.x;
  this.y;
  this.create = function () {
    this.x = (Math.floor(Math.random() * (29 - 0 + 1)) + 0) * scale;
    this.y = (Math.floor(Math.random() * (29 - 0 + 1)) + 0) * scale;
  }
  this.draw = function () {
    ctx.fillStyle = "Yellow";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

}

function setup() {
  player = new Player();
  coin = new Coin();
  player.draw()
  coin.create()
  coin.draw()
  player.updateScore()
}

document.onkeydown = (ev) => {
  player.update()
  k = ev.keyCode
  switch (k) {
    case 37:
      ch_x = -10
      ch_y = 0
      break;
    case 38:
      ch_x = 0
      ch_y = -10
      break;
    case 39:
      ch_x = 10
      ch_y = 0
      break;
    case 40:
      ch_x = 0
      ch_y = 10
      break;
  }
  if ((player.y + ch_y < 300 && player.y + ch_y >= 0) && (player.x + ch_x < 300 && player.x + ch_x >= 0)) {

    player.x = player.x + ch_x
    player.y = player.y + ch_y
    if (coin.x === player.x && coin.y == player.y) {
      player.score++;
      coin.create()
      player.updateScore()
    }
  }
  coin.draw()
  player.draw()
}

setup()