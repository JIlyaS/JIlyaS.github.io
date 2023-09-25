import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';

import { Button, Checkbox, InputField } from '../../components';
import IncomeIcon from '../../shared/assets/icons/income-icon.svg';
import ExpenseIcon from '../../shared/assets/icons/expense-icon.svg';

import styles from './OperationForm.module.scss';

const schema = yup.object({
  priceType: yup.string().required("Поле 'Тип' является обязательным полем"),
  title: yup
    .string()
    .max(100, "Поле 'Заголовок' должно содержать не более 100 символов")
    .required("Поле 'Логин' является обязательным полем"),
  description: yup.string().max(256, "Поле 'Описание' должно содержать не более 256 символов"),
  price: yup.string().required("Поле 'Цена' является обязательным полем"),
  operationType: yup.string().required("Поле 'Тип операции' является обязательным полем"),
});

interface IOperationForm {
  priceType?: 'income' | 'expense';
  title?: string;
  description?: string;
  price?: string;
  operationType?: string;
}

interface Props {
  onClose: () => void;
}

const options: any = [
  { value: 'food', label: 'Еда' },
  { value: 'salary', label: 'Зарплата' },
  { value: 'product', label: 'Продукты' },
  { value: 'other', label: 'Прочее' },
];

export const OperationForm: React.FC<Props> = ({ onClose }) => {
  const { control, handleSubmit } = useForm<IOperationForm>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IOperationForm> = (data) => console.log(data);

  return (
    <form className={styles.operationForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="priceType"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <label {...field}>
            <Checkbox id="income" name="priceType" value="income" label={<IncomeIcon />} />
            <Checkbox id="expense" name="priceType" value="expense" label={<ExpenseIcon />} />
          </label>
        )}
      />
      <div className={styles.operationForm_group}>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="title"
              label="Заголовок"
              dimension="small"
              extraError={error?.message}
              placeholder="Введите заголовок"
              required
              {...field}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="price"
              label="Цена"
              dimension="small"
              extraError={error?.message}
              placeholder="Введите цену"
              required
              {...field}
            />
          )}
        />
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="description"
            label="Описание"
            dimension="small"
            placeholder="Введите описание"
            extraError={error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="operationType"
        control={control}
        render={({ field, fieldState: { error } }) => <Select options={options} {...field} />}
      />
      <div className={styles.operationForm_btnGroup}>
        <Button className={styles.operationForm_cancel} type="button" onClick={onClose}>
          Отмена
        </Button>
        <Button className={styles.operationForm_submit} type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
