import { useState } from 'react';
import { IFormInputValidation } from '../../../interfaces/FormData.ts';
import PasswordStrength from './PasswordStrength.tsx';

function InputPassword({ onChange, error }: IFormInputValidation) {
  const [passwordStrength, setPasswordStrength] = useState(0);

  const getPasswordStrength = (password: string): number => {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
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
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          onChange(e);
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
