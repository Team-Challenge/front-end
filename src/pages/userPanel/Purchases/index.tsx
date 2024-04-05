import { Icon } from '@iconify/react';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { EmptyContentPage, ButtonsBar } from '@/components/UI';
import { purchaseStatusList } from '@/constants/statusesList';
import { emptySectionText } from '@/constants/emptySectionText';
import { MyPurchases } from './MyPurchases';
import s from './Purchases.module.scss';

const orders = [
  {
    orderNumber: 5555,
    date: '17 груд. 2023',
    status: 'В роботі',
    seller: {
      name: 'John',
      photo: '',
    },
    items: [
      {
        itemName: 'Підвіска',
        photo: '',
        price: 50,
        quantity: 1,
      },
    ],
  },
  {
    orderNumber: 65215,
    date: '17 груд. 2023',
    status: 'В дорозі',
    seller: {
      name: 'Anton',
      photo: '',
    },
    items: [
      {
        itemName: 'Підвіска',
        photo: '',
        price: 50,
        quantity: 1,
      },
      {
        itemName: 'Манжетна застібка',
        photo: '',
        price: 60,
        quantity: 1,
      },
      {
        itemName: 'Брошка',
        photo: '',
        price: 70,
        quantity: 2,
      },
    ],
  },
  {
    orderNumber: 4654565,
    date: '17 груд. 2023',
    status: 'Виконано',
    seller: {
      name: 'Oleg',
      photo: '',
    },
    items: [
      {
        itemName: 'Каблучка',
        photo: '',
        price: 80,
        quantity: 1,
      },
    ],
  },
  {
    orderNumber: 789,
    date: '18 груд. 2023',
    status: 'Скасовано',
    seller: {
      name: 'Mariana',
      photo: '',
    },
    items: [
      {
        itemName: 'Намисто',
        photo: '',
        price: 110,
        quantity: 10,
      },
    ],
  },
];

export const Purchases = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={s.purchases}>
      {/* <EmptyContentPage
        title='Ой, тут поки пусто'
        text={emptySectionText.productsUserPanel}
        item={<Icon icon='solar:bag-smile-outline' />}
      /> */}

      {width > 730 && <h4 className={s.purchases_title}>Мої покупки</h4>}
      <ButtonsBar buttonsList={purchaseStatusList} />
      <div className={s.purchases_table}>
        {orders.map((order) => (
          <MyPurchases {...order} key={order.orderNumber} />
        ))}
      </div>
    </section>
  );
};
