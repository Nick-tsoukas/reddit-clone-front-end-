import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  name : string;


  upvote(){
    this.article.voteUp();
  }

  downvote(){
    this.article.voteDown();
  }
  constructor() { }

  ngOnInit() {
    this.name = "nick"
  }

}
