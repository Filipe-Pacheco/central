<template>
    <div class="container-fluid pt-4">
        <div class="row">
            <div class="col">
                <h1 class="my-4">Fazer Solicitação {{solicitacoes.nome}}</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Documento</th>
                        <th scope="col">Prazo</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){ return {
        solicitacoes: [
            {nome: 'ENTREGA DE ATIVIDADES COMPLEMENTARES' , link:''},
            {nome: 'ENTREGA ONLINE DE CONTRATO DO FIES' , link:''},
            {nome: 'REEMBOLSO ALUNO' , link:''},
            {nome: 'REGIME DOMICILIAR / JUSTIFICATIVA DE FALTAS' , link:''},
            {nome: 'REGULARIZAÇÃO DE PENDENCIA FINANCEIRA' , link:''},
            {nome: 'CANCELAMENTO DE MATRÍCULA EM DISCIPLINA' , link:''},
            {nome: 'COMPROVANTE DE BOLSA' , link:''},
            {nome: '' , link:''},
            {nome: '' , link:''}
            
            ]
        }
    }
}
</script>

<style scoped>
    
</style>
