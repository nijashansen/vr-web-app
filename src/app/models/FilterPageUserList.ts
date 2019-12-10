import {User} from './User';


export interface FilterPageUserList {
  list?: User[];
  itemsTotal?: number;
  itemsPrPage: number;
  pageIndex: number;
  pageTotal?: number;
}


