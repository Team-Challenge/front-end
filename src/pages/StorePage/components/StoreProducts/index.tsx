import { usePagination } from '@/hooks/usePagination';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { Sorting } from '@/components/Sorting';
import { ProductCard } from '@/components/ProductCard';
import { Pagination } from '@/components/UI';
import { Link } from 'react-router-dom';
import s from './StoreProducts.module.scss';

export const StoreProducts = () => {
  const products = useAppSelector((state) => state.storePage.productList);
  const isProducts = products && products.length > 0;

  const itemsPerPage = 32;
  const { currentPage, changePage, pageData, nextPage, previousPage } =
    usePagination(products, itemsPerPage);

  return (
    <div
      className={`${s.products} ${
        isProducts ? s.products_full : s.products_empty
      }`}
    >
      {isProducts ? (
        <>
          <Sorting />
          <ul className={s.products_list}>
            {pageData().map((product) => (
              <li key={product.id}>
                <Link to={`/store/products/${product.id}`}>
                  <ProductCard
                    id={product.id}
                    photo={product.photo.product_photo}
                    productName={product.product_name}
                    status={product.product_status}
                    price={product.price}
                    isUnique={product.is_unique}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={s.products_empty_text}>
          Ой, тут поки пусто.
          <br />
          Запрошуємо зазирнути пізніше, щоб обрати ідеальну прикрасу саме для
          вас!
        </p>
      )}

      {products.length > itemsPerPage && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={changePage}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
    </div>
  );
};
