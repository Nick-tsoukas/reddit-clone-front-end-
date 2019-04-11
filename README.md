
  <img align="center" src="https://firebasestorage.googleapis.com/v0/b/client-management-111c5.appspot.com/o/smallPaper.png?alt=media&token=dc4fb6ca-0959-4773-9a98-ed24ae7eaa15" alt="News paper" width="200">


 # Bitcoin News Built With Angluar 

 ### Notes Input Decorator 
  - The App component is responsible for building the articles array 
  - The Articles are built in the constructor function 
  - We will use the @Input decorator to pass this array of Articles to the article list component 
  - see below 
  
``` javascript 
  @Input() articles: Article[];
```

### Input Decorator 
- refactored app and moved the articles from the app component to the app list component 
- no longer need to use the input decorator at this time 


### Notes 
Creating service for fetching data will allow up to pass data between all components not just child components 
  - lets move the article generation to a service
  - When creating services remember to import in the app.module and add in the providers array 
  - This makes the service available to all components if needed 
  - Also we will add a provider in the app component description objects to make app component the root of the service ... not the app.module file ... Learn why 

### Services
  - create public method to get articles in service after the constructor function 
``` javascript 
export class ArticleService {

  constructor() { 

  }

  public getArticles(){
    return [
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

```

### Lifecycle hooks 
- move method to get articles to ngOnIit and out of the constructor 
- This Builds articles anytime the article list component gets mounted 



