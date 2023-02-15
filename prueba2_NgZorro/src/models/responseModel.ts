import { IItem } from "src/interfaces/item";
import { IResponse } from "src/interfaces/response";


export class ResponseModel {
  constructor({
    incomplete_results,
    items,
    total_count
  }: IResponse) {
   (this.incomplete_results= incomplete_results),
   (this.items = items),
   (this.total_count = total_count);
  }

  public incomplete_results?: boolean
  public items?: IItem[]
  public total_count?: number


  public copyWith({
    incomplete_results,
    items,
    total_count,
  }: IResponse): ResponseModel {
    return new ResponseModel({
      incomplete_results: incomplete_results ?? this.incomplete_results,
      items: items ?? this.items,
      total_count: total_count ?? this.total_count,
    });
  }

  public fromRawJson(str: string): ResponseModel {
    return ResponseModel.fromJson(JSON.parse(str));
  }

  public toRawJson(): string {
    return JSON.stringify(this.toJson());
  }

  public static fromJson(json: any): ResponseModel {
    return new ResponseModel({
      incomplete_results: json['incomplete_results'] != null ? json['incomplete_results'] : null,
      items: json['items'] != null ? json['items'] : null,
      total_count: json['total_count'] != null ? json['total_count'] : null,
    });
  }

  public toJson(): any {
    return {
      incomplete_results: this.incomplete_results,
      items: this.items,
      total_count: this.total_count,
    };
  }
}
