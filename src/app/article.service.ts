import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Article } from './model/article.model';
import { Observable, BehaviorSubject } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  public _makeHttpRequest(): Observable<any>{
    return this.http
      .get(`${environment.baseUrl}/v2/top-headlines?q=bitcoin&apiKey=${environment.apiKey}`)
        .pipe(
          map(res => {
           return res
          })
        )

 }


}


// public getArticles(){
//   return  fetch(`${environment.baseUrl}/v2/top-headlines?q=bitcoin&apiKey=${environment.apiKey}`)
//    .then(res => {
//      return res.json();
//    })
//    .then(data => {
//     return data.articles.map(article => {
//       return new Article(
//         article.title,
//         article.description,
//         article.urlToImage
//       )
//     })
//    })
//  }
