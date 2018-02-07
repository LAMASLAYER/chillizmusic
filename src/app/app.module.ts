import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MusicsService} from './services/musics.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import {GlobalService} from './services/global.service';
import {AdminService} from './services/admin.service';
import { ProgressionComponent } from './components/progression/progression.component';
import {ReleaseService} from './services/release.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilterPipe,
    SafePipe,
    AdminComponent,
    PanelComponent,
    ProgressionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MusicsService,
    GlobalService,
    AdminService,
    ReleaseService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
