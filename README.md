# fridge controller front-end

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run ```$ bower install``` and ```$ npm install``` to get all components.

Running this will need the REST server on port 3000, started by running:
```json-server db.json --watch``` from the json-server directory.

Run ```$ grunt``` for building and ```$ grunt serve``` for preview.

## Testing

Running ```$ grunt test``` will run the unit tests with karma.

To run the e2e tests, run
```$ grunt serve```
Then change directory to the tests directory and run:
```$ protractor protractor.conf.js```

## Deployment

```
$ grunt build
```
Copy dist folder to server directory
