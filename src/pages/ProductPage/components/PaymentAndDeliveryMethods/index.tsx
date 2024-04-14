import { Accordion } from '@/components/UI/Accordion';
import { deliveryMethods, paymentMethods } from '@/constants';
import { useAppSelector } from '@/hooks/reduxHook';
import s from './PaymentAndDeliveryMethods.module.scss';

interface PaymentObject {
  cardPayment: boolean;
  cashPayment: boolean;
  securePayment: boolean;
}

interface DeliveryObject {
  novaPost: boolean;
  ukrPost: boolean;
}

export const PaymentAndDeliveryMethods = () => {
  const { product } = useAppSelector((state) => state.product);
  const payment = product.method_of_payment;
  const post = product.delivery_post;

  return (
    <Accordion title='Оплата і доставка'>
      <div className={s.wrap}>
        <ul className={s.list}>
          {paymentMethods.map(
            ({ id, icon, title }) =>
              payment[id as keyof PaymentObject] && (
                <li key={id} className={s.item}>
                  {icon}
                  {title}
                </li>
              ),
          )}
        </ul>

        <ul className={s.list}>
          {deliveryMethods.map(
            ({ id, icon, title }) =>
              post[id as keyof DeliveryObject] && (
                <li key={id} className={s.item}>
                  <img src={icon} alt={title} className={s.item_img} />
                  {title}
                </li>
              ),
          )}
        </ul>
      </div>
    </Accordion>
  );
};
