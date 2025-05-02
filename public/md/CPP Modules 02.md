## Overview

Time to dive deeper into some of the most important c++ features, error handling, templates, containers...

## Requirements :

### Module 05 : Repetition and Exceptions

-   ex00 : You have to implement a Bureaucrat class, it has a name and a grade ranging from 1 to 150, 1 being the highest. implement an exception class to handle errors; attempting to initialize an outbounded object will throw an exception. Implement methods that increase and decrease the grade, if it goes out of bound, you have to throw an exception. You have to implement you own exception classes.
-   ex01 : You have to implement a Form class that has name, a sign stat, a grade required to sign it and a grade required to execute it. A Bureaucrat must be able to sign and execute a Form. same rules apply, throw an exception in case of any outbounded operation.
-   ex02 : You have to make the Form class Abstract, and inplement three additional concrete classes that inherit from the Form class, each with a specific action when the form is executed. same rules apply, throw an exception in case of any outbounded operation.
-   ex03 : You have to implement an Intern class, it must be able to create the required form class, that is one of the three previously created forms. if it doesn’t exist, throw an exception.

### Module 06 : C++ casts

-   ex00 : Conversion of scalar types : Create a class that takes a string argument, detects its type(char, int, float, double), then convert it from its actual type to the other types. use `static_cast` .
-   ex01 : Serialization : You have be able to convert a pointer to an unsigned integer type and back, use `reinterpreted_cast` .
-   ex02 : Create a base class and three derived classes, using a base class pointer to a derived, you have to identify the real type of the object. Same thing for a base class reference to a derived. use `dynamic_cast` .

### Module 07 : C++ templates

-   ex00 : You have to create the following function templates : `swap`, `min` and `max` that swap and return the minimum and maximum of the given arguments respectively.
-   ex01 : You have to create an `Iter` function template that iterates a given array of any type and of any size and apply a given function on each element.
-   ex02 : You have to create a class template `Array` that behave exactly like `Array<int>` . elements must be create an array of any size, access elements using subscript operator `[]` . implement a `size()` method. copying must not be shallow. memory leaks are not to be tolerated.

### Module 08 : Templated containers, iterators, algorithms

-   ex00 : You have to implement a function template that finds and returns an element in a given container of any type except for associative containers., you have to use iterators and algorithms.
-   ex01 : You have to implement two function templates that return the shortest and longest span in a given container. you have to use iterators and algorithms.
-   ex02 : You have to create a `MutanStack` class, it must be iteratable and supports all methods of the original `stack` container.

### Module 09 : The **Standard Template Library (STL)**

-   ex00 : You have to create a bitcoin class, the class must use at least one container. The calss has a provided database that will represent bitcoin price over time. You program has to an input database that contains a year and a positive float or integer value between 0 and 1000. Your program should be able to display on the standard output the result of the value multiplied by the exchange rate according to the date indicated in your database. You must handle invalid input, throw the appropriate exception and display an error message. memory leaks are not to be tolerated.
-   ex01 : You have to create a program that implements a Reverse Polish Notation, Calculates and displays the result on the standard output. You must handle invalid input, throw the appropriate exception and display an error message. Your program must be able to handle operations basic operations `+` , `-` , `*` and `/` . You use at least one container, do not use the same container in the previous exercise.
-   ex02 : You have to create a program that takes a positive integer sequence as argument and sort it using the Ford-Johnson algorithm. You must handle invalid input, throw the appropriate exception and display an error message. You use at least two different containers, do not use the same containers in the previous exercises. Display on the standard output the integer sequence before and after being sorted, and the time used by each container for it to be sorted.
