/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import cn from 'classnames';
import Select from 'react-select';

import { Button, Checkbox, InputField } from '../../components';
import IncomeIcon from '../../shared/assets/icons/income-icon.svg';
import ExpenseIcon from '../../shared/assets/icons/expense-icon.svg';

import styles from './OperationForm.module.scss';
import { useEffect, useState } from 'react';

const schema = yup.object({
  type: yup.string().required("Поле 'Тип' является обязательным полем"),
  title: yup
    .string()
    .max(100, "Поле 'Заголовок' должно содержать не более 100 символов")
    .required("Поле 'Заголовок' является обязательным полем"),
  description: yup.string().max(256, "Поле 'Описание' должно содержать не более 256 символов"),
  price: yup.string().required("Поле 'Цена' является обязательным полем"),
  operationType: yup.mixed().nullable().required("Поле 'Тип операции' является обязательным полем"),
  //  yup
  //   .object()
  //   .shape({
  //     value: yup.string(),
  //     label: yup.string(),
  //   })
  //   .required("Поле 'Тип операции' является обязательным полем"),
});

interface IOperationForm {
  id?: string;
  type?: string; // 'income' | 'expense'
  title?: string;
  description?: string;
  price?: string;
  operationType?: any;
  // operationType?: { value: string; label: string };
}

interface Props {
  operation: any;
  isOpen: boolean;
  onClose: () => void;
}

const options: any = [
  { value: 'food', label: 'Еда' },
  { value: 'salary', label: 'Зарплата' },
  { value: 'product', label: 'Продукты' },
  { value: 'shop', label: 'Одежда' },
  { value: 'other', label: 'Прочее' },
];

export const OperationForm: React.FC<Props> = ({ operation, isOpen, onClose }) => {
  const [defaultValues, setDefaultValue] = useState({
    id: "",
    type: "",
    title: "",
    description: "",
    price: "",
    operationType: "",
  });

  const { control, setValue, clearErrors, reset, handleSubmit } = useForm<IOperationForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues,
  });

  useEffect(() => {
    if (operation) {
      console.log("operation.category.type", operation.category.type);
      setDefaultValue({
        id: operation.id,
        type: operation.type,
        title: operation.title,
        description: operation.description,
        price: operation.price,
        operationType: operation.category.type,
      });
    } else {
      setDefaultValue({
        id: null,
        type: "",
        title: "",
        description: "",
        price: "",
        operationType: "",
      });
    }
  }, [operation]);

  useEffect(() => {
    if (!isOpen) {
      setValue("id", null);
      setValue("type", "");
      setValue("title", "");
      setValue("description", "");
      setValue("price", "");
      setValue("operationType", "");

      clearErrors();
    } else {
      setValue("id", defaultValues.id);
      setValue("type", defaultValues.type);
      setValue("title", defaultValues.title);
      setValue("description", defaultValues.description);
      setValue("price", defaultValues.price);
      setValue("operationType", defaultValues.operationType);
    }
  }, [defaultValues, operation, isOpen]);


  const onSubmit: SubmitHandler<IOperationForm> = (data) => {
    console.log(data);
    reset({
      type: '',
      title: '',
      description: '',
      price: '',
      operationType: '',
    });
  };

  return (
    <form className={styles.operationForm} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={styles.checkboxGroup}>
                <div className={styles.checkboxGroup_label}>
                  <span>Тип</span>&nbsp;
                  <span className={styles.checkboxGroup_label_required}>*</span>
                </div>
                <label {...field} className={styles.checkboxGroup_wrap}>
                  <Checkbox
                    id="income"
                    name="type"
                    value="income"
                    isIcon
                    checked={field.value === "income"}
                    label={
                      <div className={cn(styles.icon, styles.icon__income)}>
                        <IncomeIcon />
                      </div>
                    }
                  />
                  <Checkbox
                    id="expense"
                    name="type"
                    value="expense"
                    checked={field.value === "expense"}
                    isIcon
                    label={
                      <div className={cn(styles.icon, styles.icon__expense)}>
                        <ExpenseIcon />
                      </div>
                    }
                  />
                </label>
                {error && <div className={styles.icon_error}>{error?.message}</div>}
              </div>
            )
          }}
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
          render={({ field, fieldState: { error } }) => {
            const currentOption = options.find((item: any) => item.value === field.value);
            return (
              <div className={styles.select}>
                <label className={styles.select_label}>
                  <span className={styles.select_labelText}>
                    Тип операции&nbsp;
                    <span className={styles.select_labelRequired}>*</span>
                  </span>
                  <Select
                    {...field}
                    options={options}
                    placeholder="Выберите тип операции"
                    value={currentOption}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: '25px',
                        height: '46px',
                        backgroundColor: '#eff6ff',
                        paddingLeft: '10px',
                        border: '1px solid transparent',
                        ...(error?.message
                          ? {
                            backgroundColor: '#fee2e2',
                            borderColor: '#f87171 !important',
                          }
                          : {}),
                      }),
                    }}
                  />
                </label>
                {error && <div className={styles.select_error}>{error?.message}</div>}
              </div>
            )
          }}
        />
      </div>
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
