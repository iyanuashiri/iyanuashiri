---
title: Understanding Python Variables
path: /understanding-python-variables
date: 2019-01-28
tags: ['python']
---


The first time you get introduced to Python's variable, it is usually defined as "parts
of your computer’s memory where you store some information." Some define it as a "storage placeholder 
for texts and numbers." We will soon find out that Python's variable is deeper than this. 

Python's variable is a _reference_ to an object 
created in the computer's memory. The object can be a String, Integer etc. In Python, everything is 
an object. An object has an identity, type and value. The identity of an object never changes. Same with
the type of the object. The value of the object can or cannot change depending on whether it is an
immutable object or a mutable object. 

For instance:

```python

name = 'Iyanuoluwa'
age = 23

id(name) # 140646899064048
id(age) # 10911104

type(name) # <class 'str'>
type(age) # <class 'int'>

```

The above example shows two variables assigned to their respective values. We check the identity 
and type of the variables using the built-in functions ```id()``` and ```type()``` respectively. 

In Python, objects are first created alongside their type or class and then given an identity.

```python

print(id(23)) # 10911104
```

We can see that the object ```23```, which is an Integer, has its own identity irrespective of whether
it was assigned to a variable name or not. This further explains Python variables. They are just names
that references an object created. 

Now when we compare the id for the object ```23``` and that for the variable age, we can see that 
they have the same identity. I will explain what just happened.

Integers in the range ```-5 to 256``` are created by the interpreter during startup. These integers 
can then be used whenever you are running your program, thus speeding things up. Hence the id of each 
number will always remain the same. This is why when we created the first object ```23``` and assigned
to the variable ```age``` and the second object ```23```, they have the same identity. Python didn't
create a separate a object ```23```, it just used the one that was created during startup.

To understand this better, let's use integers outside this range.

```python

DOB = 1995 
id(DOB) # 139959945941488


iyanu = 1995 
id(iyanu) # 139959945943056
```
From the above example, we can see that separate ```1995``` objects were created and assigned to their
respective variable names.

Now let's take the example further and assign a single object to two separate variable names.

```python
year = 2019

date = year

id(year) # 139959945941392

id(date) # 139959945941392
```

We can see that the two variable names have the same identity because they were assigned to the same 
object. 


The last thing to note about Python variables and their values is that an object must have at least
one reference, otherwise, the object will be 
[_Garbage collected._](https://wikipedia.com/Garbage_collection_computer_science) 
Let's continue from the previous example.

```python
year = 2019 # 2019 has at least one reference

date = year # 2019 has two references

year = 2020 # date is the only reference to 2019

date = 2020 # 2019 no longer has any reference and has been garbage collected
```

When an object has zero reference, it becomes garbage collected. This is an automatic memory
management technique. There are various types of garbage collection and this type is called
Reference counting. 

If you enjoyed this article, don't forget to share and comment below. Follow me on Twitter: [@IyanuAshiri](https://www.twitter.com/iyanuashiri), I tweet about Python 
