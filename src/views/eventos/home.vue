<template>
    <div class="container pt-4">
        <div class="row g-4">
            <div class="col-6">
                <div class="card-noticia card-grande" style="background-image:url(https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg);background-position: center left;background-size: cover;">
                </div>
            </div>
            <div class="col-6">
                <div class="row g-4">
                    <div class="col-12">
                        <div class="card-noticia card-pequeno" style="background-image:url(https://blogzine.webestica.com/assets/images/blog/1by1/02.jpg);background-position: center left;background-size: cover;">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-noticia card-pequeno" style="background-image:url(https://blogzine.webestica.com/assets/images/blog/1by1/03.jpg);background-position: center left;background-size: cover;">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card-noticia card-pequeno" style="background-image:url(https://blogzine.webestica.com/assets/images/blog/1by1/04.jpg);background-position: center left;background-size: cover;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: ''
}
</script>

<style scoped>
    * {
        border: red 1px solid;
    }
    .card-noticia {
        border-radius: 0.7rem;
    }
    .card-grande {
        height: 560px;
    }
    .card-pequeno{
        height: 250px;
    }

</style>
