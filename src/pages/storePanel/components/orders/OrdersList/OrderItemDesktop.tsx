import { useState } from 'react';
import { Icon } from '@iconify/react';
import { getStatusColor } from '@/utils/getStatusColor';
import { OrderItemProps } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { openModal } from '@/store/modalSlice';
import { OrderDeliveryInfo } from '@/components/UI/OrderDeliveryInfo';
import { OrderProductList } from '../OrderProductList';
import { ParcelNumberForm } from '../ParcelNumberForm';
import s from './OrdersList.module.scss';

export const OrderItemDesktop = ({
  orderNumber,
  date,
  status,
  price,
  updateDate,
}: OrderItemProps) => {
  const statusColor = getStatusColor(status, s);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.addParcelNumber);

  const handleAddParcelNumberForm = () => {
    dispatch(openModal('addParcelNumber'));
  };

  return (
    <div className={s.cell}>
      <div className={`${s.cell_wrap} ${s.row}`}>
        <p className={s.cell_number}>{orderNumber}</p>
        <p className={s.cell_date}>{date}</p>
        <p className={s.cell_price}>{price}₴</p>
        <p className={`${s.cell_status} ${statusColor}`}>{status}</p>
        <p className={s.cell_update}>{updateDate}</p>
        <button
          type='button'
          className={s.cell_button_add}
          onClick={handleAddParcelNumberForm}
        >
          Номер ТТН
        </button>
        <button
          type='button'
          className={s.cell_button_open}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon='solar:alt-arrow-down-outline'
            className={isOpen ? 'icon_open' : 'icon_close'}
          />
        </button>
      </div>

      {isOpen && (
        <div className={s.cell_info}>
          <OrderProductList />

          <div className={s.delivery_wrap}>
            <OrderDeliveryInfo
              name='Ірина Фаріон'
              phone='+380639379992'
              city='Львів'
              post='Нова пошта відділення №1'
              payment
              icons
            />
          </div>

          <button type='button' className={s.order_cancel}>
            <Icon icon='solar:close-circle-outline' />
            Скасувати замовлення
          </button>
        </div>
      )}

      {isModalOpen && <ParcelNumberForm />}
    </div>
  );
};
