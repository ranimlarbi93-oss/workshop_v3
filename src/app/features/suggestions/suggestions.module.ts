import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';

import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';

<<<<<<< HEAD
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 675f67088f207cdbd41b08881ce0744b16a5befa



@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
<<<<<<< HEAD
    SuggestionDetailsComponent,
    SuggestionFormComponent
=======
    SuggestionDetailsComponent
>>>>>>> 675f67088f207cdbd41b08881ce0744b16a5befa
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> 675f67088f207cdbd41b08881ce0744b16a5befa
  ]
})
export class SuggestionsModule { }
