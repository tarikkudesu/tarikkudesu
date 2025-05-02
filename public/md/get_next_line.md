## Overview

The goal of this project is to create a function that reads content line by line from a file, a network or even STDIN, an essential function for the upcoming projects.

## Requirements :

-   This project must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   Repeated calls to your function should let you read the text file pointed to by the file descriptor, one line at a time.
-   The returned line has to be terminated by a \n.
-   Your function should return the line that was read. If nothing was read, return a NULL.
-   As a bonus, Your function has to be able ti manage multiple file descriptors at the same time.
