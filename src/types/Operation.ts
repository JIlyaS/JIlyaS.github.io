export type Operation = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  price: number;
  category: Category;
  type: 'COST' | 'PROFIT';
};

export type Category = {
  id: string;
  title: string;
  type: 'FOOD' | 'SHOP';
};
