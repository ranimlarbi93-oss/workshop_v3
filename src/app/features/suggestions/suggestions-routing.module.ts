import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
<<<<<<< HEAD
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent  },
  { path: 'add', component: SuggestionFormComponent },
  { path: ':id', component: SuggestionDetailsComponent },
=======

const routes: Routes = [
  { path: '', component: ListSuggestionComponent  },
  { path: ':id', component: SuggestionDetailsComponent }
>>>>>>> 675f67088f207cdbd41b08881ce0744b16a5befa
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
