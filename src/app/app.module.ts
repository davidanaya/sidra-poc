import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { DoughnutWidgetComponent } from './components/doughnut-widget/doughnut-widget.component';
import { EchartComponent } from './components/echart/echart.component';

// containers
import { OverallHospitalComponent } from './containers/overall-hospital/overall-hospital.component';

// services
import { OverallHospitalService } from './containers/overall-hospital/overall-hospital.service';

@NgModule({
  declarations: [
    AppComponent,
    OverallHospitalComponent,
    DoughnutWidgetComponent,
    EchartComponent
  ],
  imports: [BrowserModule],
  providers: [OverallHospitalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
