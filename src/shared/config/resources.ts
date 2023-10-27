// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separaimport { LoginForm } from './../../modules/LoginForm/LoginForm';
export const resources = {
  en: {
    translation: {
      header: {
        language: 'English', // t`header.language`
        route: {
          main: 'Main page',
          profile: 'Profile',
        },
        btnGroup: {
          login: 'Login',
          logout: 'Logout',
        },
      },
      content: {
        operation: {
          title: 'Operations',
          btnGroup: {
            create: 'Create',
          },
        },
        profile: {
          title: 'Profile',
          btnGroup: {
            change: 'Change',
            toMain: 'To main page',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      header: {
        language: 'Русский', // t`header.language`
        route: {
          main: 'Главная страница',
          profile: 'Профиль',
        },
        btnGroup: {
          login: 'Войти',
          logout: 'Выйти',
        },
      },
      content: {
        operation: {
          title: 'Операции',
          btnGroup: {
            create: 'Создать',
          },
        },
        profile: {
          title: 'Профиль',
          btnGroup: {
            change: 'Изменить',
            toMain: 'На главную',
          },
        },
      },
    },
  },
};
