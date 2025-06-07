## Overview

It's time to dive into Object-Oriented Programming!, This project contains 10 inner projects designed to understand the specificities of the c++ Language when compared to C and also to understand new concepts like polymorphism, overloads, inheritance, abstract classes, error handling, templates, containers...

### Module 00

-   Ex00 : Capitalizes a set of strings.
-   Ex01 : Implements a PhoneBook class to store, display, and search for contacts.
-   Ex02 : Implements a banking class for managing accounts, opening, depositing, withdrawing, closing.

### Module 01

-   Ex00 : Memory allocation using new.
-   Ex01 : Memory allocation using new[].
-   Ex02 : References and pointers.
-   Ex03 : References and pointers.
-   Ex04 : Reading and writing into a file.
-   Ex05 : Pointers to member functions.
-   Ex06 : Switch statement.

### Module 02

-   Ex00 : Implements a `Fixed` point class to manipulate fixed point numbers. All classes use Orthodox Canonical class form, having a default constructor, copy constructor, copy assignment constructor and a destructor.
-   Ex01 : Implements the conversion between floats and fixed points.
-   Ex02 : Implements the overload of the operators `>`, `<`, `>=`, `<=`, `==`, `!=`, `+`, `-`, `\*`, `/`, pre-increment, post-increment, pre-decrement, and post-decrement. Add min and max static function.
-   Ex03 : Checks if a point is inside a triangle or not in a 2d space using fixed points.

### Module 03

-   Ex00 : Implements a base class with some attributes and methods.
-   Ex01 : Implements derived classes that inherit from the base class and overrides the methods of the base class.
-   Ex02 : Implements a second derived classes that inherits from the same base class.
-   Ex03 : Implements a third class that inherits from both derived classes at same time and fixes the diamond problem using virtual Inheritance.

### Module 04

-   Ex00 : Implements a `Animal` base class with a `makeSound` method, with two `Dog` and `Cat` classes that inherit from the `Animal` base class, they both override the `makeSound` method. Using pointers and references to the base class, the derived classes must call the right method.
-   Ex01 : Implements another class so that the `Dog` and the `Cat` classes have a pointer to an instance of the newly created class, copying objects must not be shallow and with no memory leaks.
-   Ex02 : The Animal class is now an abstract class.
-   Ex03 : Implements a `AMaterias` abstract class and its concrete classes `Ice` and `Cure`. Each with a set of methods, also implements a `ICharacter` interface class and it `Character` concrete class, a character object has an inventory of four `Materias` that can be equipped and unequipped. Copying must not be shallow and with no memory leaks. In addition, there is a `IMateriaSource` interface class and its concrete class that has an invertory of four `Materias`, It's able to learn, create and return an object of it on demand. Again, copying must not be shallow with no memory leaks.

### Module 05

-   Ex00 : Implements a `Bureaucrat` class, it has a name and a grade ranging from 1 to 150, 1 being the highest. Implement an exception class to handle errors; attempting to initialize an out bounded object will throw an exception. Also Implements methods that increase and decrease the grade, throws an exception if it goes out of bound. Exception classes are self implemented.
-   Ex01 : Implements a `Form` class that has name, sign stat, grade required to sign it and a grade required to execute it. A `Bureaucrat` is able to sign and execute a `Form`, throws an exception if it goes out of bound. Exception classes are self implemented.
-   Ex02 : The `Form` class is Abstract. Implements three additional concrete classes that inherit from the Form class, each has a specific action when it is executed, throws an exception if it goes out of bound. Exception classes are self implemented.
-   Ex03 : Implements a `Intern` class, it is able to create the required form object, that is one of the three previously created forms, throws an exception if it doesn't exist.

### Module 06

-   Ex00 : Conversion of scalar types : Implements a class that takes a string argument, detects its type(char, int, float, double), then convert it from its actual type to the other types. Uses `static_cast`.
-   Ex01 : Serialization : The program is able to convert a pointer to an unsigned integer type and back. Uses `reinterpreted_cast`.
-   Ex02 : Implements a base class and three derived classes, using a base class pointer to a derived, the program identifies the real type of the object. Same thing for a base class reference to a derived. Uses `dynamic_cast` .

### Module 07

-   Ex00 : Implements the following function templates : `swap`, `min` and `max` that swap and return the minimum and maximum of the given arguments respectively.
-   Ex01 : Implements a `Iter` function template that iterates on a given array of any type and of any size and apply a given function on each element.
-   Ex02 : Implements a class template `Array` that behaves exactly like `Array<int>`. I can create an array of any size, access elements using subscript operator `[]`, has a `size` method, copying must not be shallow and with no memory leaks.

### Module 08

-   Ex00 : Implements a function template that finds and returns an element in a given container of any type except for associative containers using iterators and algorithms.
-   Ex01 : Implements two function templates that return the shortest and longest span in a given container using iterators and algorithms.
-   Ex02 : Implements a `MutanStack` class that is iterable and supports all methods of the original `stack` container.

### Module 09

-   Ex00 : Implements a bitcoin class that uses at least one container, The class has a provided database that represents the bitcoin price over time, the program takes an input database that contains a year and a positive float or integer value between 0 and 1000. The program parses and displays on the standard output the result of the value multiplied by the exchange rate according to the date indicated in the database, throws an exception in case of an invalid date and displays an error message.
-   Ex01 : Implements a Reverse Polish Notation algorithm using a `stack` container, Calculates and displays the result on the standard output, It supports basic operations `+`, `-`, `*` and `/`, Throws an exception in case of an invalid input and displays an error message.
-   Ex02 : Implements a program that takes a positive integer sequence as argument and sort it using the Ford-Johnson algorithm and displays on the standard output the integer sequence before and after being sorted, the program measures the time used to sort the sequence by two containers `vector` and `deque`, throws an exception in case of an invalid input and displays an error message.

## New Concepts

-   Namespaces, classes, member functions, stdio streams, initialization lists, static, const, and some other basic concepts.
-   Memory allocation, pointers to members, references, switch statement.
-   Ad-hoc polymorphism, operator overloading and Orthodox Canonical class form.
-   Inheritance.
-   Polymorphism, abstract classes, interfaces.
-   Repetition and Exceptions.
-   C++ casts.
-   C++ templates.
-   Templated containers, iterators, algorithms.
-   The **Standard Template Library (STL)**.
