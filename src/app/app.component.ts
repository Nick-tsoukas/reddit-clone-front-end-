import { Component, Input} from '@angular/core';


export class Article {

  constructor(
    public title: string,
    public description: string,
    public votes?: number
  ) {
    this.votes = votes || 0;
  }

  public date(): Date {
    return new Date()
  }
  public voteDown():void {
    this.votes = this.votes - 1;
  }
  public voteUp():void {
    this.votes = this.votes + 1;
  }
}

@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
    Sidebar will go here
  </div>
  `
})
export class SidebarComponent {

}


//  app component has the article object .... 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles: Article[];

  constructor() {

    this.articles = [
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
