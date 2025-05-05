import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from '../styles/theme';

const SliderContainer = styled.div`
  margin: 50px 0;
  padding: 0 50px;
  
  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    z-index: 1;
    
    &:hover {
      background-color: ${theme.colors.secondary};
    }
    
    &::before {
      font-size: 24px;
    }
  }
  
  .slick-prev {
    left: 10px;
  }
  
  .slick-next {
    right: 10px;
  }
`;

const ProductCard = styled.div`
  position: relative;
  margin: 0 15px;
  border-radius: 15px;
  overflow: hidden;
  height: 400px;
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  opacity: 0.9;
`;

const products = [
  {
    id: 1,
    title: 'Authentic Italian Pizza',
    description: 'Special 4-day fermented dough, fresh ingredients, and Italian-style cooking',
    image: require('../assets/images/products/pizzas/pizza.png')
  },
  {
    id: 2,
    title: 'Gourmet Burger',
    description: 'Handcrafted patty with special sauce and fresh vegetables',
    image: require('../assets/images/products/burgers/burger.jpg')
  },
  {
    id: 3,
    title: 'Handmade Pasta',
    description: 'Fresh daily-made pasta with special Italian sauces',
    image: require('../assets/images/products/pastas/pasta.jpg')
  }
];

const ProductSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductContent>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductContent>
          </ProductCard>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ProductSlider; 