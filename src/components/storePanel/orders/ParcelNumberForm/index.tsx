import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { PARCEL_NUMBER_REGEX } from '@/constants/RegExp';
import { Modal } from '@/components/Modal';
import { OrnamentalTitle } from '@/components/OrnamentalTitle';
import { TextInput } from '@/components/UI/TextInput';
import { ButtonUI } from '@/components/UI/ButtonUI';
import s from './ParcelNumberForm.module.scss';

export const ParcelNumberForm = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal modalId='addParcelNumber' className={s.modal}>
      <OrnamentalTitle tag='h4' text='Номер ТТН' />
      <p className={s.modal_subtitle}>Введіть номер посилки</p>

      <FormProvider {...methods}>
        <form
          id='parcelNumber'
          className={s.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextInput
            type='text'
            id='parcel_number'
            placeholder='Номер ТТН'
            // value={value}
            regex={PARCEL_NUMBER_REGEX}
            required={true}
            errorMessage='Будь ласка, введіть номер ТТН'
          />
          <ButtonUI
            type='submit'
            label='Зберегти'
            disabled={!isValid}
            className={s.form_btn}
            onClick={methods.handleSubmit(
              onSubmit as SubmitHandler<FieldValues>,
            )}
          />
        </form>
      </FormProvider>
    </Modal>
  );
};
