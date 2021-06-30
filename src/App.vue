<template>
  <div id="app">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
    <navbar></navbar>
    <div id="main-content" class="container-fluid">
      <div class="row">
        <div id="sidebar-wrap" class="col p-0">
          <sidebar></sidebar>  
        </div>
        <div id="router-view" class="col p-0">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import sidebar from '@/components/sidebar.vue';

export default {
  components: {
    navbar,
    sidebar
  }
}
</script>

<style>
  :root {
    /* Variables for default theme (light-mode) */
      --fundo: #F8F9FA;
      --primary-nav: #fff;
      --border-nav: #dee2e6;
      --fontes: #2c3e50;
      --shadow: rgb(104, 104, 104, 0.5);
      --hero: #31abbd;
  }

  [data-theme="darkMode"] {
      /* Variables for dark mode */
      --fundo: #1D1E22;
      --primary-nav: #000;
      --border-nav: #3d4246;
      --fontes: #F3F3F3;
      --shadow: #1D1E22;
      --hero: #8277FF;
  }

  #router-view {
    background-color: #F8F9FA;
    max-height: 93vh;
    overflow-y: scroll;
  }


  #sidebar-wrap {
      height: 93vh;
      max-width: 280px; 
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
