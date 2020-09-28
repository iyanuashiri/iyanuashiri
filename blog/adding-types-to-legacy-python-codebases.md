---
title: Adding Type Hints to Legacy Python Codebases
path: /adding-types-to-legacy-python-codebases
date: 2019-03-07
tags: ['python']
---

# Type Hints: Adding Types to Legacy Codebases

## Introduction

Python is an interpreted and dynamic language. This means Python code is executed at runtime and also
doesn't make use of a type system when defining language constructs such as variables and functions.

In Python 3.5, the typing module was introduced. This allows Python code to be gradually typed i.e Types
can be added to some parts (variables, functions, classes etc.) of a codebase and checked at runtime 
(static typing) and some other parts (variables, functions etc.) of the codebase don't contain types, 
hence type errors can appear at runtime (dynamic typing).

## Advantages of Adding Types

1. It enables the detection of many programming errors quickly, reliably and automatically.
2. It provides ready-made documentation.
3. It eliminates an entire category of bugs. Type errors at runtime are the most common errors 
   encountered by Python developers.
   
4. It reduces the number of unit tests. There will be no need to write tests that checks for the types
   of some code expressions. 
   

## Gradual Typing in Python

Like it was stated earlier, gradual typing is a type system that gives you the option of either adding
types or not. Some common examples of gradually typed languages are JavaScript(Typescript), etc. In
Python, we gradually type our codebase using the typing module and  tools such as [mypy](https://github.com/python/mypy)
or [pyre](https://pyre-check.org/) allow us to get the benefit of static typing when we run these tools on our codebase. 

Running a Python code that has been gradually typed doesn't automatically catch type errors, Python is
still a dynamic language, but when we run tools like mypy or pyre on our code, they help catch type 
errors for parts of the code that have been typed. 
   
## Getting Started with Type Hints

###### Type Checking Variables

```
age: int = 5

name: str = 'Iyanuoluwa'
```

The first line shows the variable name ```age``` assigned to the value 5 which is an integer.

The second line shows the variable name ```name``` assigned to the value ```Iyanuoluwa``` which is a string

###### Type Checking Functions

```
def multiply(num1: int, num2: int) -> int:
    return num1 * num2
```
You can see the function parameters defines a type. The return value is also typed.  

###### Complex Data Types

```
from typing import List

ages: List[int] = [18, 20, 34]
```
For complex data types such as List, Dict, Tuple etc, we have to import them from the typing module.
In this example, ```ages``` is assigned to a List of integers. 

```
from typing import Dict

staff_ages: Dict[str: int] = {'iyanu': 23, 'ajao': 24}
```
In this example, ```staff_ages``` is assigned to a Dictionary with a ```str``` as Key and ```int``` as 
Value.


```
from typing import Tuple

data: Tuple[str, int, float] = ('iyanu', 64, 5.9)
```
A Tuple is an immutable data structure. You can't add new or change the values contained in the Tuple. 
So when you want to type a Tuple, you have to state the types for all the values that will be contained 
in the Tuple.

###### Creating Aliases

```
from typing import Dict, List

list_of_dicts: List[Dict[str: int]] = [{'iyanu': 10, 'ajao': 12}]

ListOfDict = List[Dict[str: int]]

list_of_dicts: ListOfDict = [{'iyanu': 10, 'ajao': 12}]
```
You can create alias for complex data structures. You assign a name to the type of the complex data
structure.

## Some Limitations of Python Type Hints

### First Limitation

```
from typing import List

ages: List[int] = [1, 2]

ages.append('Iyanu')
```

```mypy``` static checker will complain when we try to add a string since the type is a List of integer.
But a Python List is heterogeneous, hence it is normal for the List data type to contain both an 
integer and string.


### First Workaround

```
from typing import List, Union

ages: List[Union[str, int]] = [1, 2]

ages.append('Iyanu')
```
Now with the workaround, ```mypy``` won't complain because we now have a List of either a string or 
integer. That is what ```Union``` is for. 


### Second Limitation

```
def get_id():
    pass
    
def send_email(id: int):
    pass
    
   
id = get_id() # returns None

send_email(id)
```

In the above example, the ```get_id()``` function is expected to return an integer as id but there are 
scenarios where ```None``` is returned. This means the ```send_email()``` function will accept a ```None``
which will most likely cause an error.

### Second Workaround


```
from typing import Union


def get_id() -> Union[int, None]:
    pass
    
def send_email(id: int):
    pass
    
   
id = get_id() # returns None

send_email(id)
```

Just like the first workaround, we are making use ```Union``` again. This time the return value for
```get_id()``` function is either an integer or a None.

Due to how common this limitation is, a special type was included in the typing module. It is called ```Optional```.


```
from typing import Optional


def get_id() -> Optional[int]:
    pass
    
def send_email(id: int):
    pass
    
   
id = get_id() # returns None

send_email(id)
```

This means you can replace ```Union[int, None]``` with ```Optional[int]```.


### Third Limitation

```
id: int

id = 'i.8'
```
There are instances where a variable is defined to accept a particular say an integer, but along the 
line, you have to pass an integer that has been quoted. (A number that is in strings)

### Third Workaround (a)

```
id: int

id: '1.8' # type: ignore
```

The first workaround is to use a comment like the one above. When mypy gets to this code, it ignores
whatever is there

### Third Workaround (b)
```
def legacy_parser(text):
    return data
    
    
def legacy_parser(text: Any) -> Any
    return data
```

In this example, we have a function that accepts a text. The text can contain any combination of 
data type e.g integer, strings, floats etc. It can also return any combination of data type.

Hence we type the function parameter and the return as ```Any```

## Adding Types To Legacy Codebases

At this juncture, we now know how to gradually type our existing codebases. We don't have to go all in.
We can start with the critical parts that is always showing type errors and move to the parts that
are less critical. 

There is also a way to automate this process. [MonkeyType](https://github.com/Instagram/MonkeyType) is an open source tool developed at Instagram 
that adds type hints to our codebase. It collects runtime types of function arguments and return values.

## How to use MonkeyType

For instance, we have a file called ```add.py``` we the following the ```add``` function defined in the
file.

```
add.py

def add(num1, num2):
    return num1 + num2
```

We have another file called ```calls_add.py```. This file calls the add function.

```
calls_add.py

add(1, 2)
```

```
monkeytype run calls_add.py

monkeytype stub add.py

monkeytype apply add.py
```

When you open the ```add.py``` file, you see the following.

```
add.py

def add(num1:int, num2:int) -> :
    return num1 + num2
```

With MonkeyType, we can automate add types to our legacy codebases and fix the parts that MonkeyType 
didn't do a good job with. 

Finally, in order to greatly benefit from a gradual type system, it is best to use the type checker in 
your continuous integration. 

You can follow me on Twitter: [@IyanuAshiri](https://www.twitter.com/iyanuashiri)
 and checkout my blog [iyanuashiri.me](https://iyanuashiri.me) for more Python content. 