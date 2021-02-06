<template>
    <transition name="slide-up">
        <header id="notification-panel" v-if="show">
            <div class="container bg-smoke-grey">
                <div class="notification-content">
                    <div class="text">
                        By accessing and using this website, you acknowledge that you have read and understand our <span class="link">Cookie Policy, Privacy Policy</span>, and our <span class="link">Terms of Service</span>.
                    </div>
                    <div class="button bg-blue" @click="hideNotification()">
                        Got it
                    </div>
                </div>
            </div>
        </header>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
        methods: {
            hideNotification() {
                this.show = false

                let element = document.getElementById("header-page")
                element.classList.add("no-padding");
            }
        }
    }
</script>

<style lang="stylus" src="./index.styl" scoped></style>