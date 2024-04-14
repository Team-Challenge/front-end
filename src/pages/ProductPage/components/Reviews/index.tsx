import { ButtonUI, Modal, OrnamentalTitle, TextArea } from '@/components/UI';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { closeModal, openModal } from '@/store/modalSlice';
import {
  Controller,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Rate } from 'antd';
import { RatingStarIcon } from '@/components/icons/RatingStarIcon';
import s from './Reviews.module.scss';

interface AddReviewsForm {
  rating: number;
  description: string;
}

export const Reviews = () => {
  const { width } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.addNewReview);

  const methods = useForm({
    mode: 'onChange',
  });

  const {
    reset,
    control,
    formState: { errors },
  } = methods;

  const handleOpenModal = () => {
    dispatch(openModal('addNewReview'));
  };

  const onSubmit = (data: AddReviewsForm) => {
    console.log(data);
    reset();
    dispatch(closeModal('addNewReview'));
  };

  return (
    <section className={`${s.reviews} ${s.reviews_empty}`}>
      <h4 className={s.reviews_title}>Відгуки {width >= 450 && `(0)`}</h4>
      <Link to='/' className={s.reviews_link}>
        Всі відгуки про магазин
        <Icon icon='solar:arrow-right-up-outline' />
      </Link>
      <ButtonUI
        label='Залишити відгук'
        variant='secondary'
        className={s.reviews_button}
        onClick={handleOpenModal}
      />
      <p className={s.reviews_text_empty}>
        Ой, тут поки нема відгуків про цей товар.
        <br /> Поділіться вашими враженнями від покупки
      </p>
      {/* <ReviewsList className={s.reviews_list} /> */}

      {isModalOpen && (
        <Modal modalId='addNewReview' className={s.modal}>
          <OrnamentalTitle tag='h4' text='Оцініть товар' />
          <FormProvider {...methods}>
            <form
              id='addNewProduct'
              className={s.form}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={s.rating_wrap}>
                <p className={s.rating_subtitle}>Ваша оцінка</p>

                <Controller
                  name='rating'
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <Rate
                      {...field}
                      allowHalf
                      character={<RatingStarIcon />}
                      className='rating_stars_select'
                      style={{ color: '#fccf5c' }}
                    />
                  )}
                />

                {errors.rating && (
                  <p className='error-text'>
                    Будь ласка, поставьте оцінку товару
                  </p>
                )}
              </div>
              <p className={s.textarea_subtitle}>
                Поділіться своїм досвідом покупки прикраси в цьому магазині
              </p>
              <TextArea
                name='review'
                id='review'
                maxLength={1000}
                minLength={1}
                cols={52}
                editModeIcon
              />
              <ButtonUI
                label='Надіслати'
                className={s.modal_button}
                onClick={methods.handleSubmit(
                  onSubmit as SubmitHandler<FieldValues>,
                )}
              />
            </form>
          </FormProvider>
        </Modal>
      )}
    </section>
  );
};
