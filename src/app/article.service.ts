import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Article } from './model/article.model';
import { promise } from 'protractor';
import { resolve } from 'url';
import {Observable} from 'rxjs';    
import { ConsoleReporter } from 'jasmine';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  public getArticles(): Promise<Article[]> {
  return  this.http.get(`${environment.baseUrl}/v2/top-headlines?q=bitcoin&apiKey=${environment.apiKey}`)
    .toPromise()
    .then( res => {
      console.log(res)
      return res.articles
    })
    .then(articles => {
      const list = articles.map(article => new Article(
        article.title,
        article.description,
        article.urlToImage 
      ));
      console.log(list)
      return list
    })
    .catch(err => {
      console.log(err, `=> we got an error`)
    })
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient  } from '@angular/common/http';
// import { Article } from './model/article.model';
// import { promise } from 'protractor';
// import { resolve } from 'url';
// import {Observable} from 'rxjs';    
// import { ConsoleReporter } from 'jasmine';



// const baseUrl = "https://newsapi.org";

// @Injectable({
//   providedIn: 'root'
// })
// export class ArticleService {

//   constructor(private http: HttpClient) {

//   }

//   public getArticles(): Promise<Article[]> {
//   return  this.http.get(`${baseUrl}/v2/top-headlines?country=us&apiKey=c50d1d60659b4f708ff93e0d6f6fee13`)
//     .toPromise()
//     .then( res => {
//       console.log(res)
//       return res.articles
//     })
//     .then(articles => {
//       return articles.map(article => {
//         Article.fromJSON(article)
//       });

//     })
//     .catch(err => {
//       console.log(err, `=> we got an error`)
//     })
//   }
// }
