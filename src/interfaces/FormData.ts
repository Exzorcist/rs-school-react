export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  gender: string;
  terms: boolean;
  image64: string;
}

export interface IFormInputValidation {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
