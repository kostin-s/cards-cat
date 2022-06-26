import { ICard } from '../types/types';

const data: ICard[] = [
  {
    id: 1,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с фуа-гра',
    description: {
      portions: 10,
      mouse: 1,
      ok: false,
    },
    weight: '0,5',
    select: {
      empty: false,
      emptyText: 'Печалька, с фуа-гра закончился.',
      buyText: 'Печень утки разварная с артишоками.',
      hoverText: 'Котэ не одобряет?',
    },
  },
  {
    id: 2,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с рыбой',
    description: {
      portions: 40,
      mouse: 2,
      ok: false,
    },
    weight: '2',
    select: {
      empty: false,
      emptyText: 'Печалька, с рыбой закончился.',
      buyText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      hoverText: 'Котэ не одобряет?',
    },
  },
  {
    id: 3,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    taste: 'с курой',
    description: {
      portions: 100,
      mouse: 5,
      ok: true,
    },
    weight: '5',
    select: {
      empty: true,
      emptyText: 'Печалька, с курой закончился.',
      buyText: 'Филе из цыплят с трюфелями в бульоне.',
      hoverText: 'Котэ не одобряет?',
    },
  },
];

export default data;
