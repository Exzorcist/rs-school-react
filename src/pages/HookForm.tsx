import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormList } from '../redux/reducers/FormHookSlice.tsx';
import { IFormData } from '../interfaces/FormData.ts';
import HockFormSchema from '../utils/schemas/HockFormSchema.tsx';

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
import SubmitButton from '../components/Form/Hook/SubmitButton.tsx';

function HookForm() {
  const formRef = useRef(null);
  const [isFormValid, setFormValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<IFormData>({
    mode: 'onChange',
    resolver: yupResolver<IFormData>(HockFormSchema), // Can't solve this error, but app work
  });

  function onSubmit(data: IFormData) {
    dispatch(setFormList(data));
    navigate('/', { replace: true });
  }

  useEffect(() => {
    setFormValid(isValid);
  }, [isValid]);

  return (
    <div className="mt-24 max-w-xl mx-auto">
      <form className="w-full grid gap-8" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center gap-8">
          <div className="flex justify-center">
            <InputMan register={register} errors={errors} />
            <InputWoman register={register} errors={errors} />
          </div>

          <SelectImage register={register} errors={errors} setValue={setValue} formRef={formRef} />
        </div>

        <div className="grid gap-8 grid-cols-[2fr_1fr]">
          <InputName register={register} errors={errors} />
          <InputAge register={register} errors={errors} />
        </div>

        <div className="grid gap-8 grid-cols-2">
          <InputEmail register={register} errors={errors} />
          <InputPassword register={register} errors={errors} />
        </div>

        <div className="grid gap-8 grid-cols-[1fr_2fr]">
          <InputPasswordConfirm register={register} errors={errors} />
          <SelectCountry
            register={register}
            errors={errors}
            setValue={setValue}
            formRef={formRef}
          />
        </div>

        <InputTerms register={register} errors={errors} />
        <SubmitButton isFormValid={isFormValid} />
      </form>
    </div>
  );
}

export default HookForm;
