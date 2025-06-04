export interface PaginationItemComponentParams {
  link: string;
  number: number;
  isActive: boolean;
  goToPage: (page: number) => void;
}
