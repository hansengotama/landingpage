<template>
    <div id="home-page">
        <notification-panel></notification-panel>
        <header-page></header-page>
        <highlights-panel></highlights-panel>
        <footer-page></footer-page>
        <newsletter-panel ref="newsletterPanel"
        ></newsletter-panel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                triggerNewsLetter: true
            }
        },
        components: {
            "notification-panel": () => import('../components/home-page/notification-panel/index.vue'),
            "newsletter-panel": () => import('../components/home-page/newsletter-panel/index.vue'),
            "header-page": () => import('../components/home-page/header-page/index.vue'),
            "highlights-panel": () => import('../components/home-page/highlights-panel/index.vue'),
            "footer-page": () => import('../components/home-page/footer-page/index.vue')
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll(event) {
                let triggerNewsLetter = this.getCookie("triggerNewsLetter")

                if(triggerNewsLetter != "true") {
                    let scrolledHeight = window.innerHeight + event.path[1].scrollY
                    let totalHeight = document.body.scrollHeight
                    if(scrolledHeight * 3 > totalHeight) {
                        this.triggerNewsLetter = false

                        this.$refs.newsletterPanel.showNewsLetter()
                    }
                }
            },
            getCookie(cname) {
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');

                for(let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }

                return ""
            },
        }
    }
</script>

<style lang="stylus" scoped>
    #home-page
        width 100%
        height 100%
</style>