import { Injectable } from '@angular/core';
import { Article } from './model/article.model';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() {

  }

  public getArticles(): Promise<Article[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
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
        ])
      }, 1000)
    },
    )
  }
}
