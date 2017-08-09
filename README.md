# aPayment Frontend


The frontend has been implemented using the Angular framework. To make the frontend responsive and usable on a tablet, Bootstrap has been used as the HTML, CSS and JS framework.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli).


## Prerequisites
* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

## Local Development
To run the frontend locally, following commands are required:
```sh
# Clone repository
git clone git@github.com:scmo/apayment-web.git

# Navigate into project and download dependencies
cd apayment-web && npm install

# Builds and serves the frontend. rebuilding on file changes
npm start
```
After building the frontend, the development server is listening on `http://localhost:
4200`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment
To build and deploy the frontend, following commands are necessary:
```sh
# Builds the frontend and places it into the /dist folder
npm run build-prod

# Transfer builded files to webserver
scp -r dist/ <user@host>:/var/www/apayment/html
```

## [Live](https://apayment.ch)
