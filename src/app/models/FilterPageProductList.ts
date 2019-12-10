import {Category} from './category';
import {Product} from './product';

export interface FilterPageProductList {
  list?: Product[];
  filter?: Category;
  itemsTotal?: number;
  itemsPrPage: number;
  pageIndex: number;
  pageTotal?: number;
}
