# Sprint5 Caricaturas clásicas
# Verenice Alitzel Alba Hernández
# 1. Descripción
Este proyecto simula una plataforma de streaming de caricaturas clásicas, enfocándose en ofrecer una navegación clara y funcional. Desde el inicio, el usuario puede registrarse o iniciar sesión; tras autenticarse, accede a una vista principal donde destaca la barra de navegación. Al seleccionar un género desde el menú desplegable, se muestran solo las caricaturas correspondientes, permitiendo una experiencia personalizada. La reorganización del proyecto facilitó la implementación de estas funciones clave.

# 2. Objetivo
El objetivo de esta actividad es desarrollar una plataforma interactiva para el consumo de caricaturas clásicas, que permita la navegación por géneros a través de una interfaz clara y funcional. Como parte central del proyecto, se diseñó y construyó una base de datos en T-SQL, la cual se integró al sistema para habilitar el registro e inicio de sesión de usuarios. Además, se implementó la documentación de la API utilizando Swagger, con el propósito de facilitar la visualización, prueba e integración de los distintos endpoints desarrollados en el backend.

# 3. Mockup inicial
![image](https://github.com/user-attachments/assets/366a22b8-1157-4c57-8dbc-623dc75f7552)

# 4. Capturas de pantalla del proyecto en ejecución
Al ingresar al sitio aparece en pantalla iniciar sesión donde pide los datos del usuario para poder ingresar, de igual forma da las opciones de registrarse si aun no tiene una cuenta.
![Captura de pantalla 2025-05-20 120149](https://github.com/user-attachments/assets/7ae16e58-3ee7-41fc-b399-f90ce6184bad)

Si no tienes una cuenta creada o registrada este marcara error al querer iniciar sesión con datos que no han sido previamente registrados.
![Captura de pantalla 2025-05-20 121702](https://github.com/user-attachments/assets/9853831c-180b-4d9c-a881-515e0370689b)

Dando click al link de "Regístrate aquí" desplegará los campos necesarios a llenas, como el nombre de usuario, correo y contraseña, llenados estos campos registras usuario y ya quedan almacenados los datos.
![Captura de pantalla 2025-05-20 121500](https://github.com/user-attachments/assets/119886e6-8c7d-4703-b6b1-dc2f592dd8fc)

Si intentas darle click nuevamente al usuario ya registrado te marcara error, debido a que ya existe este usuario.
![Captura de pantalla 2025-05-20 121516](https://github.com/user-attachments/assets/ccd7151e-ddbd-4833-85a5-c0f6576d0463)

Al iniciar sesión correctamente automáticamente te mandara a la pagina de inicio para seleccionar el genero que deseas ver.
![Captura de pantalla 2025-05-20 121612](https://github.com/user-attachments/assets/c33beb94-5040-424b-8c7b-c77cda4e287e)

# 5. Instrucciones de como alguien que descargue el repo pueda instalarlo
Verificar si se tiene git instalado Abre la terminal en tu dispositivo e ingresa el siguiente comando git --version Si te regresa una versión como git version 2.40.1, significa que ya lo tienes. Si te dice que el comando no se reconoce, entonces necesitas instalarlo. Copia la URL del repositorio que se quiere clonar. Ya que tienes la URL, abre la terminal y clona el repositorio con el siguiente comando git clone anexa la url del repositorio. Con esto git va a empezar a descargar todo el contenido del repositorio en una carpeta con el mismo nombre. Git lo genera en automatico. Cuando termine de clonar, cambia de directorio con el siguiente comando: cd nombre-del-repositorio. Aquí es donde vas a trabajar todo el tiempo. Siempre que vayas a hacer git status, git pull, git commit o cualquier otro comando, asegúrate de estar dentro de esta carpeta. Por ultimo, para asegurarte que se clonó bien ejecuta git status.

# 6. Dependencia o bibliotecas utilizadas
@angular/*: Todos los módulos principales de Angular. bootstrap: Para el diseño y estilos CSS. express: Usado probablemente para el server-side rendering (SSR) con Angular Universal. rxjs: Para programación reactiva en Angular. zone.js: Angular lo usa para detectar cambios. tslib: Soporte para TypeScript.
@angular/cli, @angular-devkit/build-angular: Herramientas para compilar, servir y crear proyectos Angular. jasmine, karma, @types/*: Librerías y tipados para pruebas unitarias. typescript: El compilador TS que Angular necesita para funcionar. @types/node, @types/express: Tipados de TypeScript para que el editor/autocompletado funcione bien al escribir código de servidor.

# 7. Descripción de como lo hice
Debido a que la mejora principal que realicé en mi proyecto fue reorganizar la estructura de carpetas dentro de Visual Studio Code para lograr un funcionamiento más claro y ordenado, opté por clonar nuevamente el repositorio. Sin embargo, al hacerlo, se borraron las variables de entorno y se desconectó la base de datos, por lo que tuve que repetir todo el proceso desde cero. Esto implicó volver a crear la base de datos, configurar las conexiones y reestablecer la lógica que ya se había implementado.
Antes de todo, se generó el monorepo con el objetivo de tener una mejor organización, permitiendo separar claramente el código del frontend y del backend dentro de sus respectivas carpetas. Esto facilita la estructura del proyecto y su mantenimiento. Primeramente, se elaboraron los documentos para la base de datos en Visual Studio Code, donde se crearon las carpetas con los archivos necesarios para almacenar la información del proyecto. Dentro de la carpeta principal date_base, se generaron tres carpetas: una para la creación de la base de datos, otra para definir las tablas (contenido, favorito, genero, usuario), y una más para los archivos de relaciones entre estas tablas. Una vez preparada esta estructura, se importó a SQL Server, donde se ejecutaron uno por uno los scripts para verificar que no hubiera errores y que las relaciones se establecieran correctamente.
Con la base de datos lista, comencé con la implementación del backend. Se creó una carpeta principal llamada cartoonsBack, en la cual se organizaron subcarpetas como Controllers, con su archivo AuthControllers.cs; DBContext, con CartoonsDBContext.cs; y Models, con el archivo User.cs. En cada una de estas carpetas se codificaron los elementos necesarios en C# para permitir el manejo de usuarios, autenticación y conexión con la base de datos. También se configuró el servicio de registro de usuario, el cual recibe datos como el nombre, correo y contraseña, valida la información y la almacena correctamente en la base de datos.
Finalmente, instalé Swagger y realicé la documentación correspondiente para facilitar la vista previa y prueba de los endpoints de la API. Esto me permitió verificar de manera visual y ordenada que cada ruta estuviera funcionando, lo cual fue útil para detectar errores y asegurar que la estructura de respuesta estuviera alineada con lo que el frontend espera. 

# 8. Reporte de Code Coverage y Testing
Reporte de testing
![Captura de pantalla 2025-06-02 163657](https://github.com/user-attachments/assets/26915456-f9e1-4e07-9143-54a9708a7f82)
✔ Browser application bundle generation complete.
⠙ Generating browser application bundles (phase: building)...02 06 2025 16:34:56.012:WARN [karma]: No captured browser, open http://localhost:9876/
02 06 2025 16:34:56.068:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
02 06 2025 16:34:56.069:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
02 06 2025 16:34:56.078:INFO [launcher]: Starting browser Chrome
✔ Browser application bundle generation complete.
02 06 2025 16:34:57.701:INFO [Chrome 136.0.0.0 (Windows 10)]: Connected on socket 7GM0znRyr9bpk0fLAAAB with id 58073438
LOG: 'Login exitoso:', Object{token: 'mock-token'}
Chrome 136.0.0.0 (Windows 10): Executed 5 of 15 SUCCESS (0 secs / 0.301 secs)
LOG: 'Register button clicked'
Chrome 136.0.0.0 (Windows 10): Executed 6 of 15 SUCCESS (0 secs / 0.356 secs)
LOG: 'Login exitoso:', Object{token: 'mock-token'}
Chrome 136.0.0.0 (Windows 10): Executed 8 of 15 SUCCESS (0 secs / 0.382 secs)
Chrome 136.0.0.0 (Windows 10): Executed 14 of 15 SUCCESS (0 secs / 0.469 secs)
Chrome 136.0.0.0 (Windows 10): Executed 15 of 15 SUCCESS (0.52 secs / 0.476 secs)                                                                                                         
TOTAL: 15 SUCCESS

Reporte de coverage
![Captura de pantalla 2025-06-02 164043](https://github.com/user-attachments/assets/675ccf60-46d3-41b5-863c-b685b6c569e2)
✔ Browser application bundle generation complete.
02 06 2025 16:39:36.367:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
02 06 2025 16:39:36.373:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
02 06 2025 16:39:36.383:INFO [launcher]: Starting browser Chrome
02 06 2025 16:39:38.024:INFO [Chrome 136.0.0.0 (Windows 10)]: Connected on socket E085kNEd8cty-KAZAAAB with id 92550074
LOG: 'Login exitoso:', Object{token: 'mock-token'}
Chrome 136.0.0.0 (Windows 10): Executed 0 of 15 SUCCESS (0 secs / 0 secs)
LOG: 'Login exitoso:', Object{token: 'mock-token'}                                                                                                                                        
Chrome 136.0.0.0 (Windows 10): Executed 1 of 15 SUCCESS (0 secs / 0.234 secs)
LOG: 'Register button clicked'                                                                                                                                                            
Chrome 136.0.0.0 (Windows 10): Executed 3 of 15 SUCCESS (0 secs / 0.281 secs)
Chrome 136.0.0.0 (Windows 10): Executed 15 of 15 SUCCESS (1.213 secs / 0.547 secs)                                                                                                        
TOTAL: 15 SUCCESS

=============================== Coverage summary ===============================
Statements   : 63.41% ( 52/82 )
Branches     : 38.46% ( 5/13 )
Functions    : 51.72% ( 15/29 )
Lines        : 64.47% ( 49/76 )
================================================================================
02 06 2025 16:39:41.857:WARN [web-server]: 404: /_karma_webpack_/assets/undefined

# 9. Diagrama de Entidad-Relación de la BD 
![Captura de pantalla 2025-06-02 174340](https://github.com/user-attachments/assets/397bf4be-c52b-4400-9df2-801337de088b)

# 11. Documentación de API-Swagger
![Captura de pantalla 2025-06-02 001843](https://github.com/user-attachments/assets/34d71b39-ac04-4abb-b896-4aa258e0966c)

# 13. Problemas conocidos 
De los problemas anteriores considero que ya quedaron solucionados, solo faltaría el terminar de conectar mi base de datos para consumir el contenido de cartoons desde ahí mismo, al igual de configurar el boton de favoritos.

# 14. Retrospectiva
¿Qué hice bien?
En este sprint acomode de mejor forma las carpetas dentro del código para que fuera fácil de entender, de igual forma arregle los test pendientes y ya quedaron esos reportes completos
¿Qué no salió bien?
Como anteriormente había tenido problemas con mi git al hacer commits, tome la decisión de clonar mi repositorio, por lo que se elimino mi base de datos y la tuve que hacer nuevamente.
¿Qué puedo hacer diferente?
Creo que hay detalles que puedo corregir aplicando mejores practicas, de igual forma ya tengo una idea clara de como reorganizar la plataforma para que sea mas amigable con lo usuarios tanto en diseño y contenido dentro de la misma.





