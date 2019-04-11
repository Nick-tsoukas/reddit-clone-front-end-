import { Component, Input} from '@angular/core';
import { Article } from './model/article.model';
import { ArticleService } from './article.service';


//  app component has the article object .... 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ArticleService
  ]
})
export class AppComponent {}
