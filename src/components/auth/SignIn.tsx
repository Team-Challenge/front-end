import { useState } from 'react';
import { UserAuthProps } from '@/types';
import { LoginForm } from './AuthForm/LoginForm';
import { OrnamentalTitle } from '@/components/OrnamentalTitle';
import { PasswordRecoveryForm } from './PasswordRecoveryForm';
import { SuccessMessage } from './SuccessMessage';

export const SignIn = ({ toggleForm }: UserAuthProps) => {
  const [isPasswordRecovery, setIsPasswordRecovery] = useState<boolean>(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);

  const isForgotPassword = () => {
    setIsPasswordRecovery(!isPasswordRecovery);
  };

  const isSuccessLogin = () => {
    setIsSuccessMessage(!isSuccessMessage);
  };

  return (
    <>
      {!isPasswordRecovery && !isSuccessMessage && (
        <>
          <OrnamentalTitle tag='h4' text='Вхід' />
          <LoginForm
            isForgotPassword={isForgotPassword}
            isSuccessLogin={isSuccessLogin}
          />
          <div className='account-promt'>
            <p>Ще немає облікового запису?</p>
            <button onClick={toggleForm}>Зареєструватися</button>
          </div>
        </>
      )}
      {isPasswordRecovery && (
        <PasswordRecoveryForm isForgotPassword={isForgotPassword} />
      )}
      {isSuccessMessage && <SuccessMessage />}
    </>
  );
};
