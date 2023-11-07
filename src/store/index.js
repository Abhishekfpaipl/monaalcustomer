import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    datas: [
      {
        id: 1,
        num: 7,
        txt: "New Orders"

      },
      {
        id: 2,
        num: 44,
        txt: "Pending Orders"
      },
      {
        id: 3,
        num: 3,
        txt: "Completed Orders"
      },
      {
        id: 4,
        num: 54,
        txt: "Cancelled Orders"
      },
      {
        id: 5,
        num: 11,
        txt: "Pending Bills"
      },
      {
        id: 6,
        num: 78,
        txt: "Paid Bills"
      },
      {
        id: 6,
        num: 78,
        txt: "Pending Debit Notes"
      },
      {
        id: 6,
        num: 78,
        txt: "Cleared Debit Notes"
      },
    ],
    activeOrder: {},
    orders: [
      {
        id: 1,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Issued',
        debitNote: {
          amt: '750',
          sid: 'DN-2310001'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 2,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310002',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Partial',
        debitNote: {
          amt: '750',
          sid: 'DN-2310002'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 3,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310003',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Completed',
        debitNote: {
          amt: '750',
          sid: 'DN-2310003'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310004',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Cancelled',
        debitNote: {
          amt: '750',
          sid: 'DN-2310004'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
    ],
    activeBill: {},
    bills: [
      {
        id: 1,
        date: '17',
        month: 'Oct',
        billno: 'AM4585621',
        amount: '1,00,000',
        status: 'Pending',
        pono: '',
        gst: 5000,
        totalAmnt: '1,05,000',
        note: 'lorem ipsum',
        invoice: "img/color/invoice.png",
        bilty: "img/color/bilty.png",
        billimg: "img/color/billimg.png",
        debit: "img/color/debit.png",
        bank: "img/color/debit.png",
        img: 'img/color/pink.jpg',
        name: 'Pink',
        qty: '1000 mtr',
        colorImg: 'img/icons/colorImg.png',
        width: '56 inch',
        length: '180 cm',
        bill: [
          {
            img: 'img/icons/fab2.png',
            name: 'Name1'

          },
          {
            img: 'img/icons/fab1.png',
            name: 'Name2'

          },
          {
            img: 'img/icons/fab3.png',
            name: 'Name3'

          },
        ]
      },
      {
        id: 2,
        date: 19,
        month: 'Oct',
        billno: 'AM4585622',
        amount: '2,00,000',
        status: 'Paid',
        gst: 6000,
        totalAmnt: '2,06,000',
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },
      {
        id: 2,
        date: 27,
        month: 'Oct',
        billno: 'AM4585623',
        amount: '3,00,000',
        status: 'Cancelled',
        gst: 6000,
        totalAmnt: '3,10,000',
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },

    ],
    buyers: {
      id: 1,
      img: 'http://dillisix.com/storage/55/Amit.jpeg',
      name: 'Amit Sardar',
      whatsapp: '1234567890',
      contact: '2135468790',
      mobile: '32165649870',
      email: 'amitsardar@fpaipl.com',
      desc: 'test',
      businessName: 'Sardar Enterprises',
      gstin: '24HRMPS5668N1ZM',
      address: {
        billing: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
        shipping: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020'
      }
    },
    supplier: {}
  },
  getters: {
    getDatas: state => state.datas,
    getActiveOrder: state => state.activeOrder,
    getOrders: state => state.orders,
    getActiveBill: state => state.activeBill,
    getBills: state => state.bills,
    getBuyers: state => state.buyers,
    getSupplier: state => state.supplier
  },
  mutations: {
    selectOrder(state, data) {
      state.activeOrder = data;
    },
    hideOrder(state) {
      state.activeOrder = {};
    },
    selectBill(state, data) {
      state.activeBill = data;
    },
    hideBill(state) {
      state.activeBill = {};
    },
    setSupplier(state, data) {
      state.supplier = data
    }
  },
  actions: {
    selectOrder({ commit }, data) {
      commit("selectOrder", data);
    },
    hideOrder({ commit }) {
      commit("hideOrder");
    },
    selectBill({ commit }, data) {
      commit("selectBill", data);
    },
    hideBill({ commit }) {
      commit("hideBill");
    },
    fetchCustomer({ commit }, data) {
      axios.get('http://192.168.1.183:8000/api/customers/' + data)
        .then(response => {
          commit('setSupplier', response.data.data)
        })
        .catch((error) => { console.error('fetchCustomer', error) })
    }
  },
  modules: {},
});
