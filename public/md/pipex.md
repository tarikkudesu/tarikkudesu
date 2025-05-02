## Overview

The aim of this project is to understand UNIX interprocess communication by implementing redirection and pipes in a c program.

## Requirements :

-   The program must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   Display an error in case something goes wrong.
-   Your program will take four arguments : file1 cmd1 cmd2 file2
-   You have to implement the follwing command `< file1 cmd1 | cmd2 > file2` using (access, dup, dup2, execve, exit, fork, pipe, unlink, wait, waitpid) system calls.
-   As a bonus Implement multiple commands, here_doc `<<` and append `>>` .
