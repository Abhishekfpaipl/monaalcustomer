<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 border-top">
        <div class="container-fluid">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-between">
                <div class="nav-item" v-for="(link, linkIndex) in computedLinks" :key="linkIndex">
                    <router-link :to="link.path" class="nav-link">
                        <div class="d-flex flex-column align-items-center fw-bold">
                            <i class="bi" :class="link.icon"></i>
                            <div style="font-size: 0.75rem;">{{ link.name }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'BottomNav',
    data() {
        return {
            supplierId: '',
        };
    },
    computed: {
        computedLinks() {
            return [
                {
                    path: '/dashboard/' + this.supplierId,
                    icon: 'bi bi-house-door',
                    name: 'Dashboard'
                },
                {
                    path: '/orders/' + this.supplierId,
                    icon: 'bi bi-bookmarks',
                    name: 'Orders'
                },
                {
                    path: '/bills',
                    icon: 'bi bi-receipt',
                    name: 'Bills'
                },
                {
                    path: '/chat',
                    icon: 'bi bi-chat-dots',
                    name: 'Chat'
                },
                {
                    path: '/profile/' + this.supplierId,
                    icon: 'bi bi-person',
                    name: 'Profile'
                },
            ];
        }
    },
    mounted() {
        this.supplierId = this.$route.params.supplierId;
    }
};
</script>

<style>
.router-link-active.router-link-exact-active.nav-link {
    color: #0D6EFD;
}
</style>
