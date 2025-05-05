import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import pizzaImage from '../assets/images/products/pizzas/pizza.png';
import burgerImage from '../assets/images/products/burgers/burger.jpg';
import pastaImage from '../assets/images/products/pastas/pasta.jpg';
import backgroundGif from '../assets/videos/pasta_gifi.gif';
import ProductSlider from '../components/ProductSlider';

const HeroBackground = styled.div`
  position: relative;
  width: 100%;
  height: 140vh;
  margin-top: -20px;
  overflow: hidden;
  background-color: ${theme.colors.primary};
`;

const BackgroundGif = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundGif});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.2);
  transition: transform 0.3s ease;
  filter: brightness(0.8);
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(46, 125, 50, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px ${theme.spacing.xl} 0;
`;

const HeroTitle = styled.h1`
  font-size: clamp(48px, 8vw, 64px);
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(18px, 4vw, 24px);
  color: ${theme.colors.white};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const HeroButton = styled(Link)`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.medium};
  font-size: clamp(16px, 3vw, 20px);
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const ProductSection = styled.section`
  padding: ${theme.spacing.xl} 0;
  background-color: ${theme.colors.white};
`;

const ProductTitle = styled.h2`
  font-size: 36px;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const ProductDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  color: ${theme.colors.gray.dark};
  font-size: 18px;
  line-height: 1.6;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing.xl} 0;
  padding: 0 ${theme.spacing.lg};
`;

const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.lg};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: ${theme.colors.white};
`;

const ProductName = styled.h3`
  font-size: 24px;
  margin-bottom: ${theme.spacing.sm};
`;

const ProductDetails = styled.p`
  font-size: 16px;
  opacity: 0.9;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing.xl} 0;
  padding: 0 ${theme.spacing.lg};
`;

const FeatureCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.gray.dark};
  }
`;

const Home: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Authentic Italian Pizza',
      image: pizzaImage,
      description: 'Special 4-day fermented dough, fresh ingredients, and Italian-style cooking',
    },
    {
      id: 2,
      name: 'Gourmet Burger',
      image: burgerImage,
      description: 'Handcrafted patty with special sauce and fresh vegetables',
    },
    {
      id: 3,
      name: 'Handmade Pasta',
      image: pastaImage,
      description: 'Fresh daily-made pasta with special Italian sauces',
    },
  ];

  return (
    <>
      <HeroBackground>
        <BackgroundGif />
        <HeroOverlay>
          <HeroTitle>Cafe Eataly</HeroTitle>
          <HeroSubtitle>
            Experience a unique culinary journey with the exquisite flavors of Italian cuisine,
            handmade pasta, and our special recipes.
          </HeroSubtitle>
          <HeroButton to="/menu">
            EXPLORE MENU
          </HeroButton>
        </HeroOverlay>
      </HeroBackground>

      <ProductSection>
        <ProductTitle>Carefully Crafted Flavors</ProductTitle>
        <ProductDescription>
          4 days. 4 ingredients. Perfect taste. Each of our products is prepared with carefully selected 
          ingredients and traditional recipes. Our pizza dough is fermented for 4 days and 
          baked in special ovens at 650 degrees.
        </ProductDescription>
        <ProductSlider />
      </ProductSection>

      <FeaturesGrid>
        <FeatureCard>
          <h3>Special Recipes</h3>
          <p>
            Unique flavors prepared with special recipes from our Italian chefs.
          </p>
        </FeatureCard>
        <FeatureCard>
          <h3>Fast Delivery</h3>
          <p>
            Your hot pizza delivered to your door within 30 minutes.
          </p>
        </FeatureCard>
        <FeatureCard>
          <h3>Fresh Ingredients</h3>
          <p>
            Pizzas prepared daily with fresh and quality ingredients.
          </p>
        </FeatureCard>
      </FeaturesGrid>
    </>
  );
};

export default Home; 