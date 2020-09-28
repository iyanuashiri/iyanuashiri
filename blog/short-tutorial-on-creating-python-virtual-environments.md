---
title: How to Create Python Virtual Environment
path: /python-virtual-environment
date: 2019-02-17
tags: ['python']
---


Before starting any Python project, it is highly recommended and best practice to create 
a virtual environment. The tool we use for creating virtual environments is called virtualenv.
Virtualenv isolates your Python set-up on a per-project basis. This means 
that changes made to one Python project won’t affect another Python project. 

## Setting up virtualenv

### On a Windows, Linux or OS X

```commandline
mkdir example_project
cd example_project
```


The next step is to make our virtual environment. This will be called example_env. Make sure the
 names you choose for your virtualenv is in lower case with no special characters and spaces. 

```commandline
python3 -m venv example_env
```

## Working with Virtual environment

### Windows

Enter the example_project directory 

```commandline
cd  example_project
```

Activate the virtual environment

```commandline
example_env\Scripts\activate
```

### Linux and OS X

Enter the example_project directory

```commandline
cd example_project
```

Activate the virtual environment

```commandline
source example_env/bin/activate
```

You will know that you have virtualenv started when you see that the prompt in your console is 
prefixed with (example_env)

Then enter into the directory_env directory

```commandline
cd example_env
```

That's all!


You can follow me on Twitter: [@IyanuAshiri](https://www.twitter.com/iyanuashiri) and 
checkout my blog [iyanuashiri.me](https://iyanuashiri.me) for more Python content.  


