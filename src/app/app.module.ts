import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarService } from './components/sidebar/sidebar.service';
import { ConfigurationService } from './core/configuration/configuration.service';
import { NewsApiService } from './core/services/news-api/news-api.services';
import { SrcappcomponentsnewsToolbarsearchPipe } from './srcappcomponentsnews-toolbarsearch.pipe';
import { createCustomElement } from '@angular/elements';
import { NewsArticleComponent } from './components/news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    SrcappcomponentsnewsToolbarsearchPipe
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SidebarService, NewsApiService, ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el2 = createCustomElement(NewsArticleComponent,
      { injector: this.injector });
    customElements.define('my-own-element-news-article', el2);
  }
}
