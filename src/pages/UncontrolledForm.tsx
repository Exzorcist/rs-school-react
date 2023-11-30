import InputName from '../components/Form/Uncontrolled/InputName.tsx';
import InputAge from '../components/Form/Uncontrolled/InputAge.tsx';
import InputEmail from '../components/Form/Uncontrolled/InputEmail.tsx';
import InputPassword from '../components/Form/Uncontrolled/InputPassword.tsx';
import InputPasswordConfirm from '../components/Form/Uncontrolled/InputPasswordConfirm.tsx';
import InputMan from '../components/Form/Uncontrolled/Gender/InputMan.tsx';
import InputWoman from '../components/Form/Uncontrolled/Gender/InputWoman.tsx';
import InputTerms from '../components/Form/Uncontrolled/InputTerms.tsx';
import SelectCountry from '../components/Form/Uncontrolled/SelectCountry.tsx';
import SelectImage from '../components/Form/Uncontrolled/SelectImage.tsx';

function UncontrolledForm() {
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

export default UncontrolledForm;
