import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {
@Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
