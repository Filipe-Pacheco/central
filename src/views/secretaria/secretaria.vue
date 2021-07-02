<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col card-padrao">
                <i class="bi bi-headset"></i>
                Fale com a secretaria
            </div>
            <div class="col card-padrao">
                <i class="bi bi-ui-checks"></i>
                Minhas Solicitações
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
