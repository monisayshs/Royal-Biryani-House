
export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isSignature?: boolean;
}

export enum MenuCategory {
  BIRYANI = 'Biryani',
  STARTERS = 'Starters',
  CURRIES = 'Curries',
  TANDOORI = 'Tandoori & Grills',
  BREADS = 'Rice & Breads',
  BEVERAGES = 'Beverages'
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}
