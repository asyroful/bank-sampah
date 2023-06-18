<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Setor Sampah</h3>
    <div class="py-6">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="date" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal transaksi</label>
          <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <VueDatePicker v-model="date"></VueDatePicker>
          </div>
        </div>
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Nasabah</label>
          <select v-model="selectedCustomer" id="customer" placeholder="Pilih Nama Nasabah" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="customer in customers" :key="customer.id" :value="customer.id">
              {{ customer.name }}
            </option>
          </select>
        </div>
        <div v-for="(depo, index) in deposit" :key="index" class="space-y-4">
          <div class="flex gap-3">
            <div class="w-1/2">
              <label for="trash" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Sampah</label>
              <select v-model="depo.selectedGarbage" id="garbage" placeholder="Pilih jenis sampah disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="garbage in garbages" :key="garbage.id" :value="garbage.id">
                  {{ garbage.name }}
                </option>
                
              </select>
            </div>
            <div class="w-1/2">
              <label for="weight" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Berat Sampah</label>
              <input v-model="depo.weight" type="number" name="weight" id="" placeholder="Input berat sampah" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div @click="addDeposit" class="mt-7 ml-2 p-3 rounded-full border">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="grid justify-items-end">
          <div class="flex gap-2">
            <button type="reset" class="w-32 text-primary bg-white border-2 border-primary hover:bg-hover hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset</button>
            <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
          </div>
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
      customers: [],
      garbages: [],
      date: '',
      selectedCustomer: '',
      deposit: [{
        selectedGarbage: null,
        weight: ''
      }]
    }
  },
  
  mounted() {
    this.fetchCustomers(); // Panggil method untuk mengambil data nasabah saat komponen dimuat
    this.fetchGarbages(); // Panggil method untuk mengambil data sampah saat komponen dimuat
  },
  methods: {
    addDeposit() {
      const newDeposit = {
        id: this.deposit.selectedGarbage,
        weight: this.deposit.weight,
      };
      this.deposit.push(newDeposit);
    },
    formatDateToSend(dateObject) {
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const day = String(dateObject.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    },
    fetchCustomers() {
      const token = localStorage.token
        // Mengambil data nasabah dari API menggunakan axios atau metode lainnya
        axios.get('user?role=nasabah', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            this.customers = response.data.data; // Menyimpan data nasabah ke dalam array customers
          })
          .catch(error => {
            console.error(error);
          });
      },
    fetchGarbages() {
      const token = localStorage.token
        // Mengambil data nasabah dari API menggunakan axios atau metode lainnya
        axios.get('garbage', {headers: { "Authorization": `Bearer ${token}` }})
          .then(response => {
            this.garbages = response.data.data; // Menyimpan data nasabah ke dalam array customers
          })
          .catch(error => {
            console.error(error);
          });
      },
      handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.token;
        const formattedDate = this.formatDateToSend(this.date);

        // Buat objek permintaan (request body)
        const data = {
          date: formattedDate,
          nasabah_id: this.selectedCustomer,
          deposit: this.deposit.map(item => ({
            garbage_id: item.selectedGarbage,
            weight: item.weight
          }))
        };
        axios
          .post('deposit', data, {headers: { "Authorization": `Bearer ${token}` }}) // Ganti dengan URL API yang sesuai
          .then((response) => {
            const successMessage = response.data.message;
            localStorage.setItem("successMessage", successMessage);
            this.$router.push('/transaction'); // Mengarahkan kembali ke halaman utama setelah menyimpan data
          })
          .catch(error => {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
              this.errorMessage = error.response.data.message; // Menyimpan pesan kesalahan dari respons API
            } else {
              this.errorMessage = 'Terjadi kesalahan saat menyimpan data.'; // Menyimpan pesan kesalahan umum
            }
          });
      }
  }
}  
</script>