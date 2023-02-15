import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParamsService } from '../params'

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(
    private paramsService: ParamsService,
    private navCtrl: Router,
    private location: Location
  ) { }

  public push(page: string, params: object | null = null) {
    if (params != null && params != undefined) {
      this.paramsService.set(page, params);
    }

    this.navCtrl.navigateByUrl(`/${page}`);
  }

  public pull(page: string, params: string) {
    if (params != null) {
      this.paramsService.get(page, params)
    }
  }
  public pop() {
    return this.location.back();
  }
}
