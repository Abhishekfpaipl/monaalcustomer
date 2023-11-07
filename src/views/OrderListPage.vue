<template>
    <div class="list-group list-flushed rounded-0">
        <div v-for="(order, index) in supplier.orders" :key="index" class="list-group-item border-top-0">
            <div class="d-flex" @click="showSuppo(order)">
                <div class="flex-fill d-flex align-items-center">
                    <img v-if="order.product" class="rounded-circle" style="width: 60px; height: 60px;object-fit: cover;"
                        :src="order.product.image" alt="">
                    <div class="flex-fill ms-2">
                        <p v-if="order.product" class="mb-0 fw-bold">{{ order.product.material }}</p>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">{{ order.id }}</p>
                            <div class="d-flex gap-2">
                                <p class="mb-0">{{ order.quantity }} <span v-if="order.product">{{ order.product.unit }}</span></p>
                                <i v-if="order.status === 'issued'" class="bi bi-dash-circle-dotted text-danger  "></i>
                                <i v-if="order.status === 'partial'" class="bi bi-arrow-clockwise text-warning  "></i>
                                <i v-if="order.status === 'completed'" class="bi bi-check2-circle text-success  "></i>
                                <i v-if="order.status === 'cancelled'" class="bi bi-x-circle text-secondary  "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <OrderDetail></OrderDetail>
    </div>
</template>

<script>
import OrderDetail from '@/components/OrderDetail.vue';

export default {
    name: 'BuyerOrder',
    components: { OrderDetail },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            supplierId: ''
        };
    },
    mounted() {
        this.supplierId = this.$route.params.supplierId
        this.$store.dispatch('fetchCustomer', this.supplierId)
    },
    computed: {
        supplier() {
            return this.$store.getters.getSupplier;
        },
    },
    methods: {
        showSuppo(suppo) {
            return this.$store.dispatch('selectOrder', suppo);
        },
    },
}
</script>

<style lang="scss" scoped></style>