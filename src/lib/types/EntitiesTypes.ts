import { OrderStatus } from "@/lib/enums/orderEnums";
import { Roles } from "@/lib/enums/rolesEnums";

interface Entity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface User extends Entity {
  name: string;
  email: string;
  password: string;
  role: Roles;
  image?: string;
  phone?: string;
  address?: string;
  cartId?: Cart;
  reviews: Review[];
  orders: Order[];
}

interface Cart extends Entity {
  userId: string;
  user: User;
  cartItems: CartItem[];
}

interface CartItem extends Entity {
  quantity: number;
  productId: string;
  product: Product;
  cartId: string;
  cart: Cart;
}

interface Category extends Entity {
  name: string;
  image?: string;
  products: Product[];
}

interface Product extends Entity {
  name: string;
  description?: string;
  price: number;
  discountPercent?: number;
  quantity: number;
  sold: number;
  image: string;
  images: string[];
  ratingAverage?: number;
  rating?: number;
  categoryId: string;
  category: Category;
  cartItem?: CartItem;
  orderItem?: OrderItem;
  reviews: Review[];
}

interface Review extends Entity {
  text: string;
  userId: string;
  user: User;
  productId: string;
  product: Product;
}

interface SupplierRequest extends Entity {}

interface Order extends Entity {
  userId: string;
  user: User;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
}

interface OrderItem extends Entity {
  orderId: string;
  order: Order;
  productId: string;
  product: Product;
  quantity: number;
}

export type {
  User,
  Cart,
  CartItem,
  Category,
  Product,
  Review,
  SupplierRequest,
  Order,
  OrderItem,
};
