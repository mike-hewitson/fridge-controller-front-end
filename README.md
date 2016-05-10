# fridge controller front-end

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run ```$ bower install``` and ```$ npm install``` to get all components.

Running this will need the REST server on port 3000, started by running:
```json-server db.json --watch``` from the json-server directory.

Run ```$ grunt``` for building and ```$ grunt serve``` for preview.

## Testing

### Unit Testing

Running ```$ grunt test``` will run the unit tests with karma.
Does not need server as the back end is mocked out.
Coverage reporting is in the build directory under /reports/coverage.

### E2E Testing

Requires the REST server on port 3000, started by running:
```$ json-server db.json --watch``` from the json-server directory.

To run the e2e tests, run in the main directory:
```$ grunt serve```

Then change directory to the tests directory and run:
```$ protractor protractor.conf.js```

### Linting

The JSHint reporting comes out from running the server
```$ grunt serve```

## Deployment

Change the environment to point to the right rest server.

```
$ grunt build
```
Copy dist folder to server directory
