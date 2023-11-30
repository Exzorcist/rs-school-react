import InputName from '../components/Form/Hook/InputName.tsx';
import InputAge from '../components/Form/Hook/InputAge.tsx';
import InputEmail from '../components/Form/Hook/InputEmail.tsx';
import InputPassword from '../components/Form/Hook/InputPassword.tsx';
import InputPasswordConfirm from '../components/Form/Hook/InputPasswordConfirm.tsx';
import InputMan from '../components/Form/Hook/Gender/InputMan.tsx';
import InputWoman from '../components/Form/Hook/Gender/InputWoman.tsx';
import InputTerms from '../components/Form/Hook/InputTerms.tsx';
import SelectCountry from '../components/Form/Hook/SelectCountry.tsx';
import SelectImage from '../components/Form/Hook/SelectImage.tsx';

function HookForm() {
  return (
    <div className="mt-16 max-w-xl mx-auto">
      <form className="w-full grid gap-5">
        <div className="flex justify-center my-5">
          <InputMan />
          <InputWoman />
        </div>

        <div className="grid gap-5 grid-cols-[2fr_1fr]">
          <InputName />
          <InputAge />
        </div>

        <div className="grid gap-5 grid-cols-2">
          <InputEmail />
          <InputPassword />
        </div>

        <div className="grid gap-5 grid-cols-[1fr_2fr]">
          <InputPasswordConfirm />
          <SelectCountry />
        </div>

        <InputTerms />
        <SelectImage />
      </form>
    </div>
  );
}

export default HookForm;
