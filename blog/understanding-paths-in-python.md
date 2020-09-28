---
title: Getting Started with Pathlib
path: /understanding-path-in-pythons
date: 2018-11-30
tags: ['python']
---


## Introduction

This tutorial will guide you on how to use the Pathlib module for working with filesystem paths, the benefits,
and understand the problem it solves since the Python standard library already contains ```os.path```.


## How is it Better than os.path

```os.path``` was the only way to work with filesystem paths, but it had some limitations. To perform certain tasks, you
have to import from other standard library modules. For instance, suppose you want to list the files ending with ```.txt```
in a directory, ```os.path``` is not enough.


Using ```os.path```, you will do this:

```python
import os
import glob

list(glob(os.path.join('posts', '*.md')))
``` 

Using ```pathlib```, you will do this:

```python
from pathlib import Path

list(Path('posts').glob('*.md'))
```

From the first example that makes use of ```os.path```, there was the need to import ```glob```. But with
```pathlib```, most of the functionality found in other modules are now in one place. 


## Getting Started

```python
from pathlib import Path
```

According to the standard library, Path instantiates a concrete path for the platform your code is running on.
This basically means that Path class figures out the necessary path separator that is required for the platform
your code is running on. 

NB: Windows uses a backslash as a path separator while unix based systems use the forward slash.

There are other classes that can be used, such as the ```WindowsPath``` and ```PosixPath```


## Using Path classmethods

```python
Path.home()

PosixPath('/home/ashiri')


Path.cwd()

PosixPath('/home/ashiri/iyanuashiri/content/posts')

```

The Path class provides us with two classmethods. The ```home``` classmethod returns a home directory path object while the
```cwd``` classmethod returns the current working directory path object


## Creating Path object

```python
p = Path.home() / 'iyanu'
```
PosixPath('/home/ashiri/iyanu')

This code snippet creates a path object that can be used in your Python code, but the directory already exist
for the code to do something. In the next two examples, we will show how to create a new directory and a new file from
your Python code.


## Create a New Directory

```python
p = Path.home() / 'folder_name'
p.mkdir()
```

In the code snippet above, we create a path object called ```p``` and use the instance method ```mkdir```.

## Create a New File

```python
p = Path.home() / 'folder_name'
p.mkdir()

r = p / 'file_name.txt'

r.touch()
```

In this code snippet, we start by creating a path object called ```p```, then use the ```mkdir()``` instance method.
The next thing is create another path object called ```r``` and use the instance method ```touch()```.

The ```mkdir(exist_ok=True)``` method can take in an argument. This prevents a ```FileExistsError``` from being raised.


## Opening a File in a Path

There is an ```open``` instance method that works like the builtin ```open``` function. So we can do something
like this:

```python
with r.open as file:
    file.readline
```

## In conclusion

There is more than can be learnt on the pathlib documentation page, which can be found [here](https://docs.python.org/3/library/pathlib.html)


If you enjoyed this article, don't forget to share and comment below. Follow me on Twitter: [@IyanuAshiri](https://www.twitter.com/iyanuashiri), I tweet about Python

