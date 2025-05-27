Aquí están las instrucciones que se deben de seguir para realizar la actividad, se divide en dos partes:
- Sobre el proyecto **(Cómo inicializar o descargar el proyecto)**
- Actividad **(Ejercicio que se ha de realizar)**

# Sobre el proyecto

Esta plantilla se ha realizado a partir del siguiente comando:

```
npm create vite@latest
```

Estas son las dependencias que hacen falta para realizar la actividad si decides inicializarla por tu cuenta:
```
npm i axios@latest
npm i bootstrap@latest
npm i bootstrap-icons@latest
npm i wouter@latest
npm i zustand@latest
```
Y para importar las bibliotecas de Bootstrap y Bootstrap icons, hay que añadir estas líneas en main.jsx:
```
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
```

Seleccionaremos React (JavaScript) y con eso ya podemos abrir el proyecto con nuestro Visual Studio Code arrastrando la carpeta del proyecto hacia él.</br>
También puedes descargar este proyecto desde el botón de "Code" y luego "Download ZIP" en el repositorio y con ello, puedes seguir los pasos desde  `Cómo ejecutar la aplicación`.

> [!NOTE]
> Estos son plugins que se recomiendan para facilitar la experiencia de programación con React

> [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Nos permite ver qué errores se produce en la línea</br>
>[ES7+ React/redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Permite a Visual Studio Code entender la síntaxs de React</br>
> [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) - El mismo que el anterior, pero sólo para React (los dos funcionan bien en conjunto)</br>
> [indent rainbow (opcional)](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - Hace más visual la indentación para un código más estético</br>
> [VSCode React Refactor (opcional)](https://marketplace.visualstudio.com/items?itemName=planbcoding.vscode-react-refactor) - Añade acciones de refactorización de React

> [!NOTE]
> Estos son plugins que se recomiendan para poder monitorizar o mostrar los datos de React de una manera simplificada para los componentes, variables, hooks...

> React Developer Tools ([Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es), [Firefox](https://addons.mozilla.org/es-ES/firefox/addon/react-devtools/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search))

## Cómo ejecutar la aplicación

Desde el Visual Studio Code, podemos abrir la terminal con Control + Shift + Ñ y usamos:

```
npm i
npm run dev
```

El primer comando instala las dependencias necesarias para poder ejecutar la aplicaicón, mientras que el segundo nos permite ver la aplicación en nuestro navegador.

Ya teniendo la aplicación ejecutando, por defecto usa `localhost:5173`.</br>
Dentro de esta dirección estamos alojando nuestro proyecto.<br/>
Si la vemos, podemos pasar a la práctica.

# Actividad
## Componentes
Tenemos los siguientes componentes ya creados:

> Header<br/>
> Footer

Y por otra parte, crearemos tres componentes y los llamaremos:

> Counter</br>
> User</br>
> ToDo

> [!TIP]
> Recuerda crear una carpeta llamada components para poner los componentes ahí<br/>

A continuación, una explicación breve de cómo modificar los componentes mencionados.

### Header
En la cabecera tenemos una lista no ordenada con dos elementos:
- Inicio
- Usuarios

Cada elemento tendrá un enlace para cada vista, más en adelante se explican las vistas.

### Footer
En el pié de página, tenemos lo siguiente:

```
Tu nombre © 2025 Todos los derechos reservados.
```

Se debe reemplazar "Tu nombre" por tu nombre, no se cambia dentro el componente, si no pasándolo por parámetro en el componente Footer, es decir, el nombre se recibe como parámetro y se muestra en "Tu nombre".

### Counter
#### Parte 1
En este componente, añadimos un botón que aumente el valor del contador en 1 y otro que disminuye 1.<br/>
El valor inicial del contador será 0 y las funciones que modifican el estado del contador se realizan dentro de este componente.

#### Parte 2
Añadiremos un formulario con un input que nos permita cambiar el valor del contador. Lo mismo pasa con la parte 1, se harán las funciones necesarias dentro del componente para manejar el comportamiento del formulario y modificar la variable del input y contador.

> [!NOTE]
> Deberemos usar useState() para modificar la variable contador.

### User
Este componente recibe por parámetro un usuario para mostrar, y el formato de mostrar debe ser así:
```
<Nombre>
  Usuario: <Nombre de usuario>
  Correo electrónico: <Correo electrónico>
  Teléfono: <Teléfono>
```

> [!TIP]
> Dentro de las <> se sustituirán por las variables que recibe el parámetro usuario. Además, usando la biblioteca de Bootstrap, puedes hacer que quede más estético fácilmente.

### ToDo
En este componente, haremos una lista de tareas sencilla, teniendo en cuenta que hay que añadir un formulario y que dentro tenga un input para el string de la tarea y además un botón de añadir que permitirá añadir la tarea, y en cuanto a la implementación de las tareas, será un array, y cada elemento del array será una tarea con el string de la tarea y un boolean para determinar si está hecha o no la tarea. Es algo así:
- Tareas
  - Tarea
    - string: texto
    - boolean: hecha<br/>
  - Tarea<br/>
  - Tarea<br/>
  ...
> [!IMPORTANT]
> En las funciones de añadir tareas y marcar como hechas, hay que usar { ...task, done: !task.done } para que el string de la tarea no se modifique.

## Vistas
Crearemos las siguientes vistas:
- Home
- Users

> [!NOTE]
> Recuerda que a diferencia de los componentes, las vistas se crean en una carpeta llamada views

A continuación una explicación breve sobre qué hacer en cada vista

### Inicio
Crearemos un h1 con el título "Inicio" y además añadiremos los componentes Counter y ToDo

### Usuarios

Aquí haremos uso de la función map() para iterar sobre lo usuarios y dentro de la iteración, añadiremos el componente usuario, pasándole el parámetro usuario.

> [!IMPORTANT]
> Para implementar la función map, deberemos tener la store creada, la cual se menciona cómo hacerla más en adelante.

## Store
Crearemos una store llamada index.jsx dentro de la carpeta store e implementaremos la siguiente función llamada useUserStore para almacenar los usuarios:

- Variables
   - data: null
   - isLoading: false
   - error: null
- Funciones
   - fetchData: async ()

> [TIP]
> Recuerda que se debe usar una función anónima con la función set para añadir los usuarios a la store (ej.: export const useUser store((set) => ({ <Todas las variables van aquí> })))