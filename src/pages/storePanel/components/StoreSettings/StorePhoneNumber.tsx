import { useAppSelector } from '@/hooks/reduxHook';
import { PhoneNumber } from '@/components/PhoneNumber';
import s from './StoreSettings.module.scss';

export const StorePhoneNumber = () => {
  const { phoneNumber } = useAppSelector((state) => state.storeProfile);

  return (
    <div className={s.form_wrap}>
      <p className={s.form_subtitle}>
        Номер телефону<span>*</span>
      </p>
      <PhoneNumber phoneNumber={phoneNumber} />
    </div>
  );
};
