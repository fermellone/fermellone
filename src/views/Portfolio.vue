<template>
    <section id="proyectos" class="projects-section">
        <transition>
            <div v-on:click="selector = !selector" class="projects-list">
                <h3 class="my-projects-button">Mis proyectos</h3>
                <transition name="fade">
                    <ul v-show="selector">
                        <li><a href="#igloo">Lector de signos vitales - Igloo</a></li>
                        <li><a href="#LS-webPage">LinkStart - Web Page</a></li>
                        <li><a href="#LS-bootcamp">LinkStart - Bootcamp/Hackathon</a></li>
                        <li><a href="#LS-Koga">Koga - Hackathon</a></li>
                        <li><a href="#app-tesis">Web App - Control vehicular</a></li>
                    </ul>
                </transition>
            </div>
        </transition>
        <article class="project" id="igloo">
            <div class="w500">
                <h3 class="project-title">Lector de signos vitales - Igloo</h3>
                <h4 class="project-details">Backend Developer</h4>
                <p class="stack"><b>Contenido:</b>  Python / SQLite3 / Flask</p>
                <p class="project-date"><b><small>feb-2019</small></b></p>
                <a class="project-link" href="https://github.com/nandyme/igloo" target="_blank"><small><b>Link del proyecto</b></small></a>
                <p v-on:click="uno = !uno" class="description-toggler"><small><b>{{uno ? 'Ocultar info' : 'Mostrar info'}}</b></small></p>
                <p class="project-description" v-show="uno">
                    Con un equipo de 5 personas, creamos un lector de signos vitales utilizando un Raspberry Pi y un Arduino. El sensor recolectaba la información en una base de datos y los mostraba en una interfáz web en tiempo real. El proyecto fue parte de una hackathon
                    que fue el evento final de un bootcamp organizado por Penguin Academy.
                </p>
            </div>
            <figure class="project-imageWrapper">
                <img class="project-image image-fluid" src="@/assets/images/monitor_signos.jpg" alt="Foto del proyecto">
            </figure>
        </article>

        <article id="LS-webPage" class="project d-flex">
            <div class="w500 d-">
                <h3 class="project-title">LinkStart - Web Page</h3>
                <h4 class="project-details">FullStack Developer</h4>
                <p class="stack"><b>Contenido:</b> HTML / Bootstrap / CSS / JavaScript</p>
                <p class="project-date"><small><b>dic-2019</b></small></p>
                <a class="project-link" href="https://nandyme.github.io/linkstart" target="_blank"><small><b>Link del proyecto</b></small></a>
                <p v-on:click="dos = !dos" class="description-toggler"><small><b>{{dos ? 'Ocultar info' : 'Mostrar info'}}</b></small></p>
                <p class="project-description" v-show="dos">Página web en GitHub Pages, desarrollada para presentar el proyecto "LinkStart Hackerspace".</p>
            </div>
            <figure class="project-imageWrapper">
                <img class="project-image-fluid" src="@/assets/images/linkstart-page.jpeg" alt="Foto de la página">
            </figure>
        </article>

        <article id="LS-bootcamp" class="project d-flex">
            <div class="w500">
                <h3 class="project-title">LinkStart - Bootcamp/Hackathon</h3>
                <h4 class="project-details">Project Manager - Mentor</h4>
                <p class="stack"><b>Contenido:</b> HTML & CSS / Git & GitHub / Node.js / Metodologías Agile - SCRUM / Vue.js
                <p class="project-date"><small><b>dic/ene-2019</b></small></p>
                <p v-on:click="tres = !tres" class="description-toggler"><small><b>{{tres ? 'Ocultar info' : 'Mostrar info'}}</b></small></p>
                <p v-show="tres" class="project-description">
                    Hackathon que forma parte del Plan Piloto del Proyecto "LinkStart Hackerspace" en los que desarrollamos varios proyectos reales en equipos de 6 personas usando metodología SCRUM.
                    <br>
                </p>
            </div>
            <figure class="project-imageWrapper">
                <img class="project-image-fluid" src="@/assets/images/hackathon.jpeg" alt="Foto del proyecto2">
            </figure>
        </article>

        <article id="LS-Koga" class="project d-flex">
            <div class="w500">
                <h3 class="project-title">Koga StartCamp - Hackathon</h3>
                <h4 class="project-details">Desarrollador Front-End</h4>
                <p class="stack"><b>Stack:</b> HTML & CSS / Bootstrap / Git & GitHub / Django / Vue.js<p>
                <p class="project-date"><small><b>feb-2020</b></small></p>
                <a class="project-link" href="http://expresatech.herokuapp.com/home/" target="_blank"><small><b>Link del proyecto</b></small></a>
                <br>
                <p v-on:click="cuatro = !cuatro" class="description-toggler"><small><b>{{cuatro ? 'Ocultar info' : 'Mostrar info'}}</b></small></p>
                <p class="project-description" v-show="cuatro">
                    Creamos un producto mínimo viable. En tres días. Una plataforma web con un juego y perfil de usuario.
                    <br>
                </p>
            </div>
            <figure class="project-imageWrapper">
                <img class="project-image image-fluid" src="@/assets/images/Expresa-Koga.png" alt="Foto de la plataforma">
            </figure>
        </article>

        <article id="app-tesis" class="project d-flex">
            <div class="w500">
                <h3 class="project-title">Web App - Control Vehicular</h3>
                <h4 class="project-details">Full Stack Developer</h4>
                <p class="stack"><b>Stack:</b> Pug & CSS / Bootstrap / Git & GitHub / Node.js</p>
                <p class="project-date"><small><b>febrero-2020</b></small></p>
                <p v-on:click="cinco = !cinco" class="description-toggler"><small><b>{{cinco ? 'Ocultar info' : 'Mostrar info'}}</b></small></p>
                <p class="project-description" v-show="cinco">
                    Creé una web app que se conectaba a la base de datos del cliente para mostrar la información ahí almacenada, ordenada de la manera solicitada.
                    <br>
                </p>
            </div>
            <figure class="project-imageWrapper">
                <img class="project-image image-fluid" src="@/assets/images/imagen-tesis.png" alt="Foto de la web app">
            </figure>
        </article>
        <br>
    </section>
</template>

<script>

export default {
    name: 'Portfolio',
    data(){
        return {
                uno: false,
                dos: false,
                tres: false,
                cuatro: false,
                cinco: false,
                selector: false
        }
    }
}
</script>

<style>
    .stack {
        color: white;
    }

    .my-projects-button:hover,
    .description-toggler:hover {
        cursor: pointer;
    }
</style>
