<template>
  <div id="app">
    <header>
        <nav class="nav-bar fixed-top">
            <a class="nav-brand" href="/"><img src="@/assets/images/mi_logo2.png" alt="Logo Fernando Mellone"></a>
            <ul class="navbar-items">
                <router-link class="nav-item" to="/">Home</router-link>
                <router-link class="nav-item" to="/portfolio">Portafolio</router-link>
                <router-link class="nav-item" to="/experiencias">Experiencias</router-link>
                <router-link class="nav-item" to="/contacto">Contácto</router-link>
            </ul>
        </nav>
    </header>
    <router-view/>

  </div>
</template>

<style>

</style>
