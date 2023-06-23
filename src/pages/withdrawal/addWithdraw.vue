<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Edit Data Sampah</h3>
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
          <label for="bank_number" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nomor Rekening</label>
          <input v-model="editedItem.bank_number" name="bank_number" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Satuan Sampah">
        </div>
        <div>
          <label for="wallet_number" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nomor E-Wallet</label>
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
      }
    };
  }, 
  created() {
    const itemId = this.$route.params.id; // Mendapatkan ID item dari URL
    this.fetchItem(itemId);
  },
  methods: {
    fetchItem(itemId) {
      const token = localStorage.token
      // Mengambil data item dari API menggunakan ID
      axios.get(`withdraw/${itemId}`, {headers: { "Authorization": `Bearer ${token}` }})
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
      const itemId = this.$route.params.id; // Mendapatkan ID item dari URL
      const token = localStorage.token
      // Mengirim perubahan data item ke API
      axios.put(`withdraw/${itemId}`, this.editedItem, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/withdraw'); // Navigasi ke halaman utama setelah mengupdate item
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
}  
</script>