<template>
    <div class="breadcrumbs" v-if="back">
        <router-link class="text-white" to="/">Вернуться к списку заявок</router-link>
    </div>
    <div class="card">
        <h1 class="card-title">
            {{ title }}
            <slot name="header"/>
        </h1>

        <slot name="default"/>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        back: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        document.title = `${props.title} | Клон Банка`;
    }
}
</script>

<style>

</style>