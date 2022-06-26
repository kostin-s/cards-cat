import { FC, useState } from 'react';
import Card from '../Card/Card';

import { ICard } from '../../types/types';

import styles from './Cards.module.scss';

interface ICardsProps {
  cards: ICard[];
}

const Cards: FC<ICardsProps> = ({ cards }) => {
  const [items, setItems] = useState<ICard[]>([]);

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card key={card.id} card={card} setItems={setItems} />
      ))}
    </div>
  );
};

export default Cards;
