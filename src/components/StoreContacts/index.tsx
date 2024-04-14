import { useState } from 'react';
import { Icon } from '@iconify/react';
import { copyToClipboard } from '@/utils/copyToClipboard';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import { Toast } from '@/components/UI';
import s from './StoreContacts.module.scss';

interface StoreContactsProps {
  phoneNumber: string;
  instagramLink?: string | null;
}

export const StoreContacts = ({
  phoneNumber,
  instagramLink,
}: StoreContactsProps) => {
  const { width } = useWindowDimensions();
  const [showMessage, setShowMessage] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [text, setText] = useState('Номер скопійовано');

  const copyNumber = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    copyToClipboard(phoneNumber)
      .then((data) => {
        if (data) {
          setToastType('success');
          setText('Номер скопійовано');
          setShowMessage(true);
        }
      })
      .catch(() => {
        setToastType('error');
        setText('Помилка копіювання номера');
        setShowMessage(true);
      });
  };

  return (
    <div className={s.contacts}>
      {width > 1260 && <p>Зв’язатися зі мною</p>}

      {width > 479.98 ? (
        <button type='button' onClick={copyNumber}>
          <Icon icon='solar:phone-outline' />
          <Toast
            message={text}
            toastType={toastType}
            handleShowMessage={setShowMessage}
            isShow={showMessage}
          />
        </button>
      ) : (
        <a href={`tel:${phoneNumber}`}>
          <Icon icon='solar:phone-outline' />
        </a>
      )}

      {instagramLink && (
        <a href={instagramLink} rel='noopener noreferrer' target='_blank'>
          <Icon icon='iconoir:instagram' />
        </a>
      )}
    </div>
  );
};
