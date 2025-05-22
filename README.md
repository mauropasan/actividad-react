Aquí están las instrucciones que se deben de seguir para realizar la actividad, se divide en dos partes:
- Sobre el proyecto **(Cómo inicializar o descargar el proyecto)**
- Actividad **(Ejercicio que se ha de realizar)**

# Sobre el proyecto

Esta plantilla se ha realizado a partir del siguiente comando:

```
npm create vite@latest
```

Luego debemos seleccionar React y con la opción de JavaScript. Finalmente ya podemos abrir el proyecto con nuestro Visual Studio Code arrastrando la carpeta del proyecto hacia él.

También puedes descargar este proyecto desde el botón de "Code" y luego "Download ZIP" en el repositorio y con ello, puedes seguir los pasos desde  `Cómo ejecutar la aplicación`.

## Plugins recomendados
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

- [ES7+ React/redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [indent rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

- [VSCode React Refactor](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor)

## Cómo ejecutar la aplicación

Desde el Visual Studio Code, podemos abrir la terminal con Control + Shift + ñ y usamos:

```
npm i
npm run dev
```

El primer comando instala las dependencias necesarias para poder ejecutar la aplicaicón, mientras que el segundo nos permite ver la aplicación en nuestro navegador.

Ya teniendo la aplicación ejecutando, por defecto usa la dirección:
```
localhost:5173
```
Dentro de esta dirección estamos alojando nuestro proyecto. Si la podemos ver, pasamos a la práctica

# Actividad
Crearemos tres componentes y los llamaremos:
- Header
- Footer
- Counter
- Person

Recuerda que los componentes se deben crear dentro de ./src/components/ para una mejor organización del código

## Header
En la cabecera tendremos que poner una lista no ordenada con tres elementos:
- Inicio
- Nosotros
- Contacto

## Footer
En el pié de página, debemos poner un footer y que contenga:

```
<Tu nombre> &copy; 2025 Todos los derechos reservados.
```

## Person

Con el componente, mostraremos el nombre, la edad y la ciudad en la que reside de la siguiente manera:

### Datos a mostrar
Las variables para mostrar son:
- name = "Juan"
- age = 34
- city = "Madrid"

### Formato para mostrar
```
<name>
Edad: <age>
Ciudad: <city>
```
El nombre debe usar h2

La edad como la ciudad usan p

## Counter
### Parte 1
En este componente, añadimos un botón que aumente el valor del contador en 1.
El valor inicial del contador será 0.

### Parte 2
Añadiremos un formulario con un input que nos permita cambiar el valor del contador.