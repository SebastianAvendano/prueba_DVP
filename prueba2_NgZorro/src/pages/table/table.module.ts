import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '../../providers/notifications/notification.service';
import { TablePageRoutingModule } from './table-routing.module';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  imports: [
    CommonModule,
    TablePageRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    NzDropDownModule,
    NzModalModule,
    NzSpinModule,
    NzPopconfirmModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule,
    NzImageModule,
  ],
  declarations: [
    TableComponent,
    DetailComponent,
  ],
  providers: [
    NotificationService
  ],
})
export class TableModule {}
