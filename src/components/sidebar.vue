<template>
       <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white">

            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <router-link class="nav-link text-white" to="/" aria-current="page">
                    <i class="bi bi-house-door-fill"></i>
                    Início
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="/about">
                    <i class="bi bi-currency-dollar"></i>
                    Rematrícula 
                    </router-link>
                </li>
                    <hr>
                <li>
                    <router-link class="nav-link text-white" to="meus_cursos">
                    <i class="bi bi-journal-text"></i>
                    Meus Cursos 
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="meus_cursos">
                    <i class="bi bi-journal-text"></i>
                    Minhas Aulas 
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="meus_cursos">
                    <i class="bi bi-journal-text"></i>
                    Sala do Futuro
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="meus_cursos">
                    <i class="bi bi-journal-text"></i>
                    Minhas Atividades 
                    </router-link>
                </li>
                    <hr>
                <li>
                    <router-link class="nav-link text-white" to="/biblioteca">
                    <i class="bi bi-shield-x"></i>
                    Biblioteca
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="/biblioteca">
                    <i class="bi bi-shield-x"></i>
                    Cursos Livres
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="/biblioteca">
                    <i class="bi bi-shield-x"></i>
                    Iniciação Científica
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="/biblioteca">
                    <i class="bi bi-shield-x"></i>
                    Portal Empregabilidade
                    </router-link>
                </li>
                    <hr>
                <li>
                    <router-link class="nav-link text-white" to="asda">
                    <i class="bi bi-person-circle"></i>
                    Minha Secretaria
                    </router-link>
                </li>
                
                <li>
                    <router-link class="nav-link text-white" to="asdasdasdas">
                    <i class="bi bi-speedometer2"></i>
                    Avaliação Institucional
                    </router-link>
                </li>
                    <hr>
                <li>
                    <router-link class="nav-link text-white" to="asdasdasd">
                    <i class="bi bi-window-sidebar"></i>
                    Meus Links
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="asdasd">
                    <i class="bi bi-union"></i>
                    Minhas Qualidades
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link text-white" to="asdasdasd">
                    <i class="bi bi-ui-checks"></i>
                    Vagas Efetivas, Trainee e Estágio
                    </router-link>
                </li>
            </ul>
        </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
    name: 'sidebar'
}
</script>


<style scoped>
    #sidebar {

        text-align: left; 
        height: -webkit-fill-available;
        background-color: #001165;
        font-weight: 500;
    }

    i{
        font-weight: 900;
    }

    .nav li:hover,
    .nav li.router-link-active,
    .nav li.router-link-exact-active {
        background-color: #0d6efd ;
        cursor: pointer;
    }
</style>