import { Dispatch, FC, SetStateAction, useState } from 'react';
import classNames from 'classnames/bind';

import { ICard } from '../../types/types';
import Description from '../Description/Description';

import cat from './../../images/cat.png';
import cat2x from './../../images/cat@2x.png';

import styles from './Card.module.scss';

interface ICardProps {
  card: ICard;
  setItems: Dispatch<SetStateAction<ICard[]>>;
}

const cx = classNames.bind(styles);

const Card: FC<ICardProps> = ({ card, setItems }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleActive = () => {
    if (!card.select.empty) {
      if (isActive === false && isHover === true) {
        setIsHover(false);
      }

      if (!isActive) {
        setItems((prev) => [...prev, card]);
      } else {
        setItems((prev) => prev.filter((item) => item.id !== card.id));
      }

      setIsActive(!isActive);
    }
  };

  const handleHover = (value: boolean) => {
    if (!card.select.empty && isActive) {
      setIsHover(value);
    }
  };

  return (
    <div className={styles.item}>
      <div
        className={cx(styles.card, {
          active: isActive && !card.select.empty,
          hover: isActive && isHover,
          disabled: card.select.empty,
        })}
        onClick={handleActive}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div className={styles.header}>
          <div className={styles.corner}></div>
          <div className={cx(styles.subtitle)}>
            {isHover && isActive ? (
              <span className={styles.subtitle_hover}>{card.select.hoverText}</span>
            ) : (
              <>{card.subtitle}</>
            )}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.taste}>{card.taste}</p>
            <Description description={card.description} disabled={card.select.empty} />
          </div>
          <img className={styles.img} src={cat} srcSet={`${cat2x} 2x`} alt='cat' />
          <div className={styles.weight}>
            {card.weight} <span>кг</span>
          </div>
        </div>
      </div>
      <div className={styles.buy}>
        {card.select.empty ? (
          card.select.emptyText
        ) : isActive ? (
          card.select.buyText
        ) : (
          <>
            Чего сидишь? Порадуй котэ,{' '}
            <span className={styles.buy_link} onClick={handleActive}>
              купи.
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
