## Descripción

Proyecto creado con Angular 19 para prueba técnica de SDG Group. 
Es una aplicación que muestra la población de los países por continente y permite filtrarlo por rango de población.

Eeste es el enlace a la aplicacion [https://franruizesc.github.io/prueba-tecnica-SDG-Fran-Ruiz/](https://franruizesc.github.io/prueba-tecnica-SDG-Fran-Ruiz/)

## Tecnologías Utilizadas

* Angular 19.0.4
* Angular CDK 19.2.7
* Jest 1.19.0
* Bootstrap/SCSS
* Highcharts 12.1.2
* ng-mocks 14.13.6 para los unit test con Jest
* node.js 22.12.0

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz.git
    ```

2.  Descargar node desde [página oficial de node](https://nodejs.org/en/download) e instalar la ultima version estable, mínimo la 18.19.1.


3.  Instalar última versión de Angular:
   
    ```bash
    npm install @angular/cli@latest
    ```

4.  Instala las dependencias:

    ```bash
    npm install
    ```

    


## Ejecución

Para ejecutar la aplicación en modo de desarrollo:

```bash
ng serve
 ```

La aplicación estará disponible en \`http://localhost:4200/\`.

## Pruebas (Tests)

Para ejecutar las pruebas unitarias con Jest:

```bash
npm test
```

Ejemplo de un test:

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

## Estructura del Proyecto

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

## El proyecto se compone de varias carpetas: 
* <ins>***components***</ins>: En esta carpeta se encuentran los componentes principales de la aplicación:
	- <ins>***continents***</ins>: Contiene las vistas de cada continente que se muestran al navegar a ellas a trabes del menú o de las miniaturas de main-page.
	- <ins>***main-page***</ins>: Es la página principal del proyecto.

* <ins>***core***</ins>: Contiene los servicios y modelos principales de la app: 
	- <ins>***models***</ins>: Son las interfaces usadas.
	- <ins>***services***</ins>: Contiene el servicio en el que se hacen las peticiones a la API y maneja los datos.
	
*  <ins>***shared***</ins>: Es la carpeta en la que se encuentran los elementos comunes para los componentes principales y poderlos reutilizar sin repetir código.
	- <ins>***components***</ins>: Son los componentes comunes donde se muestran los datos que se utilizan en los componentes principales.
	- <ins>***services***</ins>: Aquí está el chart-config que se encarga de la configuración de las charts.
	
*  <ins>***assets***</ins>: Contiene las imágenes utilizadas en la aplicación.
	
	
## Funcionalidades Destacadas
* <ins>***Pantalla de inicio***</ins>: muestra una gráfica con la población de cada continente. También muestra unas cards con la misma información. Al clickar sobre la tarjeta navegará al continente seleccionado.

![home](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/243a3a644414529aecfd30186984cdebba97b9d8/home.jpg)


* <ins>***Menu de navegación***</ins>: permite navegar entre los distintos continentes. El seleccionar uno se resalta el seleccionado con un color, en este caso el morado.

![navbar](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/navbar.jpg)

* <ins>***Filtro***</ins>: permite introducir un rango de población, esto actualiza la vista mostrando solo los continentes o países que estén dentro de ese rango.

![filter](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/filters.jpg)

![filtered](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/filter.jpg)

* <ins>***Validación de inputs***</ins>: no permite introducir un mínimo igual o menor que el mayor. Se muestra un mensaje error indicándolo.
  
* <ins>***Vista detalle***</ins>: muestra una gráfica con la población por paises del continente correspondiente.

![continent](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/africa.jpg)

* <ins>***Not found***</ins>: se muestra cuando no hay resultados al filtrar..

![not found](https://github.com/FranRuizEsc/prueba-tecnica-SDG-Fran-Ruiz/blob/30e1909ae15490ff4e7fa191e6b41ede5e2a5e3d/notFound.jpg)

## Despliegue

* Para desplegar la aplicación he usado angular-cli-ghpages que permite el desplegue en github pages
	
* Instalación: 

```bash
npm i angular-cli-ghpages
ng add angular-cli-ghpages
```
		
* Implementación en gh-pages: 
	
```bash
ng deploy --base-href://<nombre de usuario>.github.io/<nonbre del proyecto>/
```
		
* Una vez se haya desplegado la aplicación diríjase al repositorio de GitHub y en la sección setting ir a pages y al inicio de la página estará la url de la aplicación.
		
	
## Metodología de ágil para el desarrollo: 

* Para la organización de las tareas durante el desarrollo, utilicé [Jira](https://franruizes.atlassian.net/jira/software/projects/SDG/boards/3).

* En el tablón hay 5 columnas: 
	- TODO: Es donde creo todas las tareas por hacer durante el desarrollo de la aplicación.
	- IN PROGRESS: cuando la tarea está en desarrollo.
	- QA: realizo una prueba de la aplicación para comprobar que todo funciona correctamente después del desarrollo.
	- READY TO MERGE: una vez pasado QA creo una PR donde reviso el código nuevo implementado para prevenir errores.
	- DONE: la tarea ya está mergeada con development.
