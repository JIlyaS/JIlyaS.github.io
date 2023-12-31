import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, InputField } from '../../components';

import styles from './RegistrationForm.module.scss';
import { fetchSignUp } from '../../slices/auth';
import { useAppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Поле 'Email' должно быть валидным")
    .required("Поле 'Email' является обязательным полем"),
  password: yup
    .string()
    .min(8, "Поле 'Пароль' должно содержать минимум 8 символа")
    .max(16, "Поле 'Пароль' не должно быть больше 16 символов")
    .required("Поле 'Пароль' является обязательным полем"),
  commandId: yup.string(),
});

interface IRegistrationForm {
  email: string;
  password: string;
  commandId: string;
}

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<IRegistrationForm>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver<any>(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      commandId: '',
    },
  });

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    dispatch(fetchSignUp({ data, navigate }));
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="email"
            label="Email"
            dimension="small"
            extraError={error?.message}
            placeholder="Введите почту"
            required
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="password"
            label="Пароль"
            dimension="small"
            type="password"
            placeholder="Введите пароль"
            extraError={error?.message}
            required
            {...field}
          />
        )}
      />
      <Controller
        name="commandId"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="commandId"
            label="Идентификатор команды"
            dimension="small"
            extraError={error?.message}
            placeholder="Введите идентификатор команды"
            {...field}
          />
        )}
      />
      <Button className={styles.registrationForm_submit} type="submit">
        Регистрация
      </Button>
    </form>
  );
};
