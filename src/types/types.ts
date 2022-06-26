export interface IDescription {
  portions: number;
  mouse: number;
  ok?: boolean;
}

export interface ISelect {
  buyText: string;
  hoverText: string;
  empty: boolean;
  emptyText: string;
}

export interface ICard {
  id: number;
  subtitle: string;
  title: string;
  taste: string;
  weight: string;
  description: IDescription;
  select: ISelect;
}
