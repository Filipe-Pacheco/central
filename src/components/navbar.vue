<template>
    <header id="nav" class="p-3 border-bottom">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <img id="logo" src="https://www.uninove.br/logo-uninove.svg" alt="Logo Image">
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
          </form>

          <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">Novo Projeto.</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'navbar'
}
</script>


<style scoped>
header {
    background-color: var(--primary-nav);
    transition: 0.3s ease-in-out;
    border-bottom: 1px solid var(--border-nav) !important;
    height: 7vh;
    box-shadow: 0 0.125rem 0.2rem 0 rgba(0,0,0,0.2)
}

a {
    color: var(--fontes) !important;
    font-weight: 700;
}

#logo {
    height: 30px;   
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>