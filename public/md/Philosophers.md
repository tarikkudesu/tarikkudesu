## Overview

This project aims to teach concurrent programming, focusing on multithreading and multiprocessing.

## Requirements :

-   The program must be written in C, a Makefile must be provided.
-   Memory leaks are not to be tolerated.
-   Display an error in case something goes wrong.
-   You have solve the dining philosophers problem using threads.
-   Each philosopher should be a thread.
-   Your program should take the number of philosophers, time to die, time to eat, time to sleep.
-   There is one fork between each pair of philosophers. Therefore, if there are several philosophers, each philosopher has a fork on their left side and a fork on their right side. If there is only one philosopher, there should be only one fork on the table.
-   To prevent philosophers from duplicating forks, you should protect the forks state with a mutex for each of them.
-   Your program should not contain data races.
-   As a bonus, implement the solution to the dining philosophers problem using semaphores.
