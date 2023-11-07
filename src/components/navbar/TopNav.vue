<template>
    <div class="d-flex  bg-light p-2 border-bottom">
        <router-link to="/">
            <img :src="`${publicPath}${logo}`" width="50" style="filter: grayscale(3);">
        </router-link>
        <div class="d-flex align-items-end">
            <b class="m-0 fs-3"
                style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">onaal</b>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data() {
        return {
            pageTitle: 'No Title',
            publicPath: process.env.BASE_URL,
            logo: 'img/icons/logo.png',
        }
    },
    created() {
        this.setPageTitle(this.$route.name);
    },
    watch: {
        $route(newRoute) {
            this.setPageTitle(newRoute.name);
        },
    },
    methods: {
        setPageTitle(routeName) {
            this.pageTitle = routeName || 'No Title';
        },
    },
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
}
</style>