import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewsToolbarComponent } from '../components/news-toolbar/news-toolbar.component';
import { AddNewsPageComponent } from './add-news-page/add-news-page.component';
import { EditNewsPageComponent } from './edit-news-page/edit-news-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    AddNewsPageComponent,
    EditNewsPageComponent
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
