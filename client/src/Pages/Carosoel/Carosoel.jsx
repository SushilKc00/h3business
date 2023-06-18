import React from "react";
import "../Carosoel/Carosoel.css";
import Dog from "../../assets/Dog.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Carosoel = ({ allImage, imageNumber, mobileImageNumber }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: imageNumber,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: imageNumber,
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: mobileImageNumber,
    },
    mobile: {
      breakpoint: { max: 658, min: 0 },
      items: mobileImageNumber,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        autoPlay={true}
      >
        {allImage &&
          allImage.map((img, index) => {
            return (
              <div style={{ width: "95%", margin: "auto" }} key={index}>
                <img src={img} alt="" className="car-img" />
              </div>
            );
          })}
      </Carousel>
      ;
    </>
  );
};
