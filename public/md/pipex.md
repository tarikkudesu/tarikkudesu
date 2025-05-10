## Overview

The aim of this project is to understand UNIX interprocess communication by implementing redirections and pipes in a c program.

## Requirements :

-   This project is implemented in c and is compilable with a makefile.
-   Memory leaks free, Memory leaks are not to be tolerated.
-   Error free, an error displayed in case something went wrong.
-   The program takes four arguments : file1 cmd1 cmd2 file2
-   The following command `< file1 cmd1 | cmd2 > file2` is reimplemented in a c program using (access, dup, dup2, execve, exit, fork, pipe, unlink, wait, waitpid) system calls.
-   As a bonus, The program also implements multiple commands, here_doc `<<` and append `>>`.

## New Concepts

-   redirections and pipes
-   Process creation and termination
-   Advanced file descriptor manipulation
-   Parent-Child Process Communication
