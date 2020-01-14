import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarService } from './components/sidebar/sidebar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
