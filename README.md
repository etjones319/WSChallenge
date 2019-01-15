# Williams Sonoma Coding Challenge
## Author: Eric Jones

#### Running the server
The appication uses http-server, and can be initilaized with:
```
npm start
```
Once this is done, navigate in your browser to localhost:8080 to view the web application

#### Making changes to js files
The application uses webpack and babel to compile ES6 code changes. 
Webpack is pointed at main.js wite destination at dist/bundle.js
Compiling can be done with
```
npm run webpack
```

#### Runing unit tests
I used mocha with jsdom in order to test exported functions with the main.js file.
Testing can be done with:
```
npm run test
```

## Next Step and things to do
Although the application is in a working spot, there is always room for improvement.  Continuing this project, I would like to add the following:
1. More robust unit tests
  - Check for http statuses, error handling with misformed JSON, etc.
2. UI Cleanup
  - Screen resizing could be smoother, cosmetically could be improved
3. Additional feature in image slider
  - After clicking an image, need to add dots or numbers designating where user is in relation to other images for slider
  
