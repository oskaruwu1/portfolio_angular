import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { RemoveDuplicatesPipe } from './pipes/remove-duplicates.pipe';
import { GetYearsPipe } from './pipes/get-years.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    RemoveDuplicatesPipe,
    GetYearsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
