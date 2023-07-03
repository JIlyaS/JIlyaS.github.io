export interface CardBriefProps {
  summ: number; // Сумма операции
  category: string; // Название категории
  name: string;
  description: string; // Описание операции
  icon: React.ReactNode; // Иконка операции
  income: boolean;
  date?: Date;
  shortDescription?: string;
}

export interface FullCardProps extends CardBriefProps {
  date: Date; // Дата операции
  onEditClick: () => void; // Обработчик нажатия кнопки редактирования
}
