import { Icon } from '@iconify/react';
import { getStatusColor } from '@/utils/getStatusColor';

import s from './DeliveryStatus.module.scss';

export const DeliveryStatus = ({ status }: { status: string }) => {
  const statusColor = getStatusColor(status, s);

  return (
    <div className={s.status_mainWrapper}>
      <ul className={`${s.status} ${statusColor}`}>
        <li className={s.status_item}>
          <div className={s.status_wrap}>
            <div className={s.status_icon}>
              <Icon icon='solar:box-outline' />
            </div>
          </div>
        </li>
        <li className={s.status_item}>
          <div className={s.status_wrap}>
            <div className={s.status_icon}>
              <Icon icon='solar:delivery-outline' />
            </div>
          </div>
        </li>
        <li className={s.status_item}>
          <div className={s.status_wrap}>
            <div className={s.status_icon}>
              <Icon icon='solar:bag-check-linear' />
            </div>
          </div>
        </li>
      </ul>
      <ul className={`${s.status_text_wrapper} ${statusColor}`}>
        <li className={s.status_text_item}>
          <p className={s.status_text}>Виріб створюється та упаковується </p>
        </li>
        <li className={s.status_text_item}>
          <p className={`${s.status_text} ${s.status_text_short} `}>
            Вже прямує до вас
          </p>
        </li>
        <li className={s.status_text_item}>
          <p className={s.status_text}>Доставлено, носіть з насолодою! </p>
        </li>
      </ul>
    </div>
  );
};
