import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { InspiringVoteComponent } from './inspiring-vote/inspiring-vote.component';
import { TerribleVoteComponent } from './terrible-vote/terrible-vote.component';
import { FormsModule } from '@angular/forms';
import { VoteHighlightDirective } from './vote-highlight.directive';
import { CountdownPipe } from './countdown.pipe';
import { DateAgoPipe } from './date-ago.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomePageComponent,
    QuoteComponent,
    QuoteDetailComponent,
    InspiringVoteComponent,
    TerribleVoteComponent,
    VoteHighlightDirective,
    CountdownPipe,
    DateAgoPipe,
    HighlightDirective],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
