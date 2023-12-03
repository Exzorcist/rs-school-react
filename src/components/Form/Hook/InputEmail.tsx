import { IHookInputProps } from '../../../interfaces/FormData.ts';

function InputEmail({ register, errors }: IHookInputProps) {
  const error = errors.email?.message;

  return (
    <div className="relative">
      <input
        className={`w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                    rounded-lg outline-0 focus:border-blue-300 ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
        {...register('email')}
        placeholder="Email"
      />

      {error && <p className="absolute top-12 left-4 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default InputEmail;
