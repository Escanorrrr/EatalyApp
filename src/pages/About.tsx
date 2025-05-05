import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import groupPhoto from '../assets/images/group_foto.jpg';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 0 ${theme.spacing.lg};
`;

const MainTitle = styled.h1`
  font-size: clamp(32px, 5vw, 42px);
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: clamp(26px, 4vw, 32px);
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${theme.colors.gray.dark};
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  text-align: center;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing.xxl} 0;
`;

const FactCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FactNumber = styled.h3`
  font-size: 48px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const FactTitle = styled.h4`
  font-size: 20px;
  color: ${theme.colors.gray.dark};
  margin-bottom: ${theme.spacing.sm};
`;

const FactDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray.medium};
  line-height: 1.6;
`;

const TeamSection = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
  background-color: ${theme.colors.gray.light};
  border-radius: ${theme.borderRadius.large};
  margin: ${theme.spacing.xxl} 0;
`;

const FamilySection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.62),
    rgba(255, 255, 255, 0.62)
  ),
  url(${groupPhoto}) center/cover no-repeat;
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1200px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FamilyTitle = styled.h2`
  color: #4a6741;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
`;

const FamilyText = styled.p`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <MainTitle>Who We Are</MainTitle>
      
      <Section>
        <SectionTitle>Not All Italian Food Is Created Equal</SectionTitle>
        <SectionText>
          We created Cafe Eataly to celebrate the art of authentic Italian cuisine. Our commitment 
          to tradition, quality ingredients, and masterful preparation sets us apart. Every dish 
          is crafted with care, using time-honored techniques and the freshest ingredients, 
          served in a welcoming atmosphere where all are welcome.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>The Facts</SectionTitle>
        <FactsGrid>
          <FactCard>
            <FactNumber>4</FactNumber>
            <FactTitle>Days of Fermentation</FactTitle>
            <FactDescription>
              The perfect time needed for our pizza dough to develop its unique flavor and texture.
            </FactDescription>
          </FactCard>

          <FactCard>
            <FactNumber>100%</FactNumber>
            <FactTitle>Fresh Ingredients</FactTitle>
            <FactDescription>
              We use only the finest and freshest ingredients, sourced from trusted suppliers.
            </FactDescription>
          </FactCard>

          <FactCard>
            <FactNumber>650°</FactNumber>
            <FactTitle>Perfect Temperature</FactTitle>
            <FactDescription>
              Our wood-fired oven reaches the ideal temperature for the perfect crispy crust.
            </FactDescription>
          </FactCard>
        </FactsGrid>
      </Section>

      <FamilySection>
        <FamilyTitle>Our Family</FamilyTitle>
        <FamilyText>
          At Cafe Eataly, we put people first. We believe in creating a supportive and collaborative
          environment that nurtures both career growth and personal development. Our team is our family,
          and we're committed to fostering a positive workplace culture where everyone can thrive.
        </FamilyText>
        <FamilyText>
          We're dedicated to preserving and sharing authentic Italian culinary traditions while innovating to
          meet modern tastes. Our chefs are passionate about their craft and committed to delivering an
          exceptional dining experience to every guest.
        </FamilyText>
      </FamilySection>
    </AboutContainer>
  );
};

export default About; 