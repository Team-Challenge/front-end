import { ProductCardProps } from '@/types';
import { Icon } from '@iconify/react';
import s from './ProductCard.module.scss';

export const ProductCard = ({
  id,
  photo,
  productName,
  status,
  price,
  isUnique,
  storeName,
}: ProductCardProps) => {
  return (
    <div className={s.product}>
      <div className={`${s.product_photo} ${isUnique && s.product_unique}`}>
        <img src={photo} alt='product' />
        <button type='button' className={s.product_favorite}>
          <Icon icon='solar:heart-outline' />
        </button>
      </div>
      <p className={s.product_name}>{productName}</p>
      <p className={s.product_status}>{status}</p>
      <p className={s.product_price}>{price}₴</p>
      {storeName && <p>{storeName}</p>}
    </div>
  );
};
