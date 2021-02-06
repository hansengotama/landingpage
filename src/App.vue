<template>
    <div id="app">
        <home-page></home-page>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            "home-page": () => import('./pages/home-page.vue')
        }
    }
</script>

<style lang="stylus" scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap')

    #app
        width 100%
        height 100%
        font-family 'Roboto', sans-serif

</style>
