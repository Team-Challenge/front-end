import { Accordion } from '@/components/UI/Accordion';
import { useAppSelector } from '@/hooks/reduxHook';
import s from './CareInstructions.module.scss';

export const CareInstructions = () => {
  const { product } = useAppSelector((state) => state.product);
  const careInstructions = product.product_characteristic.care_instructions;

  return (
    careInstructions && (
      <Accordion title='Інструкція по догляду'>
        <p className={s.instruction_text}>{careInstructions}</p>
      </Accordion>
    )
  );
};
