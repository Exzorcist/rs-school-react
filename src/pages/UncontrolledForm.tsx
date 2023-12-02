import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormList } from '../redux/reducers/FormUncontrolledSlice.tsx';

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
import SubmitButton from '../components/Form/Uncontrolled/SubmitButton.tsx';

function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value: Record<string, string> = {};

    formData.forEach((val, key) => {
      value[key] = val.toString();
    });

    dispatch(setFormList(value));
    navigate('/', { replace: true });
  };

  return (
    <div className="mt-24 max-w-xl mx-auto">
      <form className="w-full grid gap-5" onSubmit={formSubmit}>
        <div className="flex justify-between items-center gap-5">
          <div className="flex justify-center">
            <InputMan />
            <InputWoman />
          </div>

          <SelectImage />
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
        <SubmitButton />
      </form>
    </div>
  );
}

export default UncontrolledForm;
