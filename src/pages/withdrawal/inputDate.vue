<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Input Tanggal Transaksi Penarikan</h3>
    <p class="text-left text-sm">halaman ini untuk menentukan tanggal pengubahan data penarikan saldo nasabah</p>
    <div class="py-6">
      <form @submit.prevent="updateItem" class="space-y-4 md:space-y-6">
        <div>
          <label for="date" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal transaksi</label>
          <VueDatePicker v-model="edited.date"></VueDatePicker>
        </div>
        <div class="grid justify-items-end">
          <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { VueDatePicker }, 
  data() {
    return {
      edited: {
        date: ''
      }
    }
  },
  
  mounted() {
    this.fetchItems(); // Panggil method untuk mengambil data nasabah saat komponen dimuat
  },
  methods: {
    formatDateToSend(dateObject) {
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const day = String(dateObject.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    },
      fetchItems() {
      const token = localStorage.token
      // Mengambil data item dari API menggunakan ID
      axios.get('cashout-date', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response, 'cek respon')
          this.edited = response.data.data;
          console.log(this.edited, 'cek respon edit')
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateItem() {
      const formattedDate = this.formatDateToSend(this.edited.date);
      const data = {
        date: formattedDate
      }

      const token = localStorage.token
      // Mengirim perubahan data item ke API
      axios.put('update-cashout-date', data, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/withdrawal'); // Navigasi ke halaman utama setelah mengupdate item
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
}  
</script>