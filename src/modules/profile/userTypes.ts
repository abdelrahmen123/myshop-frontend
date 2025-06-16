import { Roles } from "../../lib/enums/rolesEnums";
import { User } from "../../lib/types/EntitiesTypes";

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
}
