import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 350,
        height: 455,
        backgroundColor: "red",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        sx={{ height: 150, backgroundColor: "whitesmoke" }}
        image={element.img}
      />
      <CardContent sx={{height:255}}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body2">{element.description}</Typography>
        <Typography variant="body">${element.price}.</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`} style={{textDecoration: "none", backgroundColor:"white"}}>
        <Button variant="outlined">Comprar</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
