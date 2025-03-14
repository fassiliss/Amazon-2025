import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css"

const CarouselEffect = () => {
  return (
    <div>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}

            >

                {
                    img.map((imageItemLink, i)=> {
                        return <img src={imageItemLink} alt="" key={i}/>
                    })

                }



        </Carousel>
        <div className={classes.hero__img}></div>
      
    </div>
  )
}

export default CarouselEffect;
