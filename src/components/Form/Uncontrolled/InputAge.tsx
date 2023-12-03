import { IFormInputValidation } from '../../../interfaces/FormData.ts';

function InputAge({ onChange, error }: IFormInputValidation) {
  return (
    <div className="relative">
      <input
        className={`w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                    rounded-lg outline-0 focus:border-blue-300 ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
        name="age"
        type="number"
        placeholder="Age"
        onChange={onChange}
      />

      {error && (
        <p className="absolute -top-6 right-1.5 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputAge;
