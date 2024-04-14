import { ProductCard } from '@/components/ProductCard';
import testPhoto from '@assets/example.png';
import s from './ProductsBlock.module.scss';

const productList = [
  {
    id: 1,
    photo: testPhoto,
    name: 'Product 1',
    price: 222,
  },
  {
    id: 2,
    photo: testPhoto,
    name: 'Product 2',
    price: 222,
  },
  {
    id: 3,
    photo: testPhoto,
    name: 'Product 3',
    price: 222,
  },
  {
    id: 4,
    photo: testPhoto,
    name: 'Product 4',
    price: 222,
  },
];

interface ProductsBlockProps {
  title: string;
  products?: any;
  className?: string;
}

export const ProductsBlock = ({
  title,
  products,
  className,
}: ProductsBlockProps) => {
  return (
    <div className={s.block}>
      <h4 className={s.block_title}>{title}</h4>
      <ul className={s.block_list}>
        {productList.map(({ id, photo, name, price }) => (
          <li key={id}>
            <ProductCard
              photo={photo}
              productName={name}
              status='В наявності'
              price={price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
