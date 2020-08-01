# Conway's Game of Life
> Conway’s Game of Life is a venerable old algorithm that simulates “life” on a 2D grid. It’s a class of algorithm known as a cellular automaton.

## Table of contents
* [General info](#general-info)
* [Rules of the game](#rulesofthegame)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
### Who is John Conway?
John Horton Conway, born Dec. 26th, 1937, was an English-born Princeton mathematician. In 1970 John Conway invented a cellular automaton that came to known as "Conway's Game of Life". 

#### Notable Achievements
* Discovered surreal numbers
* Co-conceptualized the Free Will Theorem

## Rules of the game
This is a Turing complete cellular automata project that only requires an initial input thus making this a zero player game that requires no interaction. 

1. The world is a 2D grid.
2. Each cell in the grid is always “alive” or “dead” / "on" or "off".
3. Time advances as a series of discrete rounds.

#### Living cells follow 3 rules, each round:

1. If fewer than 2 of your neighbors are alive, you die. (underpopulation)
2. If more than 3 of your neighbors are alive, you die (overpopulation)
3. Otherwise (if you have 2 or 3 neighbors) you survive.

#### Dead cells have 2 rules, each round:

1. If exactly 3 of your neighbors are alive, you become alive. (reproduction)
2. Otherwise you remain dead.

## Screenshots
![Example screenshot](./img/screenshot.png)



## Technologies
* Javascript - version 1.0
* React - version 2.0
* Tech 3 - version 3.0

## Setup
Describe how to install / setup your local environement / add link to demo version.

## Code Examples
Show examples of usage:
`put-your-code-here`

## Features
List of features ready and TODOs for future development
* Awesome feature 1
* Awesome feature 2
* Awesome feature 3

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, 
<!-- _finished_, _no longer continue_ and why? -->

## Inspiration
Add here credits. Project inspired by..., based on...

## Contact
Created by [Sophia Jung](@KingSofieJ) - feel free to contact me!