import { IFormInputValidation } from '../../../../interfaces/FormData.ts';

function InputWoman({ onChange, error }: IFormInputValidation) {
  return (
    <div className="relative">
      <input
        className="[&+label]:checked:bg-blue-400 [&+label]:checked:text-white fixed opacity-0 w-0 h-0"
        type="radio"
        value="woman"
        name="gender"
        id="gender-woman"
        onChange={onChange}
      />
      <label
        className={`border border-blue-400 border-l-0 py-1.5 px-7 w-28 inline-block text-center 
                 rounded-r-lg cursor-pointer transition-colors duration-300 
                 hover:bg-blue-400 hover:text-white hover:border-blue-300
                 ${
                   error
                     ? 'border-red-500 text-red-500 hover:bg-transparent hover:border-red-500 hover:text-red-500'
                     : ''
                 }`}
        htmlFor="gender-woman"
      >
        Woman
      </label>
    </div>
  );
}

export default InputWoman;
