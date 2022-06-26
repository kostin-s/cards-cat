import { FC } from 'react';
import Cards from '../Cards/Cards';

import cards from '../../db/cards.data';

import styles from './Content.module.scss';

const Content: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <Cards cards={cards} />
    </div>
  );
};

export default Content;
