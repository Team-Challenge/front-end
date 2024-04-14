import { useAppSelector } from '@/hooks/reduxHook';
import { TextArea } from '@/components/UI';
import s from './StoreSettings.module.scss';

export const StoreDescription = () => {
  const { description } = useAppSelector((state) => state.storeProfile);

  return (
    <div className={s.form_wrap}>
      <p className={s.form_subtitle}>
        Опис (розкажіть більше про себе, ваші цінності, що вас надихає)
      </p>
      <TextArea
        name='description'
        id='description'
        placeholder='Додайте свій опис'
        maxLength={1000}
        minLength={1}
        defaultValue={description}
        required={Boolean(description)}
        editModeIcon={Boolean(description)}
        className={s.form_textarea}
      />
    </div>
  );
};
