import { useAppSelector } from '@/hooks/reduxHook';
import { INSTAGRAM_NICKNAME_REGEX } from '@/constants/RegExp';
import { transformInstagramLinkToNickname } from '@/utils/transformInstagramLink';
import { TextInput } from '@/components/UI';
import s from './StoreSettings.module.scss';

export const StoreSocialMediaLink = () => {
  const { instagramLink } = useAppSelector((state) => state.storeProfile);

  const instagramNickname =
    instagramLink && transformInstagramLinkToNickname(instagramLink);

  return (
    <div className={s.form_wrap}>
      <p className={s.form_subtitle}>Instagram</p>
      <TextInput
        type='text'
        id='link'
        placeholder='@myshop'
        value={instagramNickname as string}
        required={Boolean(instagramNickname)}
        regex={INSTAGRAM_NICKNAME_REGEX}
        errorMessage='Будь ласка, введіть ваш нікнейм'
        editModeIcon={Boolean(instagramNickname)}
      />
    </div>
  );
};
