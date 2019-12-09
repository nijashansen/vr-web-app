import {User} from "./User";


export interface FilterPageUserList {
  user?: User[];
  itemsTotal?: number;
  pageIndex: number;
  pageTotal?: number;
}


