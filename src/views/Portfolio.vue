<template>
    <section id="proyectos" class="projects-section">
        <div class="projects-list">
            <ul>
                <h3>Mis proyectos</h3>
                <li><a href="#igloo">Lector de signos vitales - Igloo</a></li>
                <li><a href="#LS-webPage">LinkStart - Web Page</a></li>
                <li><a href="#LS-bootcamp">LinkStart - Bootcamp/Hackathon</a></li>
            </ul>
        </div>
        <article class="project" id="igloo">
            <div class="w500">
                <h3 class="project-title">Lector de signos vitales - Igloo</h3>
                <h4 class="project-details">Desarrollo Backend<br>Python / SQLite3 / Flutter</h4>
                <p class="project-date"><b><small>feb-2019</small></b></p>
                <a class="project-link" href="https://github.com/nandyme/igloo"><small><b>Link del proyecto</b></small></a>
                <p class="project-description">
                    Con un equipo de 5 personas, creamos un lector de signos vitales utilizando un Raspberry Pi y un Arduino. El sensor recolectaba la información en una base de datos y los mostraba en una interfáz web en tiempo real. El proyecto fue parte de una hackathon
                    que fue el evento final de un bootcamp organizado por Penguin Academy.
                </p>
            </div>
            <figure class="project-imageWrapper w500">
                <img class="project-image w500" src="@/assets/images/monitor_signos.jpg" alt="Foto del proyecto">
            </figure>
        </article>

        <article id="LS-webPage" class="project">
            <div class="w500">
                <h3 class="project-title">LinkStart - Web Page</h3>
                <h4 class="project-details">Desarrollo de la página<br>HTML / Bootstrap / CSS / JavaScript</h4>
                <p class="project-date"><small><b>dic-2019</b></small></p>
                <a class="project-link" href="https://nandyme.github.io/linkstart"><small><b>Link del proyecto</b></small></a>
                <p class="project-description">Página web en GitHub Pages, desarrollada para presentar el proyecto "LinkStart Hackerspace".</p>
            </div>
            <figure class="project-imageWrapper w500">
                <img class="project-image w500" src="@/assets/images/linkstart-page.jpeg" alt="Foto de la página">
            </figure>
        </article>

        <article class="project" id="LS-bootcamp">
            <div class="w500">
                <h3 class="project-title">LinkStart - Bootcamp/Hackathon</h3>
                <h4 class="project-details">Project Manager - Mentor</h4>
                <p class="project-date"><small><b>dic/ene-2019</b></small></p>
                <br>
                <p class="project-description">
                    Hackathon que forma parte del Plan Piloto del Proyecto "LinkStart Hackerspace" en los que desarrollamos varios proyectos reales en equipos de 6 personas usando metodología SCRUM. <br>
                    <br>
                    <b>Contenido:</b> HTML & CSS / Git & GitHub / PHP & Laravel / Metodologías Agile - SCRUM / Vue.js
                </p>
            </div>
            <figure class="project-imageWrapper w500">
                <img class="project-image w500" src="@/assets/images/hackathon.jpeg" alt="Foto del proyecto2">
            </figure>
        </article>
        <br>
    </section>
</template>

<script>

export default {
    name: 'Portfolio'
}
</script>
