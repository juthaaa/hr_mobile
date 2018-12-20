import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinePage } from './fine';

@NgModule({
  declarations: [
    FinePage,
  ],
  imports: [
    IonicPageModule.forChild(FinePage),
  ],
})
export class FinePageModule {}
