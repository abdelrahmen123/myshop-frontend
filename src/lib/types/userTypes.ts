import { Roles } from "../enums/rolesEnums";
import { User } from "./EntitiesTypes";

export type SafeUserType = Omit<User, "password">;

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: Roles;
  phone?: string;
  address?: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  password?: string;
  role?: Roles;
  phone?: string;
  address?: string;
  image?: string;
}
