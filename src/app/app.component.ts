import { Component, Input} from '@angular/core';
import { Article } from './model/article.model';


//  app component has the article object .... 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  //  The App component is responsible for building the articles array 
  //  The Articles are built in the constructor function 
  // We will use the @Input decorator to pass this array of Articles to the article list component 


  constructor() {

    this.articles = [
      new Article(
        'The Angular 2 Screencast',
        'Learning Angular by building a redit clone with fullstack.io',
        10

      ),
      new Article(
        'The Angular 2 Course Update ',
        'Building PWAs with angular '

      ),
      new Article(
        'Components In Angular',
        'How to pass data from one component to another'

      ),
      new Article(
        'Build Your first Fullstack application with anglur',
        'Using good firestore to build a serverless appication'
      ),
    ];

  }
}
