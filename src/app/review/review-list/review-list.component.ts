import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { Review } from 'src/app/interface/review';
import { FormControl } from '@angular/forms';
import { DatabaseReviewsService } from 'src/app/services/database-reviews.service';
import { Book } from 'src/app/interface/book';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RemoveReviewDialogComponent } from '../remove-review-dialog/remove-review-dialog.component';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit {
  @Input() book: Book;
  @Input() review: Review;
  @Input() last;
  @Output() event = new EventEmitter();

  editForm = new FormControl();
  isEditable = false;

  constructor(
    private databaseReviewsService: DatabaseReviewsService,
    private snackBer: MatSnackBar,
    private dialog: MatDialog
  ) {}

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.isEditable) {
      return;
    } else if (this.editForm.dirty) {
      $event.preventDefault();
      $event.returnValue = '作業中の内容が失われますがよろしいですか？';
    }
  }

  isEditMode() {
    this.isEditable = true;
    this.editForm.setValue(this.review.answer);
    this.event.emit(+1);
  }

  cancelEdit() {
    this.isEditable = false;
    this.editForm.reset();
    this.event.emit(-1);
  }

  updataReview() {
    this.databaseReviewsService
      .updateReview(this.book, {
        id: this.review.id,
        answer: this.editForm.value,
      })
      .then(() => {
        this.snackBer.open('編集内容を保存しました。');
      });
    this.event.emit(-1);
  }

  openDialog(): void {
    this.dialog
      .open(RemoveReviewDialogComponent, {
        width: '250px',
      })
      .afterClosed()
      .subscribe((status) => {
        if (status) {
          this.databaseReviewsService
            .deleteReview(this.book, this.review)
            .then(() => {
              this.snackBer.open('削除しました。');
            });
        }
      });
  }

  ngOnInit(): void {}
}
