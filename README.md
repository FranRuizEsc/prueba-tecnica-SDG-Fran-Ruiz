## Description

Project created with Angular 19 for SDG Group technical test.  
It is an application that shows the population of countries by continent and allows filtering by population range.

The application is deployed and can be seen in the [app link](https://franruizesc.github.io/prueba-tecnica-SDG-Fran-Ruiz/)

## Technologies Used

* Angular 19.0.4
* Angular CDK 19.2.7
* Jest 1.19.0
* Bootstrap/SCSS
* Highcharts 12.1.2
* ng-mocks 14.13.6 for unit tests with Jest.
* node.js 22.12.0

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz.git
    ```

2.  Download node from [node official website](https://nodejs.org/en/download) and install the latest stable version, at least 18.19.1.


3.  Install last Angular version:
   
    ```bash
    npm install @angular/cli@latest
    ```

4.  Install dependencies:

    ```bash
    npm install
    ```

    


## Execution

* To run the application in development mode:

```bash
ng serve
 ```

* The application is available in \`http://localhost:4200/\`.

## Pruebas (Tests)

* To run unit tests with Jest:

```bash
npm test
```

* Example of a test:

```typescript
// src/app/components/main-page/main-page.spec.ts

import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MockProvider(ActivatedRoute),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Project Structure

```
	src
	 ┣ app
	 ┃ ┣ components
	 ┃ ┃ ┣ continents
	 ┃ ┃ ┃ ┣ africa
	 ┃ ┃ ┃ ┃ ┣ africa.component.html
	 ┃ ┃ ┃ ┃ ┣ africa.component.scss
	 ┃ ┃ ┃ ┃ ┣ africa.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ africa.component.ts
	 ┃ ┃ ┃ ┣ antarctica
	 ┃ ┃ ┃ ┃ ┣ antarctica.component.html
	 ┃ ┃ ┃ ┃ ┣ antarctica.component.scss
	 ┃ ┃ ┃ ┃ ┣ antarctica.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ antarctica.component.ts
	 ┃ ┃ ┃ ┣ asia
	 ┃ ┃ ┃ ┃ ┣ asia.component.html
	 ┃ ┃ ┃ ┃ ┣ asia.component.scss
	 ┃ ┃ ┃ ┃ ┣ asia.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ asia.component.ts
	 ┃ ┃ ┃ ┣ europe
	 ┃ ┃ ┃ ┃ ┣ europe.component.html
	 ┃ ┃ ┃ ┃ ┣ europe.component.scss
	 ┃ ┃ ┃ ┃ ┣ europe.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ europe.component.ts
	 ┃ ┃ ┃ ┣ north-america
	 ┃ ┃ ┃ ┃ ┣ north-america.component.html
	 ┃ ┃ ┃ ┃ ┣ north-america.component.scss
	 ┃ ┃ ┃ ┃ ┣ north-america.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ north-america.component.ts
	 ┃ ┃ ┃ ┣ oceania
	 ┃ ┃ ┃ ┃ ┣ oceania.component.html
	 ┃ ┃ ┃ ┃ ┣ oceania.component.scss
	 ┃ ┃ ┃ ┃ ┣ oceania.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ oceania.component.ts
	 ┃ ┃ ┃ ┗ south-america
	 ┃ ┃ ┃ ┃ ┣ south-america.component.html
	 ┃ ┃ ┃ ┃ ┣ south-america.component.scss
	 ┃ ┃ ┃ ┃ ┣ south-america.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ south-america.component.ts
	 ┃ ┃ ┗ main-page
	 ┃ ┃ ┃ ┣ main-page.component.html
	 ┃ ┃ ┃ ┣ main-page.component.scss
	 ┃ ┃ ┃ ┣ main-page.component.spec.ts
	 ┃ ┃ ┃ ┗ main-page.component.ts
	 ┃ ┣ core
	 ┃ ┃ ┣ model
	 ┃ ┃ ┃ ┗ continent-population.interface.ts
	 ┃ ┃ ┗ services
	 ┃ ┃ ┃ ┣ countries.service.spec.ts
	 ┃ ┃ ┃ ┗ countries.service.ts
	 ┃ ┣ environments
	 ┃ ┃ ┣ environment.prod.ts
	 ┃ ┃ ┗ environmet.ts
	 ┃ ┣ shared
	 ┃ ┃ ┣ components
	 ┃ ┃ ┃ ┣ card-info
	 ┃ ┃ ┃ ┃ ┣ card-info.component.html
	 ┃ ┃ ┃ ┃ ┣ card-info.component.scss
	 ┃ ┃ ┃ ┃ ┣ card-info.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ card-info.component.ts
	 ┃ ┃ ┃ ┣ charts
	 ┃ ┃ ┃ ┃ ┣ charts.component.html
	 ┃ ┃ ┃ ┃ ┣ charts.component.scss
	 ┃ ┃ ┃ ┃ ┣ charts.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ charts.component.ts
	 ┃ ┃ ┃ ┣ continent-details
	 ┃ ┃ ┃ ┃ ┣ continent-details.component.html
	 ┃ ┃ ┃ ┃ ┣ continent-details.component.scss
	 ┃ ┃ ┃ ┃ ┣ continent-details.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ continent-details.component.ts
	 ┃ ┃ ┃ ┣ navbar
	 ┃ ┃ ┃ ┃ ┣ navbar.component.html
	 ┃ ┃ ┃ ┃ ┣ navbar.component.scss
	 ┃ ┃ ┃ ┃ ┣ navbar.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ navbar.component.ts
	 ┃ ┃ ┃ ┗ population-filter
	 ┃ ┃ ┃ ┃ ┣ population-filter.component.html
	 ┃ ┃ ┃ ┃ ┣ population-filter.component.scss
	 ┃ ┃ ┃ ┃ ┣ population-filter.component.spec.ts
	 ┃ ┃ ┃ ┃ ┗ population-filter.component.ts
	 ┃ ┃ ┗ services
	 ┃ ┃ ┃ ┣ chart-config.service.spec.ts
	 ┃ ┃ ┃ ┗ chart-config.service.ts
	 ┃ ┣ app.component.html
	 ┃ ┣ app.component.scss
	 ┃ ┣ app.component.spec.ts
	 ┃ ┣ app.component.ts
	 ┃ ┣ app.config.ts
	 ┃ ┗ app.routes.ts
	 ┣ assets
	 ┃ ┣ africa.png
	 ┃ ┣ antarctic.png
	 ┃ ┣ asia.png
	 ┃ ┣ europe.png
	 ┃ ┣ logo.png
	 ┃ ┣ northAmerica.png
	 ┃ ┣ oceania.png
	 ┃ ┗ southAmerica.png
	 ┣ index.html
	 ┣ main.ts
	 ┗ styles.scss
```

## The project consists of several folders: 
* <ins>***components***</ins>: This folder contains the main components of the application:
	- <ins>***continents***</ins>: Contains the views of each continent that are displayed when navigating to them through the menu or main-page thumbnails.
	- <ins>***main-page***</ins>: This is the main page of the project.

* <ins>***core***</ins>: Contains the app's main services and models: 
	- <ins>***models***</ins>: In this case have the interfaces.
	- <ins>***services***</ins>: It contains the service in which the API requests are made and handles the data.
	
*  <ins>***shared***</ins>: This is the folder where the common elements for the main components are located and can be reused without repeating code.
	- <ins>***components***</ins>: These are the common components where the data used in the main components are displayed.
	- <ins>***services***</ins>: Here is the chart-config that takes care of the chart configuration.
	
*  <ins>***assets***</ins>: Contains the images used in the application.
	
	
## Featured Functionalities
* <ins>***Init page***</ins>: shows a graph with the population of each continent. It also displays cards with the same information. Clicking on the card navigates to the selected continent.

![home](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/243a3a644414529aecfd30186984cdebba97b9d8/home.jpg)


* <ins>***Navigation menu***</ins>: allows you to navigate between the different continents. When you select one, the selected one is highlighted with a color, in this case purple.

![navbar](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/navbar.jpg)

* <ins>***Filter***</ins>: allows you to enter a population range, this updates the view showing only the continents or countries that fall within that range.

![filter](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/filters.jpg)

![filtered](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/filter.jpg)

* <ins>***Inputs validation***</ins>: does not allow you to enter a minimum equal to or less than the largest. An error message appears indicating this.
  
* <ins>***Detail view***</ins>: shows a graph with the population by country of the corresponding continent.

![continent](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/africa.jpg)

* <ins>***Not found***</ins>: displayed when there are no results when filtering.

![not found](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/notFound.jpg)

## Deployment

* To deploy the application I used angular-cli-ghpages which allows the deployment in github pages.
	
* Instalation: 

```bash
npm i angular-cli-ghpages
ng add angular-cli-ghpages
```
		
* Implementation with gh-pages: 
	
```bash
ng deploy --base-href://<user name>.github.io/<project name>/
```
		
* Once the application is deployed go to the GitHub repository and in the configuration section go to pages and at the top of the page will be the url of the application.
		
	
## Agile methodology for development:

* For the organization of the tasks during the development, I used [Jira](https://franruizes.atlassian.net/jira/software/projects/SDG/boards/3).

* The board has 5 columns:
	- TODO: This is where I create all the tasks to be performed during the development of the application.
	- IN PROGRESS: when the task is in development.
	- QA: I perform a test of the application to check that everything works correctly after development.
	- READY TO MERGE: once QA is passed I create a PR where I review the newly implemented code to prevent bugs.
	- DONE: the task is already merged with development.
