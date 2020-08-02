[![Netlify Status](https://api.netlify.com/api/v1/badges/c5068bfe-4057-473e-8caa-e687090af14c/deploy-status)](https://app.netlify.com/sites/elegant-mccarthy-4b9082/deploys)

# Conway's Game of Life
> Conway’s Game of Life is an algorithm that simulates “life” on a 2D grid. It’s a class of algorithm known as a cellular automaton.

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
![Example screenshot](.\img\screencapture-elegant-mccarthy-4b9082-netlify-app-2020-08-02-17_19_36.png)



## Technologies
* Javascript - version 1.0.0
* React - version 16.13.1
<!-- * Tech 3 - version 3.0 -->

## Setup
[Game of Life](https://elegant-mccarthy-4b9082.netlify.app/)

## Code Examples
Show examples of usage:
Buildout for pattern using coordinates

`export const dieHard = (golGrid) => {
  golGrid[10][17] = 1;
  golGrid[11][11] = 1;
  golGrid[11][12] = 1;
  golGrid[12][12] = 1;
  golGrid[12][16] = 1;
  golGrid[12][17] = 1;
  golGrid[12][18] = 1;

  return golGrid;
};`

## Features
List of features ready and TODOs for future development
* Generation Count
* Skip Generation
* Pattern options
* Speed up / Slow down

To-do list:
* Zoom to larger or smaller grid
* Customizable size, shape, and color for grid and cells
* On pattern hover tell about pattern - invented by, discovered in, pattern type, number of cells

## Status
Project is: _finished_, 
<!-- _in progress_, _finished_, _no longer continue_ and why? -->

## Inspiration
Based on John H Conway's Game of Life using ['life-like cellular automata'](https://conwaylife.com/wiki/Cellular_automaton#Life-like_cellular_automata)

## Contact
Created by [Sophia Jung](https://twitter.com/KingSofieJ) - feel free to contact me!