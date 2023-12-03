import { IHookInputProps } from '../../../../interfaces/FormData.ts';

function InputMan({ register, errors }: IHookInputProps) {
  const error = errors.gender?.message;

  return (
    <div className="relative">
      <input
        className="[&+label]:checked:bg-blue-400 [&+label]:checked:text-white fixed opacity-0 w-0 h-0"
        type="radio"
        value="man"
        {...register('gender')}
        id="gender-man"
      />
      <label
        className={`border border-blue-400 py-1.5 px-7 w-28 inline-block text-center rounded-l-lg 
                 cursor-pointer transition-colors duration-300 
                 hover:bg-blue-400 hover:text-white hover:border-blue-300
                ${
                  error
                    ? 'border-red-500 text-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                    : ''
                }`}
        htmlFor="gender-man"
      >
        Man
      </label>

      {error && (
        <p className="absolute top-12 left-4 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputMan;
