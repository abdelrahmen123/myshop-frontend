export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discount?: number;
  category: string;
  imageCover: string;
  images?: string[];
  quantity: number;
  sold: number;
  rating: {
    rate: number;
    count: number;
  };
};
