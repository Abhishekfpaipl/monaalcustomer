<template>
    <div class="d-flex flex-column justify-content-around align-items-center"
        style="height:100vh;background: linear-gradient(113deg, rgba(38,130,193,1) 31%, rgba(36,81,159,1) 97%);padding: 14px 12px ;">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <img :src="logo" style="width: 75vw; object-fit: contain;grey">
            <p class="my-4 m-0 fw-bold text-white text-center icon">Monaal Supplier</p>
        </div>
        <select v-if="suppliersList" v-model="selectedSupplier" class="form-select mb-3" style="width: 300px;">
            <option disabled value="">Select Customer</option>
            <option v-for="supplier in suppliersList" :key="supplier.sid" :value="supplier.sid">{{ supplier.sid }}</option>
        </select>
        <!-- <router-link to="/login-page" class="text-white text-decoration-none fs-4">
            Get Started
        </router-link> -->
        <router-link :to="`/dashboard/` + selectedSupplier " class="text-white text-decoration-none fs-4">
            Get Started
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RootPage',
    data() {
        return {
            logo: 'img/logowhite.png',
            suppliersList: null,
            selectedSupplier: null
        }
    },
    mounted() {
        axios.get('http://192.168.1.183:8000/api/customers')
            .then(response => {
                this.suppliersList = response.data.data
            })
            .catch((error) => { console.error('error getting suppliers', error) })
    }
}
</script>

<style lang="scss" scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
}
</style>