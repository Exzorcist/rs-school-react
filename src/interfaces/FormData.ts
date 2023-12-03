import { UseFormSetValue, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface IFormData {
  name: string;
  age: number;
  email: string;
  password?: string;
  confirmPassword?: string;
  country: string;
  gender: string;
  terms?: boolean;
  image64: IFileData | string;
}

export interface IFileData {
  type: string;
  size: number;
  base64: string;
}

export interface IFormInputValidation {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface IHookInputProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  setValue?: UseFormSetValue<IFormData>;
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
}
