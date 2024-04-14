import defaultStorePic from '@assets/default-store-pic.svg';
import { Icon } from '@iconify/react';
import { useAppSelector } from '@/hooks/reduxHook';
import { Tooltip } from '@/components/UI';
import { StoreContacts } from '@components/StoreContacts';
import { Rating } from './Rating';
import { HeaderDesc } from './HeaderDesc';
import s from './StoreHeader.module.scss';

export const StoreHeader = () => {
  const store = useAppSelector((state) => state.storePage.storeInfo);
  const {
    name,
    photo_shop: storePhoto,
    banner_shop: banner,
    phone_number: phoneNumber,
    link: instagramLink,
    description,
  } = store;

  return (
    <div className={s.header}>
      {banner && (
        <div className={s.banner}>
          <img src={banner} alt='banner' />
        </div>
      )}
      <div
        className={`${s.header_photo} ${
          description && description.length > 500 ? s.header_photo_center : ''
        }`}
      >
        <img src={storePhoto || defaultStorePic} alt='shopPhoto' />
      </div>
      <div className={s.header_details}>
        <div className={s.header_info}>
          <p className={s.header_name}>{name}</p>
          <div className={s.stats_wrapper}>
            <Rating rating={4.3} />
            <p className={s.stats}>
              4.3 <span>(15 відгуків)</span>
            </p>
            <Tooltip
              text='Рейтинг магазину - це середнє значення усіх оцінок за товари. Чим більше товарів з високими оцінками - тим вище рейтинг'
              className={s.tooltip}
              isBase
            >
              <Icon icon='solar:question-circle-outline' />
            </Tooltip>
          </div>
          {description && <HeaderDesc />}
        </div>
      </div>
      <div className={s.contacts_wrapper}>
        <StoreContacts
          phoneNumber={phoneNumber}
          instagramLink={instagramLink || null}
        />
      </div>
    </div>
  );
};
