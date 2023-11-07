<template>
    <div style="margin-bottom: 70px;">
        <section class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-start">
                            <p class="m-0">Welcome</p>
                            <h2>{{ supplier.name }}</h2>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-6">
                        <div class="text-end">
                            <p class="m-0">Admin</p>
                            <p class="m-0">Last Session</p>
                            <p class="m-0">2 weeks ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row g-2">
                    <div class="col-4 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ newOrder }}</h2>
                            <p>New Orders</p>
                        </div>
                    </div>
                    <div class="col-4 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ pendingOrder }}</h2>
                            <p>Pending Orders</p>
                        </div>
                    </div>
                    <div class="col-4 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ cancelledOrder }}</h2>
                            <p>Cancelled Orders</p>
                        </div>
                    </div>
                    <div class="col-4 border-start border-warning border-4"
                        style="background-color: rgba(255, 179, 0, 0.3);">
                        <div class="div-box ">
                            <h2>{{ completedOrder }}</h2>
                            <p>Completed Orders</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'DashboardPage',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            supplierId: ''
        }
    },
    created() {
        this.supplierId = this.$route.params.supplierId
        this.$store.dispatch('fetchCustomer', this.supplierId)
    },
    computed: {
        supplier() {
            return this.$store.getters.getSupplier;
        },
        newOrder() {
            return this.supplier.orders.filter(order => order.status === 'issued').length
        },
        pendingOrder() {
            return this.supplier.orders.filter(order => order.status === 'partial').length
        },
        completedOrder() {
            return this.supplier.orders.filter(order => order.status === 'completed').length
        },
        cancelledOrder() {
            return this.supplier.orders.filter(order => order.status === 'cancelled').length
        },

    }
}
</script>

<style  scoped>
.txttxt {
    cursor: pointer;
    transition: .3s;
}

.txttxt:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 600px) {

    #section12,
    #section21 {
        position: relative;
        z-index: -1;
    }

    #section12 {
        padding-bottom: 5em;
    }
}
</style>
