import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { assets } from '../../assets/assets';
import { Container } from 'react-bootstrap';
import './HomeCarousal.css';

const HomeCarousal = () => {
  return (
    <div>
      <Container>
        <Carousel
          controls={true}
          indicators={true}
          interval={3000}
          pauseOnHover={true}
          fade={true}
        >
          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img
                src={assets.carousal2}
                alt="First slide"
                className="d-block mx-auto w-100 responsive-image"
                style={{  
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
              />
              <div className="image-overlay"></div> 
            </div>
            <Carousel.Caption>
              <h1 className="anim text-left text-white mb-5">
                Order Your <br /> Favourite Food Here
              </h1>
              <p className="anim text-left text-white mb-5 paragraph">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the
                finest ingredients and culinary expertise. Our mission is to satisfy your cravings
                and elevate your dining experience, one delicious meal at a time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img
src={assets.carousal5}           
     alt="Second slide"
                className="d-block mx-auto w-100 responsive-image"
                style={{
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
              />
              <div className="image-overlay"></div>
            </div>
            <Carousel.Caption>
              <h1 className="anim text-left text-white mb-5 ">
                Order Your <br /> Favourite Food Here
              </h1>
              <p className="anim text-left text-white mb-5 paragraph">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the
                finest ingredients and culinary expertise. Our mission is to satisfy your cravings
                and elevate your dining experience, one delicious meal at a time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img
                src={assets.carousal3}
                alt="Third slide"
                className="d-block mx-auto w-100 responsive-image"
                style={{
                  borderRadius: '15px',
                  objectFit: 'cover',
                }}
              />
              <div className="image-overlay"></div>
            </div>
            <Carousel.Caption>
              <h1 className="anim text-left text-white mb-5">
                Order Your <br /> Favourite Food Here
              </h1>
              <p className="anim text-left text-white mb-5 paragraph">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the
                finest ingredients and culinary expertise. Our mission is to satisfy your cravings
                and elevate your dining experience, one delicious meal at a time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>    
  );
};

export default HomeCarousal;
