## Overview

It's time to dive into Object Oriented Programming!, This project contains 5 inner projects designed to understand the specifities of the c++ Languagesuage when compared to C and also understand new concepts like ploymorphism, overloads, inheritance, abstract classes...

## Requirements :

### Module 00 : Namespaces, classes, member functions, stdio streams, initialization lists, static, const, and some other basic concepts.

-   ex00 : Capitalizing a set of strings.
-   ex01 : Implement a PhoneBook class to store, display, and search for contacts.
-   ex02 : Implement a banking class for managing accounts, opening, depositing, withdrawing, closing.

### Module 01 : Memory allocation, pointers to members, references, switch statement

-   ex00 : Memory allocation using new.
-   ex01 : Memory allocation using new[].
-   ex02 : References and pointers.
-   ex03 : References and pointers.
-   ex04 : Reading and writing into a file.
-   ex05 : Pointers to member functions.
-   ex06 : Switch statement.

### Module 02 : Ad-hoc polymorphism, operator overloading and Orthodox Canonical class form.

-   ex00 : Create a fixed point class to manipulate fixed point numbers. You must use Orthodox Canonical class form, it must have a default constructor, copy constructor, copy assignement constructor and a destructor.
-   ex01 : Add Methods for converting between floats and fixed points.
-   ex02 : Overload the operators >, <, >=, <=, ==, !=, +, -, \*, /, pre-increment, post-increment, pre-decrement, and post-decrement. Add min and max static function.
-   ex03 : Create a static methode to check if a point is inside a triangle or not in a 2d space using fixed points.

### Module 03 : Inheritance

-   ex00 : Create a base class with some attributes and methods.
-   ex01 : Create a derived classes that inherits from the base class. override the methods of the base class.
-   ex02 : Create a second derived classes that inherits from the same base class.
-   ex03 : Create a third class that inherits from both the derived classes at same time. Fix the dimond problem using virtual Inheritance.

### Module 04 : polymorphism, abstract classes, interfaces

-   ex00 : You have to create an Animal base class with a makeSound method, and two Dog and Cat classes that inherit from the Animal base class and they must override the makeSound method. Using pointers and references to the base class, the derived classes must call the right method.
-   ex01 : The Dog and Cat classes now have a pointer to another class, copying objects must not be shallow, memory leaks are not to be tolerated.
-   ex02 : You have to turn the Animal class into an abstract class.
-   ex03 : You have to Implement a AMaterias abstract class and its concrete classes Ice and Cure. Each with a set of methods, You have to implement an ICharacter interface class and it Character concrete class, a character object has an inventory of four Materias, you must be able to equip and unequip a Materia. Copying must not be shallow, memory leaks are not to be tolerated. You also have to create a IMateriaSource interface class and its concrete class that will have an invertory of four Materias, It must be able to learn a Materia and create and return an object of it on demand. Again, copying must not be shallow, memory leaks are not to be tolerated.
