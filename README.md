# Arcade Frogger Game
_The aim of this project is to implement the code to make the player to touch the blue area without touching the bugs ( Enemies ) in his path. If he completed his task successfully, Do an activity to show that._


## I built this project by worked on the following steps.

+ Downloaded the starter code from the link (https://github.com/udacity/frontend-nanodegree-arcade-game) which was provided by udacity.
+ Opened the project in browser by using **web-server from chrome** ( **200 OK** ) to analyze the accebility of the project. We can run by opening index.html in browser also but it doesn't show the necessary rules such as accebility and performance.
+After run this project, I came to know that I need to resolve few error. I resolved all the errors respectevely.
+ Calculated the canvas **width** and **height**, based on that I calculated the dimensions of each block of canvas by using x and y cordinates.
+ Initially I came to know that there are two activities in this game.
  - `Player` and
  - `Enemy`.
+ I thought I need to work on the following **Player** functons.
  - `render()`       : For Placing the player on canvas with calculated dimensions,
  - `update()`       : Updating the Player position based on the systems time and
  - `handleInput()`  : Changing the Player position based on the keys pressed by the user.
+ I created the `Player` class by observing the Enemy class which was existed in given code.
+ Set the position of player (200,400) on canvas by creating an instance to the Player class named `player`.
+ Took an array named `allEnemies` and placed all the three enemy positions.
+ Similarly implemented **Enemy** activity by developing follwoing two functions
  - `render()` and
  - `update()`
+ After that I wrote code to move the enemy with random speed on canvas by using `random()` function.
+ Move player by using `handleInput()` function through getting keys from event listener. The keys mentioned as
  - `left`    : Moving the player towards left side on the X-Axis. This key doesn't work if he reaches the left most position on canvas.    
  - `right`   : Moving the player towords right side on the X-Axis. It doesn't work if the hero reaches the right most position on canvas.
  - `up`      : SImilary up ward direction
  - `bottom`. : Same as above for bottom direction.
+ These positions will work based on the arrows keys on keyboard.
+ Wrote collision code if player touches the enemy i.e.. collision occurs then sets player position to initially mentioned dimensions (200,400). 
+ Similarly the above step will work if the player, if he touches the water ( blue colored area on the top of the canvas).
+ Implemented code for enemy also. If the enemy raches right most position on canvas, He will starts from the starting position (From left side). 
+ Added meta tags for implememting viewport for different resolutions.
+ If the player reaches the blue area, I show it in a congratulatory message by using sweet alert.

## Steps to play this game
+ Open this project by opening the root file( `index.html` ) with web browser. As cited in second point of above section, we can run this project by using any server ( **web server for chrome** or **python server** )
+ The Enemies starts their activity soon after loading the project in any browser.
+ Use arrow keys on the keyboard to change the enemy position. This functionality works based on the key directions on the keyboard.
+ If you reaches the water area, you can get congratulatory message.
