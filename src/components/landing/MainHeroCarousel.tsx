import { mqCustom, theme } from '@/config/emotion'
import { css } from '@emotion/react'
import React from 'react'
import Carousel from '../Carousel'

const carouselContents = [
  {
    name: "perkenalan",
    link: "slide-1.png"
  },
  {
    name: "promo",
    link: "slide-2.png"
  }
]

const MainHeroCarousel = () => {
  return (
    <Carousel className="mt-4" config={{
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    }}>
      {
        carouselContents.map((el,id)=>(
          <div key={id} css={css`
            cursor: grab;
            display: flex !important;
            justify-content: center;
            position: relative;
          `}>
            <div css={css`
              overflow: hidden;
              background-color: ${theme.blue};
              border-radius: 7px;
              width: 100%;
              max-width: 100%;
              background-image: url("/img/${el.link}");
              aspect-ratio: 2;
            `} className="bg-image-center">
            </div>
          </div>
        ))
      }
    </Carousel>
  )
}

export default MainHeroCarousel
