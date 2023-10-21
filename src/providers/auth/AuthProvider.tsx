import { useAppSelector } from '@src/store';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const inLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return <AuthContext.Provider value={inLoggedIn}>{children}</AuthContext.Provider>;
};
