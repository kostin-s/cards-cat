import { FC } from 'react';
import classNames from 'classnames/bind';

import { IDescription } from './../../types/types';
import { titleMouse } from '../../utils/titleMouse';

import styles from './Description.module.scss';

interface IDescriptionProps {
  description: IDescription;
  disabled: boolean;
}

const cx = classNames.bind(styles);

const Description: FC<IDescriptionProps> = ({ description, disabled }) => {
  const { portions, mouse, ok } = description;

  return (
    <ul className={cx(styles.description, { disabled })}>
      <li>
        <span className={styles.number}>{portions}</span> порций
      </li>
      <li>
        {mouse > 1 && <span>{mouse}</span>}
        {titleMouse(mouse)}
      </li>
      {ok && <li>заказчик доволен</li>}
    </ul>
  );
};

export default Description;
