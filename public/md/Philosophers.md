## Overview

This project aims to teach concurrent programming, focusing on multithreading and multiprocessing. By building a solution to the dining philosophers problem.

## Description

-   This project is implemented in c and is compilable with a Makefile.
-   Memory leaks free, Memory leaks are not to be tolerated.
-   Error free, an error displayed in case something went wrong.
-   The program is data race free as it uses threads.
-   The program solves the dining philosophers problem using threads. Where each philosopher is a thread.
-   The program takes the number of philosophers, time to die, time to eat, time to sleep.
-   There is one fork between each pair of philosophers. Therefore, if there are several philosophers, each philosopher has a fork on their left side and a fork on their right side. If there is only one philosopher, there should be only one fork on the table.
-   To prevent philosophers from duplicating forks, The program protects each fork's state with a mutex.
-   As a bonus, The program also solves the dining philosophers problem using processes and semaphores.

## New Concepts

-   Multithreading.
-   Race Conditions.
-   Mutexes (Mutual Exclusion).
-   Deadlocks.
-   Thread-safe Logging.
-   Process vs Thread Isolation.
-   Interprocess Communication.
-   Semaphores.
-   Shared Resources.
-   Concurrency vs Parallelism.
-   Responsibility Separation.
