import { StoreSettings } from '@/components/storePanel/StoreSettings';
import s from './StoreManagement.module.scss';

export const StoreManagement = () => {
  return (
    <section className={s.settings}>
      <h4 className={s.settings_title}>Налаштування магазину</h4>
      <StoreSettings />
    </section>
  );
};
