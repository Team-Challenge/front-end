import { Rate } from 'antd';
import { RatingStarIcon } from '../../icons/RatingStarIcon';
import s from './RatingWithReviewCount.module.scss';

interface RatingWithReviewCountProps {
  defaultValue: number;
  rating: number;
  numberOfReviews: number;
}

export const RatingWithReviewCount = ({
  defaultValue = 0,
  rating,
  numberOfReviews,
}: RatingWithReviewCountProps) => {
  return (
    <div className={s.rating}>
      <Rate
        disabled
        allowHalf
        defaultValue={defaultValue}
        character={<RatingStarIcon />}
        className={s.stars}
        style={{ color: '#fccf5c' }}
      />
      <p className={s.rating_amount}>
        {rating} <span>({numberOfReviews} відгуків)</span>
      </p>
    </div>
  );
};
