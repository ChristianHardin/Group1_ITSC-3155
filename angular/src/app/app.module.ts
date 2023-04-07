import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CalorieRingComponent } from './calorie-ring/calorie-ring.component';
import { WeeklyChartComponent } from './weekly-chart/weekly-chart.component';
import { NgProgressModule } from "ngx-progressbar";
import { NgChartsModule } from "ng2-charts";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { AppRoutingModule } from './app-routing.module';
import { LifetimeStatsComponent } from './lifetime-stats/lifetime-stats.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    CalorieRingComponent,
    WeeklyChartComponent,
    LoginComponent,
    LifetimeStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule,
    NgChartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      space: -10,
      outerStrokeWidth: 10,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      innerStrokeWidth: 10,
      titleColor: "#1e2020",
      showSubtitle: false,
      showInnerStroke: true,
      startFromZero: false
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
