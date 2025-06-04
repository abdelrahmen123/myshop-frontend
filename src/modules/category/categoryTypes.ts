export interface CreateCategoryDto {
  name: string;
  image?: string;
}

export interface UpdateCategoryDto {
  name?: string;
  image?: string;
}

export interface CategoryItemParams {
  categoryname: string;
  isActive: boolean;
}
