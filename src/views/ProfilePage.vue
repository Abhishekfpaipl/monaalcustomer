<template>
    <div class="pb-5 mb-5">
        <!-- <ImageUploadBox :supplier = supplier></ImageUploadBox> -->
        <div class="text-center">
            <img :src="supplier.image" class="rounded-0" style="width: 100%; height: 300px; object-fit: cover;">
        </div>
        <table class="table">
            <tbody>
                <tr v-if="supplier.name">
                    <th class="table-secondary">Name</th>
                    <td>{{ supplier.name }}</td>
                </tr>
                <tr v-if="supplier.mobile">
                    <th class="table-secondary">Mobile</th>
                    <td>{{ supplier.mobile }}</td>
                </tr>
                <!-- <tr>
                    <th class="table-secondary">Description</th>
                    <td>{{ supplier.description }}</td>
                </tr> 
                 <tr>
                    <th class="table-secondary">Password</th>
                    <td><button class="btn btn-sm btn-secondary">Reset Password</button></td>
                </tr> -->
                <tr class="table-secondary">
                    <th class=""> Business Details</th>
                    <td class="d-flex align-items-center justify-content-end gap-2 py-3 text-end">
                        <span class="fs-5">Address </span>
                        <i class="bi bi-plus btn btn-outline-dark px-2 py-0 fs-5" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"></i>
                    </td>
                </tr>
                <tr v-if="supplier.business">
                    <th class="table-secondary">Business Name</th>
                    <td>{{ supplier.business }}</td>
                </tr>
                <tr v-if="supplier.gstin">
                    <th class="table-secondary">Gstin</th>
                    <td>{{ supplier.gstin }}</td>
                </tr>
                <tr v-if="supplier.email">
                    <th class="table-secondary">Email</th>
                    <td>{{ supplier.email }}</td>
                </tr>
                <tr v-if="supplier.whatsapp">
                    <th class="table-secondary">Whatsapp</th>
                    <td>{{ supplier.whatsapp }}</td>
                </tr>
                <tr v-if="supplier.contact">
                    <th class="table-secondary">Contact</th>
                    <td>{{ supplier.contact }}</td>
                </tr>
                <tr>
                    <th class="table-secondary">Billing Address</th>
                    <td v-if="supplier.billing">{{ supplier.billing.line1 }}, {{ supplier.billing.line2 }} {{
                        supplier.billing.city }},{{ supplier.billing.state }} {{ supplier.billing.pincode }}<br>
                    </td>
                </tr>
                <tr>
                    <th class="table-secondary">Shipping Address</th>
                    <td v-if="supplier.shipping">{{ supplier.shipping.line1 }}, {{ supplier.shipping.line2 }} {{
                        supplier.shipping.city }},{{ supplier.shipping.state }} {{ supplier.shipping.pincode }}</td>
                </tr>

            </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog"  style="height: 100vh;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Address</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveAddress">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="" v-model="supplier.email">
                                <label for="email">Email</label>
                            </div>
                            <div class="d-flex gap-2">
                                <div class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="whatsapp" placeholder=""
                                        v-model="supplier.whatsapp">
                                    <label for="whatsapp">Whatsapp</label>
                                </div>
                                <div class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="contact" placeholder=""
                                        v-model="supplier.contact">
                                    <label for="contact">Contact</label>
                                </div>
                            </div>
                            <div v-if="supplier.shipping" class="form-floating mb-3">
                                <input  type="text" class="form-control" id="addressLine1"
                                    placeholder="" v-model="supplier.shipping.line1" required>
                                <label for="addressLine1">Address Line 1</label>
                            </div>
                            <div v-if="supplier.shipping" class="form-floating mb-3">
                                <input  type="text" class="form-control" id="addressLine2"
                                    placeholder="" v-model="supplier.shipping.line2">
                                <label for="addressLine2">Address Line 2</label>
                            </div>
                            <div v-if="supplier.shipping" class="form-floating mb-3">
                                <input type="text" class="form-control" id="city" placeholder=""
                                    v-model="supplier.shipping.city" required>
                                <label for="city">City</label>
                            </div>
                            <div v-if="supplier.shipping" class="d-flex gap-2">
                                <div class="form-floating mb-3 w-50">
                                    <input type="text" class="form-control" id="state"
                                        placeholder="" v-model="supplier.shipping.state" required>
                                    <label for="state">State</label>
                                </div>
                                <div v-if="supplier.shipping" class="form-floating mb-3 w-50">
                                    <input type="number" class="form-control" id="pin"
                                        placeholder="" v-model="supplier.shipping.pincode" required>
                                    <label for="pin">Pin Code</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
// import ImageUploadBox from '@/components/avatar/ImageUploadBox.vue';

export default {
    name: 'ProfilePage',
    // components: { ImageUploadBox },
    data() {
        return {
            supplierId: '',
            addressLine1: '',
            addressLine2: '',
            email: '',
            whatsapp: '',
            contact: '',
            city: '',
            state: '',
            zip: '',
            isFormVisible: false,
            billingCheckbox: false,
            shippingCheckbox: false,
            bothCheckbox: false
        }
    },
    created() {
        this.supplierId = this.$route.params.supplierId
        this.$store.dispatch('fetchCustomer', this.supplierId)
    },
    computed: {
        supplier() {
            return this.$store.getters.getSupplier;
        }
    },
    methods: {
        showForm() {
            this.isFormVisible = true;
        },
        hideForm() {
            this.isFormVisible = false;
             this.addressLine1 = '';
            this.addressLine2 = '';
            this.city = '';
            this.state = '';
            this.zip = '';
        },
        saveAddress() {
             console.log('Address saved:', {
                addressLine1: this.addressLine1,
                addressLine2: this.addressLine2,
                city: this.city,
                state: this.state,
                zip: this.zip,
                billingOnly: this.billingCheckbox,
                shippingOnly: this.shippingCheckbox,
                bothBillingAndShipping: this.bothCheckbox
            });
            // Hide the form after saving the address
            this.hideForm();
        }
    }
}
</script>

<style lang="scss" scoped></style>