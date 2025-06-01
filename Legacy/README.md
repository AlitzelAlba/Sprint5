# sprint4 - Caricaturas clásicas
# Verenice Alitzel Alba Hernandez
# 1. Descripción 
Este proyecto busca simular una plataforma de streaming para visualizar caricaturas clásicas. El enfoque principal está en la interacción mediante una barra de navegación, en particular en el apartado de géneros. Al seleccionar un género desde el menú desplegable, se redirige al usuario a una vista donde se muestran caricaturas pertenecientes a dicha categoría. Al ingresar al sitio, se puede ver el apartado de inicio de sesión. De igual forma, si no se tiene una cuenta, puedes registrarte. Una vez que completes el registro e inicies sesión, serás redirigido a la página de navegación.

# 2. Objetivo
El objetivo de esta actividad es desarrollar una plataforma interactiva para el consumo de caricaturas clásicas, que permita la navegación por géneros a través de una estructura basada en archivos JSON. Además, el objetivo principal es diseñar y construir una base de datos en T-SQL que se integrará posteriormente al proyecto, con el fin de habilitar el inicio de sesión y el registro de nuevos usuarios.

# 3. Mockup de la aplicación
![image](https://github.com/user-attachments/assets/366a22b8-1157-4c57-8dbc-623dc75f7552)

# 5. Proyecto en ejecución
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

# 6. Instrucciones para instalar y usar el repo
Verificar si se tiene git instalado Abre la terminal en tu dispositivo e ingresa el siguiente comando git --version Si te regresa una versión como git version 2.40.1, significa que ya lo tienes. Si te dice que el comando no se reconoce, entonces necesitas instalarlo.
Copia la URL del repositorio que se quiere clonar.
Ya que tienes la URL, abre la terminal y clona el repositorio con el siguiente comando git clone anexa la url del repositorio. Con esto git va a empezar a descargar todo el contenido del repositorio en una carpeta con el mismo nombre. Git lo genera en automatico.
Cuando termine de clonar, cambia de directorio con el siguiente comando: cd nombre-del-repositorio. Aquí es donde vas a trabajar todo el tiempo. Siempre que vayas a hacer git status, git pull, git commit o cualquier otro comando, asegúrate de estar dentro de esta carpeta.
Por ultimo, para asegurarte que se clonó bien ejecuta git status

# 7. Dependencias o bibliotecas utilizadas
@angular/*: Todos los módulos principales de Angular. bootstrap: Para el diseño y estilos CSS. express: Usado probablemente para el server-side rendering (SSR) con Angular Universal. rxjs: Para programación reactiva en Angular. zone.js: Angular lo usa para detectar cambios. tslib: Soporte para TypeScript.

@angular/cli, @angular-devkit/build-angular: Herramientas para compilar, servir y crear proyectos Angular. jasmine, karma, @types/*: Librerías y tipados para pruebas unitarias. typescript: El compilador TS que Angular necesita para funcionar. @types/node, @types/express: Tipados de TypeScript para que el editor/autocompletado funcione bien al escribir código de servidor.

# 8. Descripción del como se realizo
Antes de todo, se generó el monorepo con el objetivo de tener una mejor organización, permitiendo separar claramente el código del frontend y del backend dentro de sus respectivas carpetas. Esto facilita la estructura del proyecto y su mantenimiento.
Primeramente, se elaboraron los documentos para la base de datos en Visual Studio Code, donde se crearon las carpetas con los archivos necesarios para almacenar la información del proyecto. Dentro de la carpeta principal date_base, se generaron tres carpetas: una para la creación de la base de datos, otra para definir las tablas (contenido, favorito, genero, usuario), y una más para los archivos de relaciones entre estas tablas. Una vez preparada esta estructura, se importó a SQL Server, donde se ejecutaron uno por uno los scripts para verificar que no hubiera errores y que las relaciones se establecieran correctamente.
Con la base de datos lista, comenzamos con la implementación del backend. Se creó una carpeta principal llamada cartoonsBack, en la cual se organizaron subcarpetas como Controllers, con su archivo AuthControllers.cs; DBContext, con CartoonsDBContext.cs; y Models, con el archivo User.cs. En cada una de estas carpetas se codificaron los elementos necesarios en C# para permitir el manejo de usuarios, autenticación y conexión con la base de datos. También se configuró el servicio de registro de usuario, el cual recibe datos como el nombre, correo y contraseña, valida la información y la almacena correctamente en la base de datos.
En cuanto al frontend, se utilizó Angular para crear una interfaz clara y amigable. Se generó un componente RegisterComponent donde se diseñó un formulario de registro que incluye campos para el nombre del usuario, correo electrónico, confirmación del correo, contraseña y confirmación de contraseña. Se añadieron validaciones para asegurar que los campos de correo y contraseña coincidan antes de enviar los datos al backend. La lógica del componente utiliza ngModel para enlazar los datos del formulario con las variables del componente TypeScript. Una vez validados, los datos se envían al servicio AuthService, que realiza una petición HTTP al backend para registrar al usuario.
Se tuvo especial cuidado en asegurar que los nombres de los campos enviados coincidieran exactamente con los requeridos por el backend (email, password, Name), lo que permitió una correcta integración y un registro exitoso del usuario. Finalmente, se agregaron mensajes de éxito o error para notificar al usuario sobre el resultado del registro.

# 9. Reporte de Code Coverage y reporte de testing
![Captura de pantalla 2025-05-06 021530](https://github.com/user-attachments/assets/58041f20-f69b-43e4-ab23-da69d2b6b132)
![Captura de pantalla 2025-05-06 021151](https://github.com/user-attachments/assets/5bae6a5d-7cc8-4c27-9cbd-161adcde9d7b)

# 10. Diagrama de entidad-relación
![Captura de pantalla 2025-05-20 134446](https://github.com/user-attachments/assets/85ae0a85-bcd7-4937-abf3-8425aa386e3b)
# 11. Problemas conocidos
Aun tengo problemas con algunos de mis test
# 12. Retrospectiva
¿Que hice bien?
Ya logre vincular mis json con mis componentes, de igual forma logre mejorar un poco el estilo, respecto a la base de datos salio bien, se puede iniciar sesión y registrar usuario
¿Qué no salio bien?
Al querer subir los cambios al repo utilice mal un comando y ya no podia subir mi repo a git, por poco y pierdo el avance de igual forma se borraron archivos que tuve que recuperar, respecto a los test aun no los tengo completos
¿Qué puedo hacer diferente?
Subir bien mi repo a git cada que haga un cambio, no esperarme al final, verificar que ningun archivo que no se tenga que subir se vea reflejado en el repo, mejorar la estructura de mi pagina, añadir la bd para favoritos.
      
