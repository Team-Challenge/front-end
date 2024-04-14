/* eslint-disable no-unneeded-ternary */
import { StoreContacts } from '@/components/StoreContacts';
import { RatingWithReviewCount } from '@/components/UI';
import { useAppSelector } from '@/hooks/reduxHook';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultStorePic from '@assets/default-store-pic.svg';
import s from './Contacts.module.scss';

export const Contacts = () => {
  const navigate = useNavigate();
  const { name, id, photo_shop, phone_number, link } = useAppSelector(
    (state) => state.product.store,
  );
  const [storeImg, setStoreImg] = useState<string>(
    photo_shop ? photo_shop : defaultStorePic,
  );

  const handleNavigateToStorePage = () => {
    navigate(`/store/${id}`);
  };

  return (
    <div className={s.store}>
      <div className={s.store_photo}>
        <img src={storeImg} alt='store' />
      </div>
      <button
        type='button'
        onClick={handleNavigateToStorePage}
        className={s.store_name}
      >
        {name}
      </button>
      <div className={s.store_rating}>
        <RatingWithReviewCount
          defaultValue={3.5}
          rating={3.5}
          numberOfReviews={15}
        />
      </div>
      <div className={s.store_contacts}>
        <StoreContacts
          phoneNumber={phone_number}
          instagramLink={link || null}
        />
      </div>
    </div>
  );
};
