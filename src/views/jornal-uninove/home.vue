<template>
    <div class="container-fluid">
        <iframe id="myiframe" src="https://blogzine.webestica.com/" style="border:0px #ffffff none;" name="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="3000px" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: '',
    mounted() {
        console.log(document.getElementById("myiframe"))
        document.getElementById("myiframe").getElementById
    }
}
</script>

<style scoped>
    iframe {
        width: -webkit-fill-available !important;
    }

</style>
