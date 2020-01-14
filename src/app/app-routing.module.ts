import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundedPageComponent } from './pages/not-founded-page/not-founded-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent, data: { type: 'main' } },
  { path: 'contact', component: ContactPageComponent, data: { type: 'contact' } },
  { path: '404', component: NotFoundedPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
