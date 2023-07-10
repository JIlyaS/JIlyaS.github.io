export interface CardProps {
  summ: number;
  category: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  income: boolean;
  date?: Date;
  shortDescription?: string;
}

export interface FullCardProps extends CardProps {
  date: Date;
  onEditClick: () => void;
}
