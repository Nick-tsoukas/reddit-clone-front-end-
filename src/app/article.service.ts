import { Injectable } from '@angular/core';
import { Article } from './model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { 

  }

  public getArticles(){
    return [
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
