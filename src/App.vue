<template>
  <div id="app">
    <header>
        <nav class="nav-bar fixed-top">
            <a class="nav-brand" href="/"><img src="@/assets/images/mi_logo2.png" alt="Logo Fernando Mellone"></a>
            <ul class="navbar-items">
                <li><router-link class="nav-item" to="/">Home</router-link></li>
                <li><router-link class="nav-item" to="/portfolio">Portafolio</router-link></li>
                <!-- <router-link class="nav-item" to="/experiencias">Experiencias</router-link> -->
                <li><router-link class="nav-item" to="/contacto">Contácto</router-link></li>
            </ul>
        </nav>
    </header>
    <router-view/>

  </div>
</template>

<style>

</style>
