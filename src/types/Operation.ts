export type Operation = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  price: number;
  category: Category;
  type: 'income' | 'expense';
};

export type Category = {
  id: string;
  title: string;
  type: 'food' | 'shop' | 'product';
};
