export type Category = {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface ICategoryResponse {
  data: Category[];
}
