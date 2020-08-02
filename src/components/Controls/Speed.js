import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from '@material-ui/core/Tooltip';

import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
    // margin: {
    //   height: theme.spacing(3),
    // },
  
});



export default function SpeedSlider() {
  const classes = useStyles();
  const [speed, setSpeed] = React.useState(true);

  const handleChange = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Speed
      </Typography>
      <Grid container spacing={1}>
        {/* <Grid item>
          <VolumeDown />
        </Grid> */}
        <Grid item xs>
          <Slider
            value={setSpeed}
            onChange={handleChange}
            
            aria-labelledby="continuous-slider"
          />
        </Grid>
        {/* <Grid item>
          <VolumeUp />
        </Grid> */}
      </Grid>
    </div>
  );
}
