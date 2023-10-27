/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useContext, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import cn from 'classnames';
import Select from 'react-select';

import { AuthContext } from '@src/providers/auth/AuthContext';
import { useAppDispatch, useAppSelector } from '@src/store';
import { fetchCategories } from '@src/slices/category';
import {
  fetchAddOperation,
  fetchDeleteOperation,
  fetchUpdateOperation,
} from '@src/slices/operation';

import { Button, Checkbox, InputField } from '../../components';
import ProfitIcon from '../../shared/assets/icons/profit-icon.svg';
import CostIcon from '../../shared/assets/icons/cost-icon.svg';
import DeleteIcon from '../../shared/assets/icons/delete-icon.svg';

import styles from './OperationForm.module.scss';

const schema = yup.object({
  type: yup.string().required("Поле 'Тип' является обязательным полем"),
  name: yup
    .string()
    .max(100, "Поле 'Заголовок' должно содержать не более 100 символов")
    .required("Поле 'Заголовок' является обязательным полем"),
  desc: yup.string().max(256, "Поле 'Описание' должно содержать не более 256 символов"),
  amount: yup.string().required("Поле 'Цена' является обязательным полем"),
  categoryId: yup.string().required("Поле 'Тип операции' является обязательным полем"),
});

interface IOperationForm {
  id?: string;
  type?: string;
  name?: string;
  desc?: string;
  amount?: string;
  categoryId?: string;
}

interface Props {
  operation: any;
  isOpen: boolean;
  onClose: () => void;
}

export const OperationForm: React.FC<Props> = ({ operation, isOpen, onClose }) => {
  const [defaultValues, setDefaultValue] = useState({
    id: "",
    type: "",
    name: "",
    desc: "",
    amount: "",
    categoryId: "",
  });

  const isLoggedIn = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const editOperation = !!operation;

  const { control, setValue, clearErrors, handleSubmit } = useForm<IOperationForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues,
  });

  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (operation) {
      setDefaultValue({
        id: operation.id,
        type: operation.type,
        name: operation.name,
        desc: operation.desc,
        amount: operation.amount,
        categoryId: operation.category.id,
      });
    } else {
      setDefaultValue({
        id: null,
        type: "",
        name: "",
        desc: "",
        amount: "",
        categoryId: "",
      });
    }
  }, [operation]);

  useEffect(() => {
    if (!isOpen) {
      setValue("id", null);
      setValue("type", "");
      setValue("name", "");
      setValue("desc", "");
      setValue("amount", "");
      setValue("categoryId", "");

      clearErrors();
    } else {
      setValue("id", defaultValues.id);
      setValue("type", defaultValues.type);
      setValue("name", defaultValues.name);
      setValue("desc", defaultValues.desc);
      setValue("amount", defaultValues.amount);
      setValue("categoryId", defaultValues.categoryId);
    }
  }, [defaultValues, operation, isOpen]);

  const handleDeleteOperationClick = (id: string | null) => {
    dispatch(fetchDeleteOperation(id));
    onClose();
  }


  const handleOperationSubmit: SubmitHandler<IOperationForm> = (data) => {
    const updatedData = {
      type: data.type,
      name: data.name,
      desc: data.desc,
      amount: data.amount,
      categoryId: data.categoryId,
      date: new Date().toISOString()
    }
    editOperation ?
      dispatch(fetchUpdateOperation({ ...updatedData, id: data.id })) :
      dispatch(fetchAddOperation(updatedData));
    onClose();
  };

  return (
    <form className={styles.operationForm} onSubmit={handleSubmit(handleOperationSubmit)}>
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
                    id="profit"
                    name="type"
                    value="Profit"
                    isIcon
                    checked={field.value === "Profit"}
                    label={
                      <div className={cn(styles.icon, styles.icon__profit)}>
                        <ProfitIcon />
                      </div>
                    }
                  />
                  <Checkbox
                    id="cost"
                    name="type"
                    value="Cost"
                    checked={field.value === "Cost"}
                    isIcon
                    label={
                      <div className={cn(styles.icon, styles.icon__cost)}>
                        <CostIcon />
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
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                id="name"
                label="Название"
                dimension="small"
                extraError={error?.message}
                placeholder="Введите название операции"
                required
                {...field}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <InputField
                id="amount"
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
          name="desc"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="desc"
              label="Описание"
              dimension="small"
              placeholder="Введите описание"
              extraError={error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="categoryId"
          control={control}
          render={({ field, fieldState: { error } }) => {
            const categoryList = categories.map((category) => (
              { value: category.id, label: category.name }
            ))
            const currentOption = categoryList.find((item) => item.value === field.value);
            return (
              <div className={styles.select}>
                <label className={styles.select_label}>
                  <span className={styles.select_labelText}>
                    Тип операции&nbsp;
                    <span className={styles.select_labelRequired}>*</span>
                  </span>
                  <Select
                    {...field}
                    options={categoryList}
                    placeholder="Выберите тип операции"
                    value={currentOption}
                    onChange={(data) => field.onChange(data.value)}
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
        {editOperation ? <Button
          className={styles.operationForm_delete}
          dimension='small'
          type="button"
          btnType="secondary"
          onClick={() => handleDeleteOperationClick(operation?.id)}
        >
          <DeleteIcon />
        </Button> : null}
        <Button
          className={styles.operationForm_cancel}
          dimension='small'
          type="button"
          onClick={onClose}
        >
          Отмена
        </Button>
        <Button
          className={styles.operationForm_submit}
          dimension='small'
          disabled={!isLoggedIn}
          type="submit"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
