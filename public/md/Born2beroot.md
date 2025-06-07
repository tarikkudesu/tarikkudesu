## Overview

This project is an introduction to the wonderful world of virtualization and system administration, The goal is to create a virtual machine under specific instructions.

## Description

-   You will create your first machine in VirtualBox. Aka You will set up a server.
-   Your server must have no graphical interface.
-   Choose an operating system, either Debian or Rocky. Debian is highly recommended.
-   You have to create at least 2 encrypted partitions using LVM.
-   You to set up ssh to be running on port 4242, it must not be possible to connect using SSH as root.
-   Configure your system using UFW to leave only port 4242 open.
-   You have to implement a strong password policy :
-   Your password has to expire every 30 days.
-   The minimum number of days allowed before the modification of a password will be set to 2.
-   The user has to receive a warning message 7 days before their password expires.
-   Your password must be at least 10 characters long. Uppercase, lowercase, a number, no more than 3 consecutive identical characters.
-   The password must not include the name of the user.
-   The following rule does not apply to the root password: The password must have at least 7 characters that are not part of the former password.
-   There has to be two users, a root user and a user of your choice that belongs the sudo group.
-   Limit Authentication using sudo to 3 attempts.
-   Actions using sudo have to be archived.
-   You have to create a simple script that displays system information every 10 minutes from server startup.

## New Concepts

-   Hypervisors
-   Virtual Machines (VMs)
-   Virtualization
-   Virtual Networking
-   Disk partitioning and file systems
-   Operating System Installation & Configuration
-   User and Permission Management
-   Package Management with apt
-   System Monitoring: CPU, memory, disk, and process monitoring
-   Firewall and Security
-   Automation and Scripting
