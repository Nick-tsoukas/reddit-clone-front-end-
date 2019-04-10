import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  upvote(){
    this.article.voteUp();
  }

  downvote(){
    this.article.voteDown()
  }
  constructor() { }

  ngOnInit() {
  }

}
