import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmissorPage } from './emissor.page';

const routes: Routes = [
  {
    path: '',
    component: EmissorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmissorPageRoutingModule {}
