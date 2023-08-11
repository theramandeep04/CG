## Drawing 3D objects

This assignment is to help understand 3D rendering of polygons in 3D space with the help of OpenGL

The 3D objects are rendered on the basis of the no. of sides of the polygon as a command line argument.

## How to Run

```bash
$ mkdir build
$ cd build
$ cmake ..; make
$ ./app <n>
```
### Part A

> As this argument increases, the prism will tend to become cylindrical in nature.
> Coding up the prism generation pipeline in a way that translate these to get the other polygon's vertices and use these to build all the necessary faces.
> Each face of the polygon is assigned a different color

### Part B : Bringing the scene to life with motion

## Key Bindings

The keys to move the camera are:
 - <kbd>A</kbd>: Left
 - <kbd>D</kbd>: Right
 - <kbd>W</kbd>: Forward
 - <kbd>S</kbd>: Backward
 - <kbd>Q</kbd>: Up
 - <kbd>E</kbd>: Down

The keys to move the object are:
 - <kbd>←</kbd>: Left
 - <kbd>→</kbd>: Right
 - <kbd>↑</kbd>: Up
 - <kbd>↓</kbd>: Down
 - <kbd>Pg Down</kbd>: Towards Camera
 - <kbd>Pg Up</kbd>: Away from the camera

The keys for rotation are:
 - <kbd>R</kbd>: Prsim starts rotating about axis

Some cool effects: (Bonus)
 - <kbd>T</kbd>: Polygon transforms between fill and line (Cool..huh)
 - Also capturing the mouse input and scroll amount to move and zoom-in and out respectively.