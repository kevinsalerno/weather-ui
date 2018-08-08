import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DayForecastComponent } from './day-forecast/day-forecast';
import { HourForecastComponent } from './hour-forecast/hour-forecast';
import { TempGraphComponent } from './temp-graph/temp-graph';

@NgModule({
	declarations: [SearchBarComponent,
		DayForecastComponent,
		HourForecastComponent,
    TempGraphComponent],
	imports: [CommonModule,
		IonicModule],
	exports: [SearchBarComponent,
		DayForecastComponent,
		HourForecastComponent,
    TempGraphComponent]
})
export class ComponentsModule { }
