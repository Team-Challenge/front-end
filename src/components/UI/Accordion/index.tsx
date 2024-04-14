import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import s from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({ title, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${s.accordion} ${className}`}>
      <button
        type='button'
        onClick={toggleAccordion}
        className={s.accordion_button}
      >
        {title}
        <Icon
          icon='solar:alt-arrow-down-outline'
          className={`${s.arrow} ${isOpen ? s.active : s.inactive}`}
        />
      </button>
      <div
        ref={contentRef}
        className={s.content}
        style={
          isOpen
            ? {
                height: `${contentRef?.current?.scrollHeight}px`,
                marginBottom: '1rem',
              }
            : { height: '0', marginBottom: '0rem' }
        }
      >
        {children}
      </div>
    </div>
  );
};
