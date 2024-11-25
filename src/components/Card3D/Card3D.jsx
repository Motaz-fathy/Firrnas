import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
//check the root of files
// Sample product data with 3D models and placeholder images
const products = [
  {
    category: 'Education',
    name: 'Astronaut',
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    imageUrl: 'https://framerusercontent.com/images/hx9b4NdsI0gfEU839AFmYt8K0.png',
  },
  {
    category: 'Home Appliances',
    name: 'Washing Machine',
    modelUrl: 'https://example.com/washing-machine.glb',
    imageUrl: 'https://framerusercontent.com/images/lzC5R5iattiwyWSFbAwoCoByHAw.png',
  },
  {
    category: 'Music',
    name: 'Guitar',
    modelUrl: 'https://example.com/guitar.glb',
    imageUrl: 'https://framerusercontent.com/images/sample-guitar.png',
  },
  {
    category: 'Fitness',
    name: 'Dumbbell',
    modelUrl: 'https://example.com/dumbbell.glb',
    imageUrl: 'https://framerusercontent.com/images/sample-dumbbell.png',
  },
];

// Styled Components
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #4e47f5;
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #a2a1b7;
`;

const CarouselItem = styled.div`
  padding: 20px;
  padding-bottom: 20px;
  border: 1px solid rgba(130, 106, 146, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(7.5px);
  background: linear-gradient(-23deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  height: 390px;
  text-align:start
`;

const Category = styled.p`
  color: #bdbdbd;
  margin: 2px 0;
`;

const ProductName = styled.h4`
  color: #ffffff;
  margin: 2px 0;
  font-size: 14px;
`;

const Button = styled.button`
  border: 1px solid rgba(130, 106, 146, 0.5);
  border-radius: 38px;
  background: linear-gradient(97deg, rgba(147, 144, 183, 0.28) 0%, rgba(143, 140, 174, 0.06) 100%);
  color: #ffffff;
  padding: 8px 20px;
  cursor: pointer;
  margin-top: 10px;
  width:98%
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
`;

// Load the 3D model
const ModelViewer = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} scale={0.7} />;
};

const ProductCarousel = () => {
  const [activeModelIndex, setActiveModelIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleModelClick = (index) => {
    setActiveModelIndex(activeModelIndex === index ? null : index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(isHovered)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const settings = {
    infinite: true,
    speed: 5000, // Speed of the carousel
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true, // Stop autoplay when hovered
    autoplaySpeed: 1200,

    dots: false, // Disable dots
    arrows: false, // Remove arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper className="productCarousel p-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title>Our Products</Title>
      <Subtitle>No matter your industry, we’ve got you covered</Subtitle>
      <Slider className="p-3" {...settings}>
        {products.map((product, index) => (
          <div key={index} className="col-3 container" style={{height:"300px"}}>

              <CarouselItem>
                {activeModelIndex === index ? (
                  <Canvas style={{ height: '350px' }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 0, 5]} />
                    <OrbitControls />
                    <ModelViewer modelUrl={product.modelUrl} />
                  </Canvas>
                ) : (
                  <ProductImage src={product.imageUrl} alt={product.name} />
                )}
                <Category>{product.category}</Category>
                <ProductName>{product.name}</ProductName>
                <Button onClick={() => handleModelClick(index)}>
                  {activeModelIndex === index ? 'Hide 3D Model' : 'Try 3D Model'}
                </Button>
              </CarouselItem>

          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default ProductCarousel;
