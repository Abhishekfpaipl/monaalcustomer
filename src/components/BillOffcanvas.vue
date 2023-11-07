<template>
    <div v-if="Object.keys(activeSupbill).length !== 0">
        <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="d-flex justify-content-between align-items-center border-bottom py-2 px-3 bg-light">
                <b class="m-0">{{ activeSupbill.billno }}</b>
                <i class="bi bi-x fs-3" @click="hideBill()"></i>
            </div>
            <div class="offcanvas-body p-2">
                <div>
                    <p class="text-center fw-bold my-3">Bill Summary</p>
                    <table class="table table-bordered table-light">
                        <tbody>
                            <tr v-for="(order, index) in orders" :key="index">
                                <td @click="showSuppo(order)" class="fw-bold w-50 p-3">{{ order.sid }} <i
                                        class="ps-3 bi bi-arrow-return-left text-primary"></i></td>
                                <td class="w-50 p-3">₹ {{ order.amt }}</td>
                            </tr>
                        </tbody>
                        <OrderDetail></OrderDetail>
                        <tbody>
                            <tr class="table-secondary">
                                <td class="fw-bold text-success w-50 p-3">Total Bill Amnt</td>
                                <td class="text-success w-5- p-3"> ₹ {{ activeSupbill.totalAmnt }}</td>
                            </tr>
                            <tr v-for="(order, index) in orders" :key="index">
                                <td v-if="order.debitNote" class="fw-bold text-danger w-50 p-3">{{ order.debitNote.sid }}
                                </td>
                                <td v-if="order.debitNote" class="text-danger w-50 p-3">₹ {{ order.debitNote.amt }}</td>
                            </tr>
                            <tr class="table-secondary">
                                <td class="fw-bold text-success w-50 p-3">Net Amnt Payable</td>
                                <td class="text-success w-50 p-3"> ₹ {{ activeSupbill.totalAmnt }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="accordion" id="accordionExample">
                    <p class="fw-bold text-center mb-3 mt-5">Additional Info</p>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed d-flex p-2 py-3" type="button"
                                data-bs-toggle="collapse" :data-bs-target="`#collapseThree` + index" aria-expanded="false"
                                :aria-controls="`collapseThree` + index">
                                <b>Note</b>
                            </button>
                        </h2>
                        <div :id="`collapseThree` + index" class="accordion-collapse collapse show"
                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore sequi
                                    magni eveniet, provident nulla harum, distinctio minima fugit corporis cupiditate
                                    illo enim mollitia, nesciunt culpa incidunt esse amet praesentium?</p>
                            </div>
                        </div>
                    </div>
                </div>


                <p class="fw-bold text-center mb-3 mt-5">
                    Supporting Document
                </p>
                <div class=" card card-body">
                    <p class="text-center">Invoice</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.invoice}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Bilty</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.bilty}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">e-Way Bill</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.billimg}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Debit note</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.debit}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                    <p class="text-center">Bank Transfer</p>
                    <div class="d-flex justify-content-center">
                        <img :src="`${publicPath}${activeSupbill.bank}`" style="width: 200px; height: 170px;" alt="">
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import OrderDetail from '@/components/OrderDetail.vue';

export default {
    name: 'BillOffcanvas',
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders;
        },
        activeSupbill() {
            return this.$store.getters.getActiveBill;
        },
    },
    methods: {
        hideBill() {
            return this.$store.dispatch('hideBill');
        },
        showSuppo(suppo) {
            return this.$store.dispatch('selectOrder', suppo);
        },
    },
    components: { OrderDetail }
}
</script>

<style lang="scss" scoped></style>