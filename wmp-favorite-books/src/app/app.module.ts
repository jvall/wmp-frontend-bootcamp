import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdSidenavModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { BookService } from './services/book.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  {
    path: '**',
    redirectTo: '/search',
  },
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookCardComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
