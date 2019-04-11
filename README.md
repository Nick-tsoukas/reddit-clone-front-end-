
  <img align="center" src="https://firebasestorage.googleapis.com/v0/b/client-management-111c5.appspot.com/o/smallPaper.png?alt=media&token=dc4fb6ca-0959-4773-9a98-ed24ae7eaa15" alt="News paper" width="200">


 # Reditclone Built With Angluar 

 ### Notes 
  - The App component is responsible for building the articles array 
  - The Articles are built in the constructor function 
  - We will use the @Input decorator to pass this array of Articles to the article list component 
  - see below 
  
``` javascript 
  @Input() articles: Article[];
```

### Notes 
Creating service for fetching data will allow up to pass data between all components not just child components 
  - lets move the article generation to a service



