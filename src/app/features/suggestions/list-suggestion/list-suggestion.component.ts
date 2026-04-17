import { Component } from '@angular/core';
// @ts-ignore
import { Suggestion } from 'src/app/models/suggestion';


@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée...',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un\n' +
        'système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d`un prgm de récompenses pour motiver les employés\n' +
        'et reconnaître leurs efforts ',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes:0
    },
    {
      id: 4,
      title: 'Moderniser l`interface utilisateur',
      description: 'Refonte complète de l interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes:0
    }
  ];

  favorites: Suggestion[] = [];

  like(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    this.favorites.push(s);
  }

  searchText: string = '';

  ngOnInit() {
    const data = localStorage.getItem('suggestions');
    if (data) {
      const nouvellesSuggestions = JSON.parse(data);
      this.suggestions = [...this.suggestions, ...nouvellesSuggestions];
    }
  }
}
