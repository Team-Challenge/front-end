/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.jpg';
declare module '*.png';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//auth types
export interface UserAuthProps {
  toggleForm: () => void;
}

export interface LoginFormProps {
  isForgotPassword: () => void;
  isSuccessLogin: () => void;
}

export interface RegistrationFormProps {
  isSuccessRegistration: () => void;
}

export interface PasswordRecoveryFormProps {
  isForgotPassword: () => void;
}

export interface IUserAuth {
  full_name?: string;
  email: string;
  checkbox?: boolean;
  password: string;
  passwordRepeat?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: SignUpEmailType;
}

//UI types
export interface OrnamentalTitleProps {
  tag: keyof JSX.IntrinsicElements;
  text: string;
}

export interface ButtonUIProps {
  label: string;
  variant?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

export interface ModalProps {
  children: React.ReactNode;
  modalId: string;
}

export interface ProductItemProps {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  link?: string; // for btn
}

export interface TextInputProps {
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  isLogin?: boolean;
  isLoginError?: boolean;
  onClick?: () => void;
  regex?: RegExp;
  errorMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  className?: string;
}

export interface PasswordInputProps {
  id: string;
  placeholder: string;
  required: boolean;
  isLogin?: boolean;
  isLoginError?: boolean;
  validate?: any;
  onClick?: () => void;
  isRepeatPassword?: boolean;
  className?: string;
}

//user info types
export interface UserInfo {
  email: string;
  full_name: string;
  phone_number: string | null;
  profile_picture: null;
}

export interface SettingsFromData {
  current_password?: string;
  new_password?: string;
  new_password_repeat?: string;
  email?: string;
  phoneNumber?: string;
}

export interface ChangeFullNameFormData {
  full_name: string;
}

export interface UserDropdownMenuProps {
  handleOpenModal: (arg0: boolean) => void;
  setDropdownOpen: (arg0: boolean) => void;
}