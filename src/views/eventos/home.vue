<template>
    <div class="container pt-4">
        <header class="blog-header py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
                <a class="link-secondary" href="#">Subscribe</a>
            </div>
            <div class="col-4 text-center">
                <a class="blog-header-logo text-dark" href="#">Jornal Acadêmico UNINOVE</a>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center">
                <a class="link-secondary" href="#" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                </a>
                <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
            </div>
        </header>
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
            <a class="p-2 link-secondary" href="#">World</a>
            <a class="p-2 link-secondary" href="#">U.S.</a>
            <a class="p-2 link-secondary" href="#">Technology</a>
            <a class="p-2 link-secondary" href="#">Design</a>
            <a class="p-2 link-secondary" href="#">Culture</a>
            <a class="p-2 link-secondary" href="#">Business</a>
            <a class="p-2 link-secondary" href="#">Politics</a>
            <a class="p-2 link-secondary" href="#">Opinion</a>
            <a class="p-2 link-secondary" href="#">Science</a>
            <a class="p-2 link-secondary" href="#">Health</a>
            <a class="p-2 link-secondary" href="#">Style</a>
            <a class="p-2 link-secondary" href="#">Travel</a>
            </nav>
        </div>
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
