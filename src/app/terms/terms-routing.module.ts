import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsServiceComponent } from './terms-service/terms-service.component';

const routes: Routes = [
  {
    path: '',
    component: TermsServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsRoutingModule {}
