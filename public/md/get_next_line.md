## Overview

The goal of this project is to create a function that reads content line by line from a file, a network or even STDIN, an essential function for the upcoming projects.

## Description

-   This project is implemented in c and is compilable with a Makefile.
-   Memory leaks free, Memory leaks are not to be tolerated.
-   Repeated calls to the `get_next_line` reads the text file pointed to by the file descriptor, one line at a time.
-   The returned line has to be terminated by a \n.
-   The function returns a NULL if nothing was read.
-   As a bonus, The function is able to handle multiple file descriptors at the same time with no overlap.

## New Concepts

-   Standard Streams
-   Low-Level I/O and System Interaction (read, write, open, close)
-   Advanced Memory Management (malloc, free)
-   Buffering, flushing, and stream management
