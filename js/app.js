// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  // which will ensure the game runs at the same speed for
  // all computers.
  // You should multiply any movement by the dt parameter
  this.x = this.x + this.speed * dt;
  if (this.x > 505) {
    this.x = -60;
    this.speed = 100 + Math.floor(Math.random() * 360);
  }
  //collision occurs when player colloid with enemy.
  if (player.x < this.x + 65 &&
    player.x + 65 > this.x &&
    player.y < this.y + 75 &&
    65 + player.y > this.y) {

    player.x = 200;
    player.y = 400;

    // alert("game is completed");
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
};

var player = new Player(200, 400, 10);
var enemyPosition = [60, 145, 230];
enemyPosition.forEach(function(posY) {
  var enemy = new Enemy(0, posY, 100 + Math.floor(Math.random() * 360));
  allEnemies.push(enemy);
});


Player.prototype.update = function(dt) {
  // Prevent player from moving beyond canvas wall boundaries
  if (this.y > 420) {
       this.y = 405;

   }

   if (this.x > 400) {
       this.x = 400;
   }

   if (this.x < 0) {
       this.x = 0;
   }

  // Check for player reaching top of canvas and winning the game


}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// handleInput logic for keypress
Player.prototype.handleInput = function(keyPress) {
  switch (keyPress) {
    case 'left':
      this.x -= 101;
      break;
    case 'up':
      this.y -= 83;
      break;
    case 'right':
      this.x += 101;
      break;
    case 'down':
      this.y += 83;
      break;
  }
  // Horizontal
  if (this.x < 0) {
    this.x = 0;
  }

  if (this.x > 400) {
    this.x = 400;
  }

  // Vertical
  if (this.y < 60) {
    setTimeout(() => {
      swal("Game is completed");
      this.x = 200;
      this.y = 400;
    }, 100);
  }

  if (this.y > 400) {
    this.y = 400;
  }

};

// This listens for keypress and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
