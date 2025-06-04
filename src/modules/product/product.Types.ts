import { SortTypeQuery } from "../../lib/enums/productEnums";
import { Product } from "../../lib/types/EntitiesTypes";

export type FiltrationObject = {
  category?: {
    name?: {
      equals: string;
      mode?: "insensitive" | "default";
    };
  };
  price?: {
    gte?: number;
    lte?: number;
  };
};

export type GetAllProducts = {
  status: number;
  message: string;
  isEmpty: boolean;
  length: number;
  data: Product[];
};

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  discountPercent?: number;
  quantity: number;
  image: string;
  images?: string[];
  categoryId: string;
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  discountPercent?: number;
  quantity?: number;
  image?: string;
  images?: string[];
  categoryId?: string;
}

export interface GetProductsDto {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  order?: SortTypeQuery;
  page?: number;
  limit?: number;
}

export interface ProductCardProps {
  product: Product;
  isBest?: boolean;
}
