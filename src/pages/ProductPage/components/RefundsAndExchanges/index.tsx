import { Accordion } from '@/components/UI/Accordion';
import { refundsRulesList } from '@/constants';
import { Icon } from '@iconify/react';
import { useAppSelector } from '@/hooks/reduxHook';
import s from './RefundsAndExchanges.module.scss';

export const RefundsAndExchanges = () => {
  const { product } = useAppSelector((state) => state.product);
  const isReturn = product.is_return;

  return (
    isReturn && (
      <Accordion title='Повернення та обмін' className={s.refunds}>
        <Icon icon='solar:undo-left-round-outline' className={s.refunds_icon} />
        <p className={s.refunds_text}>Товар можна обміняти та повернути</p>
        <ul className={s.refunds_list}>
          {refundsRulesList.map(
            ({ id, item }) =>
              id !== 1 && (
                <li key={id} className={s.refunds_item}>
                  {item}
                </li>
              ),
          )}
        </ul>
      </Accordion>
    )
  );
};
