<template>
    <the-navbar></the-navbar>
    <the-sidebar/>
    <app-message/>
    <div class="container with-nav">
        <router-view/>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import TheSidebar from '../components/TheSidebar.vue'
import AppMessage from '../components/ui/AppMessage.vue'

export default {
    components: { TheNavbar, AppMessage, TheSidebar }
}
</script>