import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundedPageComponent } from './not-founded-page/not-founded-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ContactPageComponent,
    NotFoundedPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainPageComponent,
    ContactPageComponent,
    NotFoundedPageComponent
  ],
  providers: [],
})
export class PagesModule {}
