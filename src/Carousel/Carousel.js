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
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React, { Component, useEffect } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import GameOfLifeHelpLayout from "./GameOfLifeHelpLayout";
// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2
// } from "react-html-parser";

// import background from "../../img/background.png";
// import background2 from "../../img/background2.jpg";
// import background3 from "../../img/background3.gif";
// import Four from "../../assets/images/carousel/bb-image-4.jpeg";

// const CarouselImg = styled.img`
//   width: 100%;
// `;
// const CarouselWrapper = styled.section`
//   display: block;
//   overflow: hidden;
//   padding: 2rem 0 0;
// `;

const styles = { height: 700, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

function AboutCarousel(){
  
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _visiableOnSelect = useCallback(active => {
    console.log(`visiable onSelect active=${active}`);
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
            version={4}
          >
            
            <div style={{ height: 400 }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://newsbrig.com/wp-content/uploads/2020/04/Mathematician-John-Horton-Conway-a-%E2%80%98magical-genius%E2%80%99-known-for-inventing-the-%E2%80%98Game-of-Life%E2%80%99-dies-at-age-82.jpg"
                alt="some"
              />
              <div className="carousel-caption">John Horton Conway <p> (26 December 1937 - 11 April 2020)</p></div>
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
              <div className="carousel-center"><p>This page visualizes cellular automatons based on The Game of Life by mathematician <a href='https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life'>John Horton Conway.</a></p><p>A <a href='https://mathworld.wolfram.com/CellularAutomaton.html'>cellular automaton</a> is a collection of colored cells placed on a grid that evolve through time and create patterns according to the states of neighboring cells. </p><p>The "game" is actually a zero-player game, its evolution is determined by its initial state, needing no input from human players. One typically interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
              </div>
              <div className="carousel-caption">About</div>
            </div>
            <div style={{ ...styles, backgroundColor: "grey" }}>
              <div className="carousel-center"><p>This page visualizes cellular automatons based on The Game of Life by mathematician <a href='https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life'>John Horton Conway.</a></p><p>A <a href='https://mathworld.wolfram.com/CellularAutomaton.html'>cellular automaton</a> is a collection of colored cells placed on a grid that evolve through time and create patterns according to the states of neighboring cells. </p><p>The "game" is actually a zero-player game, its evolution is determined by its initial state, needing no input from human players. One typically interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
              </div>
              <div className="carousel-caption">About</div>
            </div>
            <div style={{ ...styles, backgroundColor: "grey" }}>
              <div className="carousel-center"><p>This page visualizes cellular automatons based on The Game of Life by mathematician <a href='https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life'>John Horton Conway.</a></p><p>A <a href='https://mathworld.wolfram.com/CellularAutomaton.html'>cellular automaton</a> is a collection of colored cells placed on a grid that evolve through time and create patterns according to the states of neighboring cells. </p><p>The "game" is actually a zero-player game, its evolution is determined by its initial state, needing no input from human players. One typically interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
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