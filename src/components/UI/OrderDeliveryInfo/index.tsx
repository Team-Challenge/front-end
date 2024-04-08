import { Icon } from '@iconify/react';
import { OrderDeliveryInfoProps } from '@/types';
import s from './OrderDeliveryInfo.module.scss';

export const OrderDeliveryInfo = ({
  name = 'Отримувач',
  phone = 'Номер телефону',
  city = 'Місто',
  post = 'Поштове відділення',
  payment = false,
  icons = false,
}: OrderDeliveryInfoProps) => {
  return (
    <div
      className={`${s.delivery} ${payment ? s.delivery_payment_active : ''}`}
    >
      <div className={s.delivery_user}>
        {icons && <Icon icon='solar:user-circle-outline' />}
        <div className={s.delivery_block}>
          <p>Інформація про доставку</p>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{city}</p>
          <p>{post}</p>
        </div>
      </div>
      {payment && (
        <div className={s.delivery_payment}>
          {icons && <Icon icon='solar:wallet-outline' />}
          <div className={s.delivery_block}>
            <p>Спосіб оплати</p>
            <p>Накладений платіж</p>
          </div>
        </div>
      )}
    </div>
  );
};
