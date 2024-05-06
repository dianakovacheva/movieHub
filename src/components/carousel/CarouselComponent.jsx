import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import CarouselComponentCSS from "./CarouselComponentCSS.module.css";

export default function CarouselComponent() {
  const items = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=800&h=500&q=60",
    },
    {
      label: "Bluetit",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=800&h=500&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=500&q=80",
    },
  ];

  return (
    <>
      <Carousel className={CarouselComponentCSS.container}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function Item(item) {
  const itemLabel = item.item.label;
  const itemImgPath = item.item.imgPath;
  return (
    <Paper>
      <h2>{itemLabel}</h2>
      <img src={itemImgPath} />
    </Paper>
  );
}
