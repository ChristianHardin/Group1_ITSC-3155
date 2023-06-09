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
import { PremadeWorkoutComponent } from './workouts/premade-workouts.component';
import { HeightAgeWeightComponent } from './height-age-weight/height-age-weight.component';
import { RegisterComponent } from './register/register.component';
import { UserGoalsComponent } from './user-goals/user-goals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    CalorieRingComponent,
    WeeklyChartComponent,
    LoginComponent,
    LifetimeStatsComponent,
    PremadeWorkoutComponent,
    HeightAgeWeightComponent,
    RegisterComponent,
    UserGoalsComponent
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
