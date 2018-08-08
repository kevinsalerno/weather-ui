import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForecastPage } from './forecast';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ForecastPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ForecastPage),
  ],
})
export class ForecastPageModule { }
