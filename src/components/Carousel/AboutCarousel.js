import React, { useState } from "react";
import { red, blue, green, blueGrey } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

// const styles = {
//   root: {
//     height: 400,
//     width: 800,
//   },
//   content: {
//     width: "40%",
//     maxWidth: 300,
//     height: "calc(100% - 96px)",
//     maxHeight: 600,
//     margin: "-16px auto 0",
//     position: "relative",
//     top: "50%",
//     transform: "translateY(-50%)",
//   },
// };

const AboutCarousel = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div >
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
        //   media={
        //     <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
        //   }
        //   mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Rules: Birth"
          subtitle="Births: Each dead cell adjacent to exactly three live neighbors will become live in the next generation."
        />

        <Slide
        //   media={
        //     <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
        //   }
        //   mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Rules: Death by Isolation"
          subtitle="Death by isolation(underpopulation): Each live cell with one or fewer live neighbors will die in the next generation."
          
        />
        <Slide
        //   media={
        //     <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
        //   }
        //   mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Rules: Death by Overpopulation"
          subtitle="Death by overpopulation: Each live cell with four or more live neighbors will die in the next generation."
          
        />
        <Slide
        //   media={
        //     <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
        //   }
        //   mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Rules: Survive"
          subtitle="Survive: Each live cell with either two or three live neighbors will remain alive for the next generation."
          
        //   "All rules apply to all cells at the same time."

        />
        <Slide
        //   media={
        //     <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
        //   }
        //   mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="The Game"
          subtitle="This is a Turing complete cellular automata project that only
          requires an initial input thus making this a zero player game
          that requires no interaction."            
          

        />
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="Cellular"
          subtitle="A cellular automaton is a collection of colored cells placed on a grid that evolve
        through time and create patterns according to the states of
        neighboring cells."
        />
      </AutoRotatingCarousel>
    </div>
  );
};

// export default withStyles(styles)(AboutCarousel);

export default AboutCarousel;
