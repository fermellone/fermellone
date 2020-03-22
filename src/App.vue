<template>
  <div id="app">
    <header>
        <nav class="nav-bar fixed-top">
            <a class="nav-brand" href="/"><img src="@/assets/images/mi_logo2.png" alt="Logo Fernando Mellone"></a>
            <ul class="navbar-items">
                <li><router-link @click.native="pageSpy()" :class="'nav-item '+homeSubrayado" to="/">Inicio</router-link></li>
                <li><router-link @click.native="pageSpy()" :class="'nav-item '+portafolioSubrayado" to="/portfolio">Portafolio</router-link></li>
                <li><router-link @click.native="pageSpy()" :class="'nav-item '+contactoSubrayado" to="/contacto">Contacto</router-link></li>
            </ul>
        </nav>
    </header>
    <router-view/>
    <go-top bg-color="#1A3139" ripple-bg="#FFBD59"></go-top>
  </div>
</template>


<script>
  import GoTop from '@inotom/vue-go-top';

  export default {
    data() {
      return {
        homeSubrayado: 'subrayado',
        portafolioSubrayado: '',
        contactoSubrayado: ''
      }
    },
    components: {
      GoTop
    },
    methods: {
      pageSpy: function() {
        if (this.$route.path === '/contacto') {
          this.homeSubrayado = ''
          this.portafolioSubrayado = ''
          this.contactoSubrayado = 'subrayado'
        }
        else if(this.$route.path === '/portfolio') {
          this.homeSubrayado = ''
          this.portafolioSubrayado = 'subrayado'
          this.contactoSubrayado = ''
        } else if (this.$route.path === '/') {
          this.homeSubrayado = 'subrayado'
          this.portafolioSubrayado= ''
          this.contactoSubrayado = ''

        }
      }
    },
    created(){
      this.pageSpy()
    }
  }
</script>


<style>

.subrayado {
  border-bottom: solid white 2.5px;
  padding-bottom: 2px;
}
.nav-bar {
    box-shadow: 0px 1px 9px -4px black;
}

</style>
