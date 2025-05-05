// Image imports
import pastaMenuImage from '../assets/images/products/pastas/pasta_menu.png';
import pastaImage from '../assets/images/products/pastas/pasta.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export const menuItems: MenuItem[] = [
  // Pizzas
  {
    id: 'pizza-1',
    name: 'Margherita',
    description: 'Fresh tomatoes, mozzarella, basil, and extra virgin olive oil',
    price: 14.99,
    image: '@images/products/pizzas/margherita.jpg',
    category: 'pizzas',
    isVegetarian: true
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni',
    description: 'Classic pepperoni with mozzarella and our signature tomato sauce',
    price: 16.99,
    image: '@images/products/pizzas/pepperoni.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-3',
    name: 'Quattro Formaggi',
    description: 'Four cheese blend: mozzarella, gorgonzola, parmesan, and fontina',
    price: 17.99,
    image: '@images/products/pizzas/quattro-formaggi.jpg',
    category: 'pizzas',
    isVegetarian: true
  },

  // Pastas
  {
    id: 'pasta-1',
    name: 'Fettuccine Alfredo',
    description: 'Homemade fettuccine in a rich, creamy parmesan sauce',
    price: 15.99,
    image: pastaMenuImage,
    category: 'pastas',
    isVegetarian: true
  },
  {
    id: 'pasta-2',
    name: 'Spaghetti Carbonara',
    description: 'Classic carbonara with pancetta, egg, pecorino romano, and black pepper',
    price: 16.99,
    image: pastaMenuImage,
    category: 'pastas'
  },
  {
    id: 'pasta-3',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato sauce with garlic and red chili peppers',
    price: 14.99,
    image: pastaMenuImage,
    category: 'pastas',
    isSpicy: true,
    isVegetarian: true
  },
  {
    id: 'pasta-4',
    name: 'Rigatoni Bolognese',
    description: 'Traditional Italian meat sauce served with rigatoni pasta',
    price: 17.99,
    image: pastaMenuImage,
    category: 'pastas'
  },
  {
    id: 'pasta-5',
    name: 'Ravioli ai Funghi',
    description: 'Mushroom ravioli with truffle oil and parmesan cheese',
    price: 18.99,
    image: pastaMenuImage,
    category: 'pastas',
    isVegetarian: true
  },

  // Breakfast
  {
    id: 'breakfast-1',
    name: 'Italian Breakfast Plate',
    description: 'Prosciutto, fresh mozzarella, tomatoes, and crusty bread with olive oil',
    price: 13.99,
    image: '@images/products/breakfast/italian-breakfast.jpg',
    category: 'breakfast'
  },
  {
    id: 'breakfast-2',
    name: 'Avocado Toast',
    description: 'Sourdough bread with mashed avocado, cherry tomatoes, and poached eggs',
    price: 12.99,
    image: '@images/products/breakfast/avocado-toast.jpg',
    category: 'breakfast',
    isVegetarian: true
  },

  // Beverages
  {
    id: 'beverage-1',
    name: 'Italian Coffee',
    description: 'Traditional Italian espresso',
    price: 3.99,
    image: '@images/products/beverages/coffee.jpg',
    category: 'beverages'
  },
  {
    id: 'beverage-2',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 4.99,
    image: '@images/products/beverages/orange-juice.jpg',
    category: 'beverages'
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
    price: 7.99,
    image: '@images/products/desserts/tiramisu.jpg',
    category: 'desserts'
  },
  {
    id: 'dessert-2',
    name: 'Panna Cotta',
    description: 'Vanilla bean panna cotta with berry compote',
    price: 6.99,
    image: '@images/products/desserts/panna-cotta.jpg',
    category: 'desserts',
    isGlutenFree: true
  }
]; 