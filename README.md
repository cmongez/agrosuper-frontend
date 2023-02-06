## CHALLENGE BSale - Front End (ECOMMERCE)

<center><img src="./src/assets/img/logo-agrosuper-azul.png" width="40%" /></center>


## Consideraciones

Este proyecto corresponde al challenge técnico de Agrosuper. 

## Front End

Desarrollado utilizando  **HTML**, **CSS**,  **JavaScript**, **Bootstrap**, **Sass**, **React**,**Redux Toolkit ** y **React Chartjs 2**,. 
Se implento el manejo del estado global con Redux.

### Deploy: 
*https://agrosuper.netlify.app/*
No recomiendo fiarse del deploy porque la URL de la API al no tener un dominio lo toma como no seguro y no realiza bien las peticiones necesarios para un buen comportamiento en el front. 

### Caracteristicas del proyecto

<li> Se utilizó un Auth sencillo como demostración</li>
<li> Se Utilizó Axios para realizar los request al servidor.</li>
<li> Se Utilizó El LocalStorage para almacenar un boleando en caso de loguearse correctamente, solo de forma didactica para cumplir con el requerimiento.</li>
<li> Se protegen las rutas con ese login basico y se permite hacer el Logout.</li>
<li> Para el manejo de las gráficas se utilizó React Chartjs 2</li>
<li> Al ser una app institucional se dejo a un lado el concepto Mobile First, pero se trato de hacerlo para equipos medianos.</li>
<li> Para la responsividad y estilos se uso *Bootstrap* en su mayoria excepto para los colores caracteristicos de Agrosuper.</li>
<li> Se instalo Sass, pero por cuestión de tiempo se evito usar CSS nativo y manejar solo clases y componentes de Bootstrap.</li>
<li> Dado que utilice nombres de variables autoexplicativas no fue necesario cargar el codigo con comentarios del funcionamiento.</li>

## Tecnologías

| Recursos utilizados       | Enlace                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Bootstrap 5.3.0           | [Ir a web ](https://getbootstrap.com/)                                              |
| Redux toolkit             | [Ir a web ](https://redux-toolkit.js.org/)                                          |
| React ChartJS 2           | [Ir a web ](https://react-chartjs-2.js.org/)                                        |


## Experiencia Agrosuper
Dado que he realizado anteriormente Ecommerces se me hizo facil crear la interfaz y realizar las peticiones fetch.
Debido a que la cantidad de productos no es mucha, se decidio no implementar paginación aunque tenemos un endpoint disponible por si en el futuro deseamos implementarlo. 

## Capturas

<center><img src="./src/assets/img/vista-login.png" /></center>






