import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function MultiSlider() {
  return (
    <div style={{ width: "90%", height: "500px", margin: "0 auto"}}>
      <Carousel responsive={responsive} style={{ width: "100%", height: "500px"}}
        showDots={true}
      >
        <div style={{ backgroundColor: "salmon", width: "100%", height: "200px"}}>Item 1</div>
        <div style={{ backgroundColor: "teal", width: "100%", height: "100%"}}>Item 2</div>
        <div style={{ backgroundColor: "steelblue", width: "100%", height: "100%"}}>Item 3</div>
        <div style={{ backgroundColor:  "yellowgreen", width: "100%", height: "100%"}}>Item 4</div>
        <div style={{ backgroundColor: "teal", width: "100%", height: "100%"}}>Item 2</div>
        <div style={{ backgroundColor: "steelblue", width: "100%", height: "100%"}}>Item 3</div>
        <div style={{ backgroundColor:  "yellowgreen", width: "100%", height: "100%"}}>Item 4</div>
      </Carousel>;
    </div>
  )
}

export default MultiSlider
