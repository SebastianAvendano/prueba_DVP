import { IItem } from "./item";

export interface IResponse {
  total_count?: number;
  incomplete_results?: boolean;
  items?: IItem[];
}