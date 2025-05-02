## Overview

As the name suggests, the goal is creating a simple shell, it needs to implement the most essential features of a shell

## Requirements :

-   The program must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   Display an error in case something goes wrong.
-   You have to implement your own shell.
-   Display a prompt when waiting for a new command.
-   You must have a working history.
-   Search and launch the right executable (based on the PATH variable or using a relative or an absolute path).
-   Only one global variable is permitted.
-   Handle ’ (single quote) which should prevent the shell from interpreting the metacharacters in the quoted sequence.
-   Handle " (double quote) which should prevent the shell from interpreting the metacharacters in the quoted sequence except for $(dollar sign).
-   Implement redirections: `<` `>` `>>` and `<<` .
-   Implement pipes `|` The output of each command in the pipeline is connected to the input of the next command via a pipe.
-   Handle environment variables ($ followed by a sequence of characters) which should expand to their values.
-   Handle $? which should expand to the exit status of the most recently executed foreground pipeline
-   Handle `ctrl-C`, `ctrl-D` and `ctrl-\` .
-   You must implement the following builtins ()
-   `echo` with option `-n`, `cd` with only a relative or absolute path, `pwd` with no options, `export` with no options, `unset` with no options, `env` with no options or arguments, `exit` with no options.
