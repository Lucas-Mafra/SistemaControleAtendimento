import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmissorPageRoutingModule } from './emissor-routing.module';

import { EmissorPage } from './emissor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmissorPageRoutingModule
  ],
  declarations: [EmissorPage]
})
export class EmissorPageModule {}
