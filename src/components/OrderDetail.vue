<template>
    <div v-if="Object.keys(activeSuppo).length !== 0">
        <div class="offcanvas offcanvas-end show w-100" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
            aria-labelledby="staticBackdropLabel">
            <div class="d-flex justify-content-between align-items-center p-3 pt-2 bg-light border-bottom">
                <p class="fw-bold text-center m-0">{{ activeSuppo.id }}</p>
                <i class="bi bi-x fs-3" @click="hideSuppo()"></i>
            </div>
            <div class="offcanvas-body p-2">
                <div class="">
                    <p class="text-center fw-bold my-3">PO Terms</p>
                    <div class="container bg-light">
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO No.</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.id }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO Issued Date</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.issued_at }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">PO Expiry Date</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.expiry_at }}</div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Rate</div>
                            <div class="col-6 border-end p-3"><i class="bi bi-currency-rupee"></i> {{ activeSuppo.rate }}
                            </div>
                        </div>
                        <div class="row border-top">
                            <div class="col-6 border-end border-start p-3">Total Qty</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.quantity }}</div>
                        </div>
                        <div class="row border-top border-bottom">
                            <div class="col-6 border-end border-start p-3">Delivery Mode</div>
                            <div class="col-6 border-end p-3">{{ activeSuppo.delivery }}</div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <p class="text-center fw-bold mb-3 mt-5">PO Items</p>
                        <div v-for="(item, index) in activeSuppo.items" :key="index" class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed d-flex p-2 bg-light" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="`#collapseThree` + index"
                                    aria-expanded="false" :aria-controls="`collapseThree` + index">
                                    <img :src="item.image" class="rounded-circle"
                                        style="width: 60px; height: 60px;object-fit: cover;">
                                    <div class="flex-fill">
                                        <div class="d-flex justify-content-between ms-2 w-100">
                                            <div class="">
                                                <span class="mb-0">{{ item.option }}</span>, <span class="mt-2">Width &
                                                    Length :
                                                    {{
                                                        item.range }}</span>
                                            </div>
                                            <p class="mb-0 me-2">{{ item.quantity }}</p>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div :id="`collapseThree` + index" class="accordion-collapse collapse "
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body d-flex flex-column align-items-center justify-content-center">
                                    <img :src="item.image" style="width:300px; height: 170px;" alt="">
                                    <p class="mb-0 ms-2">Note : {{ item.note }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="accordion" id="accordionExample">
                    <p class="text-center fw-bold mb-3 mt-5">General Terms</p>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTol" aria-expanded="true" aria-controls="collapseTol">
                                Tolerance Rate
                            </button>
                        </h2>
                        <div id="collapseTol" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div v-if="activeSuppo.tolerance" class="accordion-body">
                                <div class="d-flex justify-content-between">
                                    <p>Price</p>
                                    <p><i class="bi bi-plus-slash-minus"></i> {{ activeSuppo.tolerance.rate }} %</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Quantity</p>
                                    <p><i class="bi bi-plus-slash-minus"></i> {{ activeSuppo.tolerance.quantity }} %</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p>Delivery</p>
                                    <p><i class="bi bi-plus-slash-minus"></i> {{ activeSuppo.tolerance.delivery }} %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsePayment" aria-expanded="true" aria-controls="collapsePayment">
                                Payment Terms
                            </button>
                        </h2>
                        <div id="collapsePayment" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div v-if="activeSuppo.terms" class="accordion-body">
                                {{ activeSuppo.terms.payment }}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-light" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseRejection" aria-expanded="true" aria-controls="collapseRejection">
                                Rejection Terms
                            </button>
                        </h2>
                        <div id="collapseRejection" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div v-if="activeSuppo.terms" class="accordion-body">
                                {{ activeSuppo.terms.rejection }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyerOrder',
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        orders() {
            return this.$store.getters.getSupplierOrders
        },
        activeSuppo() {
            return this.$store.getters.getActiveOrder
        }
    },
    methods: {
        showSuppo(suppo) {
            return this.$store.dispatch('selectOrder', suppo);
        },
        hideSuppo() {
            return this.$store.dispatch('hideOrder');
        },
    },
}
</script>

<style lang="scss" scoped>
.accordion-button::after {
    background-image: none
}
</style>