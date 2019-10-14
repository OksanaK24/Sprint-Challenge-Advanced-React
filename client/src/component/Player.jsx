import React from "react";
import  Grid  from "@material-ui/core";
function Player({ player }) {
  return (
    <div>
      <Grid item xs={2}>
        {player}
      </Grid>
    </div>
  );
}

export default Player;
