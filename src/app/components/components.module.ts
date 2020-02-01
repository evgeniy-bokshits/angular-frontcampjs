import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NewsToolbarComponent } from './news-toolbar/news-toolbar.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticleAddComponent } from './news-article-add/news-article-add.component';
import { NewsArticleEditComponent } from './news-article-edit/news-article-edit.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
    NewsToolbarComponent,
    NewsContentComponent,
    NewsArticleComponent,
    NewsArticleAddComponent,
    NewsArticleEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
    NewsToolbarComponent
  ],
  providers: [],
})
export class ComponentsModule { }
