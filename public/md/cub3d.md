## Overview

This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. the program has to implement a ray-casting algorithm in order to make a dynamic view inside a maze, in which you'll have to find your way.

## Requirements :

-   The program must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   The use of the 42 `minilibx` is mandatory.
-   The program has to display an image in a window.
-   The management of the window must remain smooth.
-   Pressing ESC must close the window and quit the program in a clean way.
-   Clicking on the cross on the window’s frame must close the window and quit the program in a clean way.
-   Your program must take a configuration file containing a map, textures, colors, it must parsed and checked if the map is closed, if not display an error.
-   Display different wall textures that vary depending on which side the wall is facing (North, South, East, West).
-   Set the floor and ceiling colors to two different ones.
-   The left and right arrow keys must allow you to look left and right in the maze.
-   The W, A, S, and D keys must allow you to move the point of view through the maze.
-   The player must not traverse walls.
-   As a bonus, add animated doors that open and close, animated sprites, mouse control, and a minimap.
-   Your program must be able to turn somthing like this :

```bash
F 139,99,58
C 171,154,137

NO ./assets/north.xpm
SO ./assets/south.xpm
WE ./assets/west.xpm
EA ./assets/east.xpm

11111111111111
10000000000001
10303030303001
10303030303001
10000000000001
10333333333301
20000000000001
10100001000101
10100001000101
10100001000101
10000000000001
1000000N000001
11111111111111
```

into somthing like this :

![cub3dMap.png](/img/cub3d.png)
