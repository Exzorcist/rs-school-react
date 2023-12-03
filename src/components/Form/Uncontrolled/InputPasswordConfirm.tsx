import { useState } from 'react';
import { IFormInputValidation } from '../../../interfaces/FormData.ts';

function InputPasswordConfirm({ onChange, error }: IFormInputValidation) {
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <div className="relative">
      <input
        className={`w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                    rounded-lg outline-0 focus:border-blue-300 ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          onChange(e);
        }}
      />

      {error && (
        <p className="absolute top-12 left-2 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputPasswordConfirm;
