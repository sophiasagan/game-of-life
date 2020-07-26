import React, { Component } from "react";
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

const styles = { height: 400, width: "100%" };
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
            slideshowSpeed={2000}
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
                src="https://www.w3schools.com/bootstrap/ny.jpg"
                alt="some"
              />
              <div className="carousel-caption">Image</div>
            </div>
            <div style={{ ...styles, backgroundColor: "aqua" }}>
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
            </div>
            <div style={{ ...styles, backgroundColor: "lightpink" }}>
              <div className="carousel-center">center Text</div>
              <div className="carousel-caption">Text</div>
            </div>
            <div style={{ ...styles, backgroundColor: "lightblue" }}>
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
            </div>
          </RBCarousel>
        </Col>
      </Row>
    </div>
  );
}


export default AboutCarousel;