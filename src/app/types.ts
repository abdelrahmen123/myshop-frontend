export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercent?: number;
  categoryId: string;
  imageCover: string;
  images?: string[];
  quantity: number;
  rating: number | null;
  ratingAverage: number | null;
  createdAt: string;
  updatedAt: string;
  reviews: Review[];
};

export type Category = {
  id: string;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Review = {
  id: string;
  text: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
};
