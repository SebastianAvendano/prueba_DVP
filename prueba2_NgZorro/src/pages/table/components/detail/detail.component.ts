import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ItemModel } from 'src/models/itemModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item?: ItemModel;
  loading: boolean = true;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
  ) {
    this.form = this.fb.group({
      id: [null, Validators.required],
      login: [null, Validators.required],
      score: [null, Validators.required],
      type: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.setData();
    this.loading = false;
  }

  setData(): void{
    this.form.patchValue(this.item!)
  }

  destroyModal(): void {
    this.modal.destroy();
  }
}
