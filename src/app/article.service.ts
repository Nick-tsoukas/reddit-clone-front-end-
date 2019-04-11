import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Article } from './model/article.model';
import { promise } from 'protractor';
import { resolve } from 'url';
import { Observable } from 'rxjs';    
import { environment } from '../environments/environment'
import { from } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  public getArticles(){
   return  fetch(`${environment.baseUrl}/v2/top-headlines?q=bitcoin&apiKey=${environment.apiKey}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
     return data.articles.map(article => {
       return new Article(
         article.title,
         article.description,
         article.urlToImage
       )
     })
    })
  }
}
