// import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useState, useCallback, useRef } from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Button, ButtonGroup } from "./panel-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import React, { Component, useEffect } from "react";



const styles = { height: 700, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

function AboutCarousel() {
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay((autoplay) => !autoplay), []);
  const _visibleOnSelect = useCallback((active) => {
    console.log(`_visible onSelect active=${active}`);
  }, []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []);
  const _changeIcon = useCallback(() => {
    // Icon Switch
    setIcon(({ leftIcon, rightIcon }) => {
      leftIcon = leftIcon ? undefined : icon_glass;
      rightIcon = rightIcon ? undefined : icon_music;
      return { leftIcon: leftIcon, rightIcon: rightIcon };
    });
  }, []);

  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }}>
      <Row>
        <Col span={12} style={{ marginTop: 20 }}>
          <RBCarousel
            animation={true}
            autoplay={autoplay}
            slideshowSpeed={3000}
            defaultActiveIndex={0}
            leftIcon={icon.leftIcon}
            rightIcon={icon.rightIcon}
            onSelect={_onSelect}
            ref={slider_ref}
            pauseOnVisibility={true}
            className="carousel-fade"
            version={4}
          >
            <div style={{ height: 400 }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://newsbrig.com/wp-content/uploads/2020/04/Mathematician-John-Horton-Conway-a-%E2%80%98magical-genius%E2%80%99-known-for-inventing-the-%E2%80%98Game-of-Life%E2%80%99-dies-at-age-82.jpg"
                alt="some"
              />
              <div className="carousel-caption">
                John Horton Conway <p> (26 December 1937 - 11 April 2020)</p>
              </div>
            </div>
            {/* <div style={{ ...styles, backgroundColor: "aqua" }}>
              <video
                className="carousel-center"
                controls
                style={{ width: "75%" }}
                height="250"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="carousel-caption">Video</div>
            </div> */}
            <div style={{ ...styles, backgroundColor: "grey" }}>
              <div className="carousel-center">
                <h2> Conway's Game of Life </h2>
                <p>
                  This page visualizes cellular automatons based on The Game of
                  Life by mathematician{" "}
                  <a href="https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life">
                    John Horton Conway.
                  </a>
                </p>
                <p>
                  A{" "}
                  <a href="https://mathworld.wolfram.com/CellularAutomaton.html">
                    cellular automaton
                  </a>{" "}
                  is a collection of colored cells placed on a grid that evolve
                  through time and create patterns according to the states of
                  neighboring cells.{" "}
                </p>
                <p>
                  The "game" is actually a zero-player game, its evolution is
                  determined by its initial state, needing no input from human
                  players. One typically interacts with the Game of Life by
                  creating an initial configuration and observing how it
                  evolves.
                </p>
              </div>
              <div className="carousel-caption">About</div>
            </div>
            <div style={{ ...styles, backgroundColor: "grey" }}>
              <div className="carousel-center">
                <h2>Rules of the game</h2>
                <p>
                  This is a Turing complete cellular automata project that only
                  requires an initial input thus making this a zero player game
                  that requires no interaction.{" "}
                </p>
                <li>
                  1. The world is a 2D grid. </li> <li>2. Each cell in the grid is always
                  “alive” or “dead” / "on" or "off". </li><li>3. Time advances as a
                  series of discrete rounds.
                </li>
                <h2> Living cells follow 3 rules, each round:</h2>
                <li>
                  1. If fewer than 2 of your neighbors are alive, you die.
                  (underpopulation) 
                  <li>2. If more than 3 of your neighbors are
                  alive, you die (overpopulation) </li> <li>3. Otherwise (if you have 2 or
                  3 neighbors) you survive.</li>
                </li>
                <h2> Dead cells have 2 rules, each round:</h2>
                <li>
                  1. If exactly 3 of your neighbors are alive, you become alive.
                  (reproduction) </li><li>2. Otherwise you remain dead.
                </li>
              </div>
              <div className="carousel-caption"></div>
            </div>
            <div style={{ ...styles, backgroundColor: "grey" }}>
              <div className="carousel-center">
                {/* <p>
                  This page visualizes cellular automatons based on The Game of
                  Life by mathematician{" "}
                  <a href="https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life">
                    John Horton Conway.
                  </a>
                </p>
                <p>
                  A{" "}
                  <a href="https://mathworld.wolfram.com/CellularAutomaton.html">
                    cellular automaton
                  </a>{" "}
                  is a collection of colored cells placed on a grid that evolve
                  through time and create patterns according to the states of
                  neighboring cells.{" "}
                </p>
                <p>
                  The "game" is actually a zero-player game, its evolution is
                  determined by its initial state, needing no input from human
                  players. One typically interacts with the Game of Life by
                  creating an initial configuration and observing how it
                  evolves.
                </p> */}

                
              </div>
              <div className="carousel-caption">About</div>
            </div>
            {/* <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <span>text</span>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
              <div className="carousel-center">
                <iframe
                  style={{ width: 500 }}
                  height="250"
                  src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                  frameBorder="0"
                  allowFullScreen
                  title="sometitile"
                />
              </div>
              <div className="carousel-caption">Youtube</div>
            </div> */}
          </RBCarousel>
        </Col>
      </Row>
    </div>
  );
}

export default AboutCarousel;
