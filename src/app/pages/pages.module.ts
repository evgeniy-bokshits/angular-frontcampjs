import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ContactPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainPageComponent,
    ContactPageComponent,
    NotFoundPageComponent
  ],
  providers: [],
})
export class PagesModule {}
