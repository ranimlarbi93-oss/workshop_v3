import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// @ts-ignore
import { Suggestion } from 'src/app/models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {


  form!: FormGroup;

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z].*')
      ]],
      description: ['', [
        Validators.required,
      ]],
      category: ['', Validators.required],
      date: ['', Validators.required],
      status: ['en_attente', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {

      const newSuggestion: Suggestion = {
        id: Date.now(), // auto id simple
        ...this.form.getRawValue(),
        nbLikes: 0
      };

      // ⚠️ IMPORTANT (sans service)
      let suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
      suggestions.push(newSuggestion);
      localStorage.setItem('suggestions', JSON.stringify(suggestions));

      this.router.navigate(['/suggestions']);
    }
  }
}
