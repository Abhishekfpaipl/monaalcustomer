<template>
    <div v-for="(supbill, index) in supbills" :key="index" @click="showBill(supbill)"
        class="d-flex w-100 py-2 border-bottom container">
        <div class="d-flex align-items-center flex-fill ">
            <div class="rounded-circle border d-flex flex-column justify-content-center align-items-center"
                style="height:60px; min-width:60px;">
                <div style="line-height: 1rem;">{{ supbill.date }}</div>
                <small>{{ supbill.month }}</small>
            </div>
            <div class="flex-fill">
                <p class="m-0 ps-2 fw-bold">{{ supbill.billno }}</p>
                <div class="d-flex justify-content-between">
                    <p class="m-0 ps-2">Bill : ₹ {{ supbill.totalAmnt }}</p>
                    <div class="d-flex align-items-center gap-2">
                        <p class="m-0 ps-2">₹ {{ supbill.amount }}</p>
                        <i v-if="supbill.status === 'Pending'" class="bi bi-dash-circle-dotted text-danger  "></i>
                        <i v-if="supbill.status === 'Paid'" class="bi bi-check2-circle text-success  "></i>
                        <i v-if="supbill.status === 'Cancelled'" class="bi bi-x-circle text-secondary  "></i>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <BillOffcanvas></BillOffcanvas>
</template>

<script>
import BillOffcanvas from '@/components/BillOffcanvas.vue';

export default {
    name: 'BillsList',
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        supbills() {
            return this.$store.getters.getBills;
        },
    },
    methods: {
        showBill(supbill) {
            return this.$store.dispatch('selectBill', supbill);
        },
    },
    components: { BillOffcanvas }
}
</script>

<style lang="scss" scoped></style>