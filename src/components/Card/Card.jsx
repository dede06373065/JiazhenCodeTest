import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import car from "../../assets/image/car.png";
import Drawer from "@mui/material/Drawer";

export default function MediaCard() {
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Card
      sx={{ maxWidth: 345, minWidth: 250 }}
      className="item-card keen-slider__slide"
    >
      <CardMedia
        sx={{ height: 140 }}
        image={car}
        title="green iguana"
        className="item-img"
      />
      <CardContent className="item-content">
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toggleDrawer("right", true)}>
          Read More
        </Button>
      </CardActions>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div className="item-details">Show car's details</div>
      </Drawer>
    </Card>
  );
}
