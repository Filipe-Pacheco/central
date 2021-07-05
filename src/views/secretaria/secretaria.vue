<template>
    <div class="container-fluid">
        <div class="row mt-5">
            <img src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-header.png" class="img-fluid" alt="...">

        </div>
        <div class="row justify-content-center m-5">
            <div class="col-8 mb-3">
                <label for="exampleInputEmail1" class="form-label">O que você procura?</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
        </div>
        <div class="row justify-content-center m-5">
            <div class="col card-padrao">
                <i class="bi bi-headset"></i>
                Fale com a secretaria
            </div>
            <div class="col card-padrao">
                <i class="bi bi-ui-checks"></i>
                <router-link class="nav-link text-white" to="/secretaria/minhas-solicitacoes">Minhas Solicitações</router-link>
            </div>
            <div class="col card-padrao">
                <i class="bi bi-currency-dollar"></i>
                Minhas Finanças
            </div>
            <div class="col card-padrao">
                <i class="bi bi-box-arrow-in-down"></i>
                Matrícula em dependência
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'secretaria'
}
</script>

<style scoped>
    .card-padrao {
        color: #2c3e50;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        height: 200px;
        border-radius: 10px;
        background-color: #E8EFFD;
        transition: all .3s ease-in-out;
        box-shadow: var(--shadow) 0 3px 8px;
        max-width: 200px;
        margin: 10px;
    }

    .card-padrao:hover{
        transform: scale(1.1);
    }

    i {
        font-size: 3.5rem
    }
</style>
