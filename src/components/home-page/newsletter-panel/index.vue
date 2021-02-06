<template>
    <transition name="slide-up-down">
        <div id="newsletter-panel" v-if="show">
            <div class="container">
                <div class="close-button" @click="closeNewsLetter()">x</div>
                <div class="content">
                    <div class="title">
                        Get latest updates in web technologies
                    </div>
                    <div class="description">
                        I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
                    </div>
                    <div class="form">
                        <input type="text" class="simple-input" placeholder="Email Address">
                        <button class="simple-button bg-orange">Count me in!</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            showNewsLetter() {
                if(!this.show) this.show = true
            },
            closeNewsLetter() {
                this.setCookieNewsLetter()
                this.show = false
            },
            setCookieNewsLetter() {
                const minute = 10
                const second = 60

                let date = new Date();
                date.setTime(date.getTime() + (minute * second * 1000));

                let expires = "expires="+date.toUTCString();

                document.cookie = "triggerNewsLetter" + "=" + true + ";" + expires + ";path=/"
            }
        },
    }
</script>

<style lang="stylus" src="./index.styl" scoped></style>