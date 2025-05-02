## Overview

An introduction to graphics, This project is about representing a landscape as a 3D object in which all surfaces are outlined in lines using a graphics library.

## Requirements :

-   The program must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   The use of the 42 `minilibx` is mandatory.
-   The program has to display an image in a window.
-   The management of the window must remain smooth.
-   Pressing ESC must close the window and quit the program in a clean way.
-   Clicking on the cross on the window’s frame must close the window and quit the program in a clean way.
-   The program has to represent the model in **isometric projection.**
-   The coordinates of the landscape are stored in a `.fdf` file passed as a parameter to the program.
-   Include one extra projection (Orthigraphic).
-   You should be able to Zoom in and out, Translate your model, Rotate your model.
-   The program should be able to transform a map like this :

```perl
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 10 10 0 0 10 10 0 0 0 10 10 10 10 10 0 0 0
0 0 10 10 0 0 10 10 0 0 0 0 0 0 0 10 10 0 0
0 0 10 10 0 0 10 10 0 0 0 0 0 0 0 10 10 0 0
0 0 10 10 10 10 10 10 0 0 0 0 10 10 10 10 0 0 0
0 0 0 10 10 10 10 10 0 0 0 10 10 0 0 0 0 0 0
0 0 0 0 0 0 10 10 0 0 0 10 10 0 0 0 0 0 0
0 0 0 0 0 0 10 10 0 0 0 10 10 10 10 10 10 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

Into something like this.

![fdf.png](img/fdf.png)
