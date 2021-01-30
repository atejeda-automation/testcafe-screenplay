![Tested with TestCafe](https://img.shields.io/badge/Screenplay%20with-TestCafe-2fa4cf.svg) ![Alfred Tejeda](https://img.shields.io/badge/By-Alfred%20Tejeda-succes)

# TestCafé - Screenplay
Proyecto de ejemplo dónde se trata implementar de una manera sencilla el patrón screenplay, utilizando TestCafé como framework de pruebas. 
También se muestra como utilizar variables de entorno dejando valores por defecto en caso de no existir un archivo `.env` o variables no definidas.
Por último, se usará [Allure](http://allure.qatools.ru/) como reporte. 

## Pre requisitos:
1. Descargar e instalar [Node.js](https://nodejs.org/es/download/) V10 o superior.
2. Descargar e instalar [Java JDK](https://www.oracle.com/technetwork/es/java/javase/downloads/index.html) (Se debe agregar java al PATH)
3. Opcional: Descargar e instalar [Git](https://git-scm.com/downloads).

## Instalación:
1. Descargar el .zip o clonar este proyecto: 
```sh 
git clone https://github.com/atejeda-automation/testcafe-screenplay.git
```
2. Ubicarse dentro de la carpeta del proyecto e instalar las dependencias, para ello ejecutar desde la terminal (Si estas en windows utilizar Git Bash): 
```sh
npm install
```

## Ejecución:
> Los comandos de prueba se encuentran definidos en el archivo `package.json`
1. Ejecución modo headless:
```sh
npm test
```
2. Ejecución sin el modo headless:
```sh
npm run test:no-headless
```

## Reporte:
Una vez ejecutadas las pruebas se creará el directorio `/allure`, para visualizar el reporte se debe de ejecutar el comando:
```sh
npm run allure
```

## Arquitectura:
```
testcafe-screenplay
├─ src
   ├─ helpers
   │  └─ copies.js
   ├─ questions
   │  └─ login.js
   ├─ tasks
   │  └─ login.js
   ├─ tests
   │  └─ login.js
   └─ ui
      └─ login.js
```

### helpers
Este directorio no hace parte de screenplay, pero dentro él se pueden agregar (coomo en este ejemplo) los copies de la aplicación asi como los enums que necesitemos, entre otros.

### questions
Dentro de questions encontramos las clases y métodos que nos ayudan a realizar nuestras validaciones, aserciones o resultado esperado.

### tasks
Dentro de este directorio encontramos las clases y métodos en las que definimos las tareas que se realizan a nivel de negocio.

### tests
Dentro de este directorio incluimos todos nuestros archivos de pruebas.

### ui
Dentro de este directorio incluiremos los archivos en los que declaramos nuestros elementos.
