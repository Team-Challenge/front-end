import { Accordion } from '@/components/UI/Accordion';
import { useAppSelector } from '@/hooks/reduxHook';
import { colorsList } from '@/constants';
import { generateCharacteristicList } from '@/utils/generateCharacteristicList';
import s from './Details.module.scss';

export const Details = () => {
  const { product } = useAppSelector((state) => state.product);
  const {
    coating,
    decorative_elements,
    metals,
    other,
    stones,
    textiles,
    colors,
    parameters,
  } = product.product_characteristic;

  const allCharacteristics = [
    coating,
    decorative_elements,
    metals,
    other,
    stones,
    textiles,
  ]
    .filter((characteristic) => characteristic)
    .flatMap((characteristic) => characteristic);

  const lengths = generateCharacteristicList(parameters, 'length', 'см');
  const width = generateCharacteristicList(parameters, 'width', 'см');
  const weight = generateCharacteristicList(parameters, 'weight', 'г');
  const size = generateCharacteristicList(parameters, 'size', '');

  const relevantCharacteristics = [
    allCharacteristics,
    lengths,
    weight,
    width,
    size,
    colors,
  ];

  const shouldRenderAccordion = relevantCharacteristics.some(
    (arr) => arr && arr.length > 0,
  );

  return (
    shouldRenderAccordion && (
      <Accordion title='Деталі'>
        <div className={s.details}>
          {allCharacteristics.length !== 0 && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Матеріали</p>
              <p className={s.details_text}>{allCharacteristics.join(', ')}</p>
            </div>
          )}

          {lengths && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Довжина</p>
              <p className={s.details_text}>{lengths}</p>
            </div>
          )}

          {width && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Ширина</p>
              <p className={s.details_text}>{width}</p>
            </div>
          )}

          {weight && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Вага</p>
              <p className={s.details_text}>{weight}</p>
            </div>
          )}

          {size && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Розмір</p>
              <p className={s.details_text}>{size}</p>
            </div>
          )}

          {colors?.length !== 0 && (
            <div className={s.details_wrap}>
              <p className={s.details_subtitle}>Колір</p>
              <ul className={s.color_list}>
                {colors &&
                  colors.map((colorName) => {
                    const foundColor = colorsList.find(
                      (color) => color.name === colorName,
                    );
                    const colorClass = foundColor && foundColor.styleClass;

                    return (
                      <li key={colorName} className={s.color_item}>
                        <div className={`${s.color_circle} ${colorClass}`} />
                        <p>{colorName}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </Accordion>
    )
  );
};
