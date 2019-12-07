import {Category} from './Category';

export interface Product {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  category: Category;
}
