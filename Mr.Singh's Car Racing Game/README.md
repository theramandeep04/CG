## Assignment 2

### Computer Graphics

### Ramandeep Singh -  (2021101050)

> Copyright @ Ramandeep Singh

> Lightning MCqueen

This assignment required us to create a 3d car racing game.

Used WebGL and three.js to do this assignment.

### **3d World**

1.  The world should have a stadium.
2. The racing track should be in a closed loop in a
plane with a reasonable perimeter. You can have
any amount of twists and turns.
3. You should show the audience in the stadium. They can be static without any
motion too.
Hint: you can use textures.

###  **2. Cars (30 marks)**
● There are two kinds of cars in this game, one is your own car (the Mcqueen) and
the opponent cars (at least 3)
● Features to keep track of for each car (20)
1. Moving car left and right (using left and right arrow keys or A and D keys)
2. Increasing speed of car (up arrow key or W key)
3. Applying Brakes. (down arrow key or S
key)
4. Keeping track of car’s
- Health
- Fuel
- Score
- time
5. Keep Mileage/liter value.
6. Friction between car wheels and ground.
(optional).

● You should have a logic for Opponent cars motion in the race. It should not be
the same for all try to make it random. (10)

### **3. Collisions (15 marks)**

Collision between cars which reduces the health of both.

### **4. Fuel cans (10 marks)**
1. Fuel cans should be randomly spawned on the road and
when our car hits them, the car's fuel should be increased.
2. When fuel is over you can say “player out of fuel” and
display “game over” message.

### **5. Different camera views (10 marks)**
your game must have the capability of changing the camera view for the
gamer. you should have two windows.
player window : The player should be able to see view 3 in this window
Map window: This is a small window(in one of the corners) on the main
window showing the top view (view 1).
1. top bird’s eye view for the game.
2. player’s view or car’s point of view.(optional)
3. Third person’s view.
Optionally you can implement Toggling between views 2 and 3. (optional)

### **6. Display (20 marks)**
1. At the start of the game: show the start button and also keys to control
the car. (5)
2. At the end of the game show “game over window” and then display
the ranking of the player’s in a dashboard. (5)
3. Dashboard: Display Health, Fuel, Score, time on the screen and they
should be updated dynamically. you should also show the next fuel
can distance. (10)

As the file size is too big to be uploaded on Courses (Moodle) portal

Below is onedrive link attached to access the game

`npx parcel ./src/index.html`

Use the command above to start the game.

The game would be hosted on the local server.

<hr>

### Steps to run the game

Install following

```
npm install three
npm install webpack
sudo npm -g install servez
```

run following when you change something in any file

```
npx webpack --config webpack.config.js

```
To start the server

```
servez .
```

## One Drive Link

https://iiitaphyd-my.sharepoint.com/:f:/g/personal/ramandeep_singh_students_iiit_ac_in/EtGb1d0kdQBFv94McZBw93gBtph6l8MFLlZvmr39NndzVg?e=MulRlZ




