import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { menuItems } from '../data/menuItems';
import type { MenuItem as MenuItemType } from '../data/menuItems';

const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 ${theme.spacing.lg};
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const MenuTitle = styled.h1`
  font-size: 42px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
`;

const MenuDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.gray.dark};
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-wrap: wrap;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  background-color: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.white : theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background-color: ${props => props.active ? theme.colors.primary : theme.colors.primary + '20'};
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
`;

const MenuItemComponent = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MenuItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MenuItemContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const MenuItemTitle = styled.h3`
  font-size: 20px;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const MenuItemDescription = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray.dark};
  margin-bottom: ${theme.spacing.md};
`;

const MenuItemPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;

const MenuItemBadges = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.small};
  font-size: 12px;
  font-weight: 500;
  background-color: ${theme.colors.primary}20;
  color: ${theme.colors.primary};
`;

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const categories = [
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'pastas', name: 'Pastas' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <MenuContainer>
      <MenuHeader>
        <MenuTitle>Our Menu</MenuTitle>
        <MenuDescription>
          Discover our carefully crafted menu featuring authentic Italian recipes and fresh ingredients
        </MenuDescription>
      </MenuHeader>

      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <MenuGrid>
        {filteredItems.map(item => (
          <MenuItemComponent key={item.id}>
            <MenuItemImage src={item.image} alt={item.name} />
            <MenuItemContent>
              <MenuItemTitle>{item.name}</MenuItemTitle>
              <MenuItemBadges>
                {item.isVegetarian && <Badge>Vegetarian</Badge>}
                {item.isSpicy && <Badge>Spicy</Badge>}
                {item.isGlutenFree && <Badge>Gluten Free</Badge>}
              </MenuItemBadges>
              <MenuItemDescription>{item.description}</MenuItemDescription>
              <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
            </MenuItemContent>
          </MenuItemComponent>
        ))}
      </MenuGrid>
    </MenuContainer>
  );
};

export default Menu; 