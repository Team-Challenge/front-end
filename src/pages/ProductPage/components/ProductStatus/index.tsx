import { ConfigProvider, Tooltip } from 'antd';
import { Icon } from '@iconify/react';
import { useAppSelector } from '@/hooks/reduxHook';
import s from './ProductStatus.module.scss';

export const ProductStatus = () => {
  const { product } = useAppSelector((state) => state.product);
  const inStock = product.product_status === 'В наявності';
  const toOrder = product.product_status === 'Під замовлення';

  const { deadline } = product.product_characteristic;
  const isUnique = product.is_unique;

  return (
    <div className={s.availability}>
      <p className={s.availability_status}>{product.product_status}</p>
      <div className={s.availability_wrap}>
        {(deadline || isUnique) && <span className={s.decorativeElements} />}
        <p className={s.availability_substatus}>
          {inStock && isUnique && 'В єдиному екземплярі'}
          {toOrder && deadline && `Виготовлення: ${deadline} дні`}
        </p>

        {(deadline || isUnique) && (
          <ConfigProvider
            theme={{
              token: {
                colorTextLightSolid: '#333',
                fontFamily: 'Montserrat',
                fontSize: 12,
              },
            }}
          >
            <Tooltip
              title={
                toOrder
                  ? 'Це означає, що майстер приступає до виготовлення цієї прикраси для Вас лише після оформлення замовлення та внесення передоплати.'
                  : 'Це унікальна прикраса, яка була створена лише один раз і не має повторів.'
              }
              color='#fbe5aa'
            >
              <Icon
                icon='solar:question-circle-outline'
                className={s.tooltip}
              />
            </Tooltip>
          </ConfigProvider>
        )}
      </div>
    </div>
  );
};
