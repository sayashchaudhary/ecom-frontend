import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

import Download from '../../../assets/images/download.jpg';

export interface CarouselData {
    imageUrl?: string;
    caption: string;
}

export interface CarouselProps {
    data: CarouselData[]
}

const Slider: React.FC<CarouselProps> = (props: CarouselProps) => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}  className="carousel__background">
            {
                props.data.map(d => {
                    return (
                        <div>
                            <img src={Download} alt="Download" className="slider__image"/>
                            <p className="legend">{d.caption}</p>
                        </div>
                    )
                })
            }

        </Carousel>
    )
};


export default Slider;

