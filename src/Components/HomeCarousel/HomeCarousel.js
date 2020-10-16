import React from 'react';
import Carousel from 'react-material-ui-carousel';

const HomeCarousel = () => {

    return (
        <div >
          <Carousel>
            <img style={{height:'20%', width:'50%'}} src={require('../../resources/images/carousel-1.png')} alt='Carousel-1' />
            <img style={{height:'20%', width:'50%'}} src={require('../../resources/images/carousel-2.png')} alt='Carousel-2' />
            <img style={{height:'20%', width:'50%'}} src={require('../../resources/images/carousel-3.png')} alt='Carousel-3' />
          </Carousel>
        </div>
    );
};

export default HomeCarousel;