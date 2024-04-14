import { Accordion } from '@/components/UI/Accordion';
import { useAppSelector } from '@/hooks/reduxHook';
import s from './ProductDescription.module.scss';

export const ProductDescription = () => {
  const { product } = useAppSelector((state) => state.product);
  const description = product.product_description;

  return (
    description && (
      <Accordion title='Опис від майстра' className={s.description}>
        <p className={s.description_text}>{description}</p>
      </Accordion>
    )
  );
};
