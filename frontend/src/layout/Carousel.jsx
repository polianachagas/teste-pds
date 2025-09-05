import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: false,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    };

    return (
        <div className='carousel-container'>
            <div className="full-width-carousel">
                <Slider {...settings}>
                    <div className="full-width-slide">
                        <img src="/images/food1.jpg"
                             alt="Slide 1" 
                             className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="/images/food2.jpg"
                             alt="Slide 2" 
                             className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="/images/food3.jpg"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="/images/food4.jpg"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                    <div className="full-width-slide">
                        <img src="/images/food5.jpg"
                            alt="Slide 3" 
                            className="slide-image" />
                    </div>
                </Slider>
            </div>

            <div className='carousel-btn'>
                <h1>Comida caseira feita com carinho</h1>
                <p>Receitas de família, ingredientes frescos e tempero na medida certa.</p>
                <button className='cardapio-btn'>Nosso cardápio</button>
            </div>
        </div>
    );
};

export default Carousel;