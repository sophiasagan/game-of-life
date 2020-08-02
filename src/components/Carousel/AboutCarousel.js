import React, { useState } from "react";
import {
  blue,
  deepPurple,
  green,
  blueGrey,
  grey,
  indigo,
  cyan,
  lightBlue,
  pink,
} from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const AboutCarousel = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      <AutoRotatingCarousel
        label="Return to Game"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        interval={5000}
        autoplay={true}
        mobile={isMobile}
      >
        <Slide
          media={
            <img src="https://newsbrig.com/wp-content/uploads/2020/04/Mathematician-John-Horton-Conway-a-%E2%80%98magical-genius%E2%80%99-known-for-inventing-the-%E2%80%98Game-of-Life%E2%80%99-dies-at-age-82.jpg" />
          }
          mediaBackgroundStyle={{ backgroundColor: blueGrey[100] }}
          style={{ backgroundColor: blueGrey[200] }}
          title="John Horton Conway"
          subtitle="(26 December 1937 - 11 April 2020)"
        />
        <Slide
          media={
            <img src="https://blogs-images.forbes.com/startswithabang/files/2017/09/population-dynamics-in-conways-game-of-life-and-its-variants-9-728.jpg" />
          }
          mediaBackgroundStyle={{ backgroundColor: grey[400] }}
          style={{ backgroundColor: grey[600] }}
          title="Rules: Birth"
          subtitle="Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation."
        />

        <Slide
          media={
            <img src="https://i2.wp.com/puzzlewocky.com/wp-content/uploads/2017/07/Conways_game_of_life_breeder_animation-1.gif?resize=379%2C192&ssl=1" />
          }
          mediaBackgroundStyle={{ backgroundColor: indigo[300] }}
          style={{ backgroundColor: indigo[600] }}
          title="Rules: Death by Isolation"
          subtitle="Death by isolation(underpopulation): Each live cell with one or fewer live neighbors will die in the next generation."
        />
        <Slide
          media={
            <img src="https://kids.kiddle.co/images/1/18/%D0%98%D0%B3%D1%80%D0%B0_%22%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%22.gif" />
          }
          mediaBackgroundStyle={{ backgroundColor: cyan[400] }}
          style={{ backgroundColor: cyan[600] }}
          title="Rules: Death by Overpopulation"
          subtitle="Death by overpopulation: Each live cell with four or more live neighbors will die in the next generation."
        />
        <Slide
          media={
            <img src="https://66.media.tumblr.com/2ba257f6a12ed32750155dc42bba30fe/tumblr_oyrojqnL7H1qzbj7zo1_500.gif" />
          }
          mediaBackgroundStyle={{ backgroundColor: pink[400] }}
          style={{ backgroundColor: pink[600] }}
          title="Rules: Survive"
          subtitle="Survive: Each live cell with either two or three live neighbors will remain alive for the next generation."

          //   "All rules apply to all cells at the same time."
        />
        <Slide
          media={
            <img src="https://www.countsofmath.smartelligynt.com/wp-content/uploads/2020/05/game-of-life-animation-featured.gif" />
          }
          mediaBackgroundStyle={{ backgroundColor: deepPurple[400] }}
          style={{ backgroundColor: deepPurple[600] }}
          title="The Game"
          subtitle="This is a Turing complete cellular automata project that only
          requires an initial input thus making this a zero player game
          that requires no interaction."
        />
        <Slide
          media={
            <img src="https://mathworld.wolfram.com/images/gifs/puffertr.gif" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="Cellular Automata"
          subtitle="A cellular automaton is a collection of colored cells placed on a grid that evolve
        through time and create patterns according to the states of neighboring cells."
        />
      </AutoRotatingCarousel>
    </div>
  );
};

// export default withStyles(styles)(AboutCarousel);

export default AboutCarousel;
