import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {SitterListComponent} from './app/sitter-list/sitter-list.component';
import {SitterDetailComponent} from './app/sitter-detail/sitter-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ModifySitterComponentComponent} from './app/modify-sitter-component/modify-sitter-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/sitters', pathMatch: 'full' },
  { path: 'sitters', component: SitterListComponent },
  { path: 'sitters/:id', component: SitterDetailComponent },
  {path: 'modify-sitter', component: ModifySitterComponentComponent},
  {path: 'modify-sitter/:id', component: ModifySitterComponentComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()],
});
