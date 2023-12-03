import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { setFormList } from '../redux/reducers/FormUncontrolledSlice.tsx';
import UncontrolledFormSchema from '../utils/schemas/UncontrolledFormSchema.tsx';

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
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});

  const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value: Record<string, string> = {};

    formData.forEach((val, key) => {
      value[key] = val.toString();
    });

    try {
      await UncontrolledFormSchema.validate(value);

      dispatch(setFormList(value));
      navigate('/', { replace: true });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors: Record<string, string | undefined> = {};

        if (error.inner.length === 0) {
          errors[error.path as string] = error.message;
        } else {
          error.inner.forEach((e) => {
            const inputName = e.path as string;
            errors[inputName] = e.message;
          });
        }

        setValidationErrors(errors);
      }
    }
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
  };

  return (
    <div className="mt-24 max-w-xl mx-auto">
      <form className="w-full grid gap-8" onSubmit={formSubmit}>
        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-center">
            <InputMan onChange={inputChange} error={validationErrors.gender} />
            <InputWoman onChange={inputChange} error={validationErrors.gender} />
          </div>

          <SelectImage onChange={inputChange} error={validationErrors.image64} />
        </div>

        <div className="grid gap-8 grid-cols-[2fr_1fr]">
          <InputName onChange={inputChange} error={validationErrors.name} />
          <InputAge onChange={inputChange} error={validationErrors.age} />
        </div>

        <div className="grid gap-8 grid-cols-2">
          <InputEmail onChange={inputChange} error={validationErrors.email} />
          <InputPassword onChange={inputChange} error={validationErrors.password} />
        </div>

        <div className="grid gap-8 grid-cols-[1fr_2fr]">
          <InputPasswordConfirm onChange={inputChange} error={validationErrors.confirmPassword} />
          <SelectCountry onChange={inputChange} error={validationErrors.country} />
        </div>

        <InputTerms onChange={inputChange} error={validationErrors.terms} />
        <SubmitButton />
      </form>
    </div>
  );
}

export default UncontrolledForm;
