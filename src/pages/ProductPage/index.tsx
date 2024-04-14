import { ButtonUI, RatingWithReviewCount } from '@/components/UI';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { getProductInfoById } from '@/store/productPage/productPageThunks';
import {
  CareInstructions,
  Contacts,
  Details,
  PaymentAndDeliveryMethods,
  ProductDescription,
  ProductStatus,
  ProductsBlock,
  RefundsAndExchanges,
  Reviews,
} from './components';
import s from './ProductPage.module.scss';

export const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { width } = useWindowDimensions();
  const { product } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(getProductInfoById(+productId));
    }
  }, [productId]);

  return (
    <section className='container'>
      <div className={s.product}>
        <div className={s.product_breadcrumbs}>
          {/* {`Головна > На шию > Зґарди > Зґарда “Ніжність і  міць” `} */}
        </div>

        <div className={s.product_photos} />
        <div className={s.product_desc}>
          <RatingWithReviewCount
            defaultValue={0}
            rating={0}
            numberOfReviews={0}
          />
          <h4 className={s.product_title}>{product.product_name}</h4>
          <ProductStatus />
          <p className={s.product_price}>{product.price} ₴</p>

          <div className={s.buttons}>
            <ButtonUI label='Додати до кошика' className={s.buttons_buy} />
            <button type='button' className={s.buttons_favorite}>
              <Icon
                icon='solar:heart-outline'
                className={s.buttons_favorite_icon}
              />
              {width >= 640 && width < 992 && 'В обране'}
              {width >= 1270 && 'В обране'}
            </button>
          </div>
        </div>

        <div className={s.product_details}>
          <Details />
          <ProductDescription />
          <PaymentAndDeliveryMethods />
          <RefundsAndExchanges />
          <CareInstructions />
        </div>
        <Contacts />
      </div>

      <div className={s.decorative_element} />
      <Reviews />
      <div className={s.decorative_element} />

      <ProductsBlock title='Більше товарів цього продавця' />
      <ProductsBlock title='Новинки' className={s.newProducts} />
    </section>
  );
};
