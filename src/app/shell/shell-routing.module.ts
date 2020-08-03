import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NavComponent } from '../services/nav/nav.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'review',
        loadChildren: () =>
          import('../review/review.module').then((mod) => mod.ReviewModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: '',
        loadChildren: () =>
          import('../library/library.module').then((mod) => mod.LibraryModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'add-books',
        loadChildren: () =>
          import('../add-books/add-books.module').then(
            (mod) => mod.AddBooksModule
          ),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../calendar/calendar.module').then(
            (mod) => mod.CalendarModule
          ),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'terms',
        loadChildren: () =>
          import('../terms/terms.module').then((mod) => mod.TermsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
