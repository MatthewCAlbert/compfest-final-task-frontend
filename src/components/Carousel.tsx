import { cssVariables } from "@/config/emotion";
import { css } from "@emotion/react";
import React from "react";
import Slider from "react-slick";

const Carousel: React.FC<{
  className?: string,
  config?: any
}> = ({ children, className, config = {}, ...props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...config
  };

  return (
    <Slider {...settings} className={className} css={css`
      max-width: ${cssVariables.maxWidth};
      position: relative;
    `}>
      {children}
    </Slider>
  );
}

export default Carousel;