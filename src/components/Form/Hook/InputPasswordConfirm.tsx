import { useState } from 'react';
import { IHookInputProps } from '../../../interfaces/FormData.ts';

function InputPasswordConfirm({ register, errors }: IHookInputProps) {
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const error = errors.confirmPassword?.message;

  return (
    <div className="relative">
      <input
        className={`w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                    rounded-lg outline-0 focus:border-blue-300 ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
        {...register('confirmPassword')}
        placeholder="Confirm password"
        type="password"
        value={confirmPassword}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setConfirmPassword(e.target.value);
        }}
      />

      {error && (
        <p className="absolute top-12 left-2 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputPasswordConfirm;
