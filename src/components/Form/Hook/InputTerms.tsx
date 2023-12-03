import { IHookInputProps } from '../../../interfaces/FormData.ts';

function InputTerms({ register, errors }: IHookInputProps) {
  const error = errors.terms?.message;

  return (
    <div className="relative">
      <input
        className="fixed opacity-0 w-0 h-0 [&+label]:after:checked:opacity-100"
        {...register('terms')}
        type="checkbox"
        id="accept-terms"
      />
      <label
        className={`relative pl-10 before:absolute before:-top-0.5 before:left-0 before:w-6 before:h-6 
                    before:border before:border-blue-400 cursor-pointer before:rounded-md after:absolute
                    after:w-3.5 after:h-3.5 after:bg-blue-400 after:top-[3px] after:left-[5px] after:rounded after:opacity-0
                    ${error ? 'before:border-red-500 underline underline-offset-2' : ''}`}
        htmlFor="accept-terms"
      >
        Accept the Terms & Conditions
      </label>

      {error && (
        <p className="absolute top-9 left-10 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default InputTerms;
