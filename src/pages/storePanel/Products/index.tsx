import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { productStatusList, emptySectionText } from '@/constants';
import { ButtonsBar, EmptyContentPage } from '@/components/UI';
import { Sorting } from '@/components/Sorting';
import { Icon } from '@iconify/react';
import { getStoreProducts } from '@/store/storeProfile/storeProfileThunks';
import { ProductsList } from '../components/products/ProductsList';
import { AddProductButton } from '../components/AddProductButton';
import s from './Products.module.scss';

export const Products = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const { productList } = useAppSelector((state) => state.storeProfile);
  const [selectedStatus, setSelectedStatus] = useState<string>('Всі');

  const isProductsAvailable = productList.length > 0;

  const handleStatusChange = (newStatus: string) => {
    setSelectedStatus(newStatus);
  };

  useEffect(() => {
    dispatch(getStoreProducts());
  }, []);

  return isProductsAvailable ? (
    <section className={s.products}>
      {width >= 991.98 && <h4 className={s.products_title}>Мої товари</h4>}

      <Link to='/account/new-product' className={s.products_button}>
        Додати товар
        <Icon icon='solar:add-circle-outline' />
      </Link>
      <ButtonsBar
        buttonsList={productStatusList}
        className={s.products_status}
        onStatusChange={handleStatusChange}
      />
      <Sorting className={s.products_sorting} />
      <ProductsList selectedStatus={selectedStatus} />
    </section>
  ) : (
    <EmptyContentPage
      title='Ой, тут поки пусто'
      text={emptySectionText.productsStorePanel}
      item={<AddProductButton />}
    />
  );
};
