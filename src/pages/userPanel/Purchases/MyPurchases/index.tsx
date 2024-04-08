import { useState } from 'react';
import { Icon } from '@iconify/react';
import { getStatusColor } from '@/utils/getStatusColor';
import { MyPurchasesProps } from '@/types';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { Marker } from '@/components/UI/Marker';
import { DeliveryStatus } from '@/components/UI/DeliveryStatus';
import { OrderDeliveryInfo } from '@/components/UI/OrderDeliveryInfo';
import { OrderProductList } from '../../../storePanel/components/orders/OrderProductList';

import s from './MyPurchases.module.scss';

export const MyPurchases = ({
  orderNumber,
  date,
  status,
  items,
  seller,
}: MyPurchasesProps) => {
  const statusColor = getStatusColor(status, s);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const quantity = items.length;
  const totalPrice = items.reduce(
    (total: number, { price }: { price: number }) => total + price,
    0,
  );

  return (
    <div className={s.order}>
      <div className={`${s.details}  ${isOpen ? s.details_isOpen : ''}`}>
        <Marker status={status} />
        <div className={s.order_info}>
          <p className={s.order_number}>{`№${orderNumber}`}</p>
          <p className={s.order_date}>{date}</p>
          <p className={`${s.order_status_text} ${statusColor}`}>{status}</p>
        </div>
        {!isOpen && (
          <>
            <div className={s.img_wrapper}>
              <div className={s.img_thumb}>
                <img src={items[0].photo} alt='' />
              </div>
              {quantity > 1 && <p>+ {quantity} товари</p>}
            </div>
            <p className={s.order_price}>
              {width > 734 && <span>Сума замовлення</span>} {totalPrice}₴
            </p>
          </>
        )}

        {isOpen && (
          <div className={s.seller}>
            <p>Продавець</p>
            <div className={s.seller_photo_wrapper}>
              <img src={seller.photo} alt='' />
            </div>
            <p>{seller.name}</p>
          </div>
        )}

        <button
          type='button'
          className={s.order_button_open}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon='solar:alt-arrow-down-outline'
            className={isOpen ? 'icon_open' : 'icon_close'}
          />
        </button>

        {isOpen && (
          <>
            <DeliveryStatus status={status} />
            <div className={s.delivery_wrap}>
              <OrderDeliveryInfo
                name='Ірина Фаріон'
                phone='+380639379992'
                city='Львів'
                post='Нова пошта відділення №1'
              />
            </div>
            <div className={s.product_list_wrap}>
              <OrderProductList />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
