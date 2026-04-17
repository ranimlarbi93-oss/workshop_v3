import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import { Suggestion } from 'src/app/models/suggestion';


@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {


  suggestion?: Suggestion;
  constructor(
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.suggestion = history.state.suggestion;
  }


  //id!: number;
  //
  // constructor(private route: ActivatedRoute) {}
  //
  // ngOnInit() {
  //   this.id = Number(this.route.snapshot.paramMap.get('id'));
  // }
}
