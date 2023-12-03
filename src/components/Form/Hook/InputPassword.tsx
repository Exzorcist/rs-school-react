import { useState } from 'react';
import { IHookInputProps } from '../../../interfaces/FormData.ts';
import PasswordStrength from '../PasswordStrength.tsx';

function InputPassword({ register, errors }: IHookInputProps) {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const error = errors.password?.message;

  const getPasswordStrength = (password: string): number => {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*]/.test(password)) strength += 1;

    strength = Math.min(strength, 4);
    return strength;
  };

  return (
    <div className="relative">
      <input
        className={`w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                    rounded-lg outline-0 focus:border-blue-300 ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
        {...register('password')}
        placeholder="Password"
        type="password"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPasswordStrength(getPasswordStrength(e.target.value));
        }}
      />

      <PasswordStrength strength={passwordStrength} />

      {error && (
        <p className="absolute top-12 right-4 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputPassword;
