export interface Product {
  id: number;
  name: string;
  price: number;
  dimensions: string;
  description: string;
  features: string[];
  imageSeed: number;
  image?: string;
  isSold?: boolean;
}