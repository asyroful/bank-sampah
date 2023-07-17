<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Edit Data Saldo Nasabah</h3>
    <div class="py-6">
      <form @submit.prevent="updateItem" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Penarikan Saldo</label>
          <select v-model="editedItem.type" id="gender" placeholder="Pilih jenis kelamin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="transfer">Transfer</option>
            <option value="manual">Cash</option>
            <option value="save">Save</option>
          </select>
        </div>
        <div>
          <label for="bank_name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Bank</label>
          <select v-model="editedItem.bank_name" id="gender" placeholder="Pilih jenis kelamin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value=""></option>
            <option value="BNI">BNI</option>
            <option value="BRI">BRI</option>
            <option value="BCA">BCA</option>
            <option value="Mandiri">Mandiri</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label for="bank_number" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nomor Rekening(optional)</label>
          <input v-model="editedItem.bank_number" name="bank_number" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Satuan Sampah">
        </div>
        <div>
          <label for="wallet_number" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nomor E-Wallet(optional)</label>
          <input v-model="editedItem.wallet_number" name="wallet_number" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Satuan Sampah">
        </div>
        <div>
          <label for="cash_out" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah yang ingin ditarik</label>
          <input v-model="editedItem.cash_out" name="cash_out" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Satuan Sampah">
        </div>
        <div class="grid justify-items-end">
          <div class="flex gap-2">
            <button type="reset" class="w-32 text-primary bg-white border-2 border-primary hover:bg-hover hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset</button>
            <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
          </div>
        </div>
      </form>
      <div v-if="errMessage">
        <transition name="modal-animation">
          <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
            <div class="bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div class="modal-content py-8 text-left px-10">
                <div>
                  <div class="flex justify-center items-center">
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 0.998657C31.06 0.998657 40 9.96066 40 20.9987C40 32.0407 31.06 40.9987 20 40.9987C8.96 40.9987 0 32.0407 0 20.9987C0 9.96066 8.96 0.998657 20 0.998657ZM20 26.8607C19.04 26.8607 18.26 27.6407 18.26 28.6007C18.26 29.5607 19.04 30.3607 20.02 30.3607C20.98 30.3607 21.76 29.5607 21.76 28.6007C21.76 27.6407 20.98 26.8607 20 26.8607ZM20 11.6587C19.04 11.6587 18.24 12.4607 18.24 13.4187V22.2587C18.24 23.2207 19.04 23.9987 20 23.9987C20.96 23.9987 21.74 23.2207 21.74 22.2587V13.4187C21.74 12.4607 20.96 11.6587 20 11.6587Z" fill="#CB3A31"/>
                    </svg>
                  </div>
                  <p class="text-red-600 mt-2 text-center">{{ errMessage }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg">
          <div class="flex justify-center items-center pb-3">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36" cy="36" r="36" fill="#FFF4F2"/>
              <path d="M32.6667 41.2867L47.9867 25.965L50.3451 28.3217L32.6667 46L22.0601 35.3934L24.4167 33.0367L32.6667 41.2867Z" fill="#CB3A31"/>
            </svg>
          </div>
          <p class="text-center">Apakah kamu ingin menarik uang sejumlah {{ editedItem.cash_out }}?</p>
          <div class="flex justify-center pt-2">
            <button @click="cancelForm" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Cancel</button>
            <button @click="submitForm" class="px-4 bg-red-600 p-3 rounded-lg text-white hover:bg-red-400">kirim</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      editedItem: {
        type : '',
        bank_name: '',
        bank_number: '',
        wallet_number: '',
        cash_out: '',
      },
      showConfirmationModal: false,
      errMessage: '',
    };
  }, 
  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      const token = localStorage.token
      // Mengambil data item dari API menggunakan ID
      axios.get('withdraw', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response, 'cek respon')
          this.editedItem = response.data.data;
          console.log(this.editedItem, 'cek respon edit')
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateItem() {
    const token = localStorage.token;

    // Memeriksa apakah cashout lebih besar dari saldo
    axios.get('getBalance', { headers: { "Authorization": `Bearer ${token}` } })
      .then((response) => {
        console.log(response, 'cek saldo')
        const balance = response.data.balance;

        if (this.editedItem.cash_out > balance) {
          // Menampilkan pesan kesalahan
          this.errMessage = 'Saldo Anda tidak mencukupi';

          setTimeout(() => {
            this.errMessage = '';
          }, 4000);
          return; // Menghentikan proses updateItem
        }
        else {
          // Menampilkan konfirmasi
          this.showConfirmationModal = true;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    },
    submitForm() {
      const token = localStorage.token;
      axios.put(`withdraw-update`, this.editedItem, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/withdraw'); // Navigasi ke halaman utama setelah mengupdate item
        })
        .catch((error) => {
          console.error(error);
        });

      // Menutup konfirmasi
      this.showConfirmationModal = false;
    },
  }
}  
</script>