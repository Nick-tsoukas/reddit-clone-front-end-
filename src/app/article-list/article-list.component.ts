import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {
  private articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {

    // this.articles = this.articleService._makeHttpRequest()
    this.articleService._makeHttpRequest()
    .subscribe(val => {
      this.articles = val.articles;
    })

    // this.articleService.getArticles()
      // .then(articles => this.articles = articles);
  }

}

