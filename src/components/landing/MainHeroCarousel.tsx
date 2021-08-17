import { mqCustom } from '@/config/emotion'
import { css } from '@emotion/react'
import React from 'react'
import Carousel from '../Carousel'

const MainHeroCarousel = () => {
  return (
    <Carousel className="mt-4" config={{
      arrows: false
    }}>
      {
        [1,2,3].map((el,id)=>(
          <div key={id} css={css`
            padding: 0 20px;
            cursor: grab;
            display: flex !important;
            justify-content: center;
            position: relative;
          `}>
            <div css={css`
              overflow: hidden;
              background-color: green;
              border-radius: 7px;
              aspect-ratio: 1.89;
              min-width: 320px;
              ${mqCustom(460)}{
                min-width: 420px;
              }
            `}>
              {el}
            </div>
          </div>
        ))
      }
    </Carousel>
  )
}

export default MainHeroCarousel
