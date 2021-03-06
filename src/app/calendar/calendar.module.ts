import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReviewDetailDialogComponent } from './review-detail-dialog/review-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SheredModule } from '../shered/shered.module';

@NgModule({
  declarations: [CalendarComponent, ReviewDetailDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    FullCalendarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatNativeDateModule,
    SheredModule,
  ],
})
export class CalendarModule {}
