import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ItemModel } from 'src/models/itemModel';
import { DbService } from 'src/services/db.service';
import { handleErrorForm } from 'src/utils/handle_error_form';
import { getPropsFiltersTable } from 'src/utils/search_datatable';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  loading: boolean = false;
  users: ItemModel[] | undefined = [];
  listOfColumns: any[] = [
    {
      key: 'login',
      name: 'Nombre de Usuario',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: ItemModel, b: ItemModel) => {
        return a.login!.localeCompare(
          b.login!
        );
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('login'),
    },
    {
      key: 'id',
      name: 'Código',
      searchEnabled: true,
      searchVisible: false,
      sortOrder: null,
      sortFn: (a: ItemModel, b: ItemModel) => {
        return a.id!.toString().localeCompare(b.id!.toString());
      },
      sortDirections: ['ascend', 'descend', null],
      ...getPropsFiltersTable('id'),
    },
    {
      key: 'type',
      name: 'Tipo',
      sortOrder: null,
      sortFn: (a: ItemModel, b: ItemModel) => {
        return a.type!.localeCompare(b.type!);
      },
      sortDirections: ['ascend', 'descend', null],
    },
    {
      key: 'score',
      name: 'Puntuación',
      sortOrder: null,
      sortFn: (a: ItemModel, b: ItemModel) => {
        return a.score!.toString().localeCompare(b.score!.toString());
      },
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Acción',
    },
  ];
  searchForm!: FormGroup;

  constructor(
    private dbService: DbService,
    private fb: FormBuilder,
    private modalService: NzModalService,
  ) { 
    this.searchForm = this.fb.group({
      name: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  getUsers(key: string): void {
    this.dbService.getUsers(key).subscribe((response) => {
      this.users = response.items?.map((item) => {
        return ItemModel.fromJson(item);
      })
      this.loading = false
    })
  }

  openModal(user:ItemModel){
    this._showModal("Detalles  del usuario", user)
  }

  validateAction(): void {
    this.loading = true;
    if (this.searchForm.valid) {
      this.getUsers(this.searchForm.value.name)
    } else {
      this.loading = false;
      handleErrorForm(this.searchForm);
    }
  }

  _showModal(
    title?: string,
    item?: ItemModel,
  ): void {
    this.modalService.create({
      nzTitle: title,
      nzWidth: '50%',
      nzComponentParams: {
        item: item,
      },
      nzContent: DetailComponent,
    });
  }
}
