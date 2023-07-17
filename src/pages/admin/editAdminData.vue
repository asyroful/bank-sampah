<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Edit Admin</h3>
    <div class="py-6">
      <form @submit.prevent="updateItem" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Admin</label>
          <input v-model="editedItem.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama admin disini" required="">
        </div>
        <div>
          <label for="address" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <textarea v-model="editedItem.address" name="address" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis alamat disini"></textarea>
        </div>
        <div>
          <label for="phone" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
          <input v-model="editedItem.phone" type="number" name="phone" id="phone" placeholder="Tulis Nomor Telepon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
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

export default {
  data() {
    return {
      editedItem: {
        name : '',
        role: 'admin',
        address: '',
        phone: '',
      },
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
      axios.get(`user/${itemId}`, {headers: { "Authorization": `Bearer ${token}` }})
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
      const request = {
        name : this.editedItem.name,
        role: this.editedItem.role,
        address: this.editedItem.address,
        phone: this.editedItem.phone,
      }
      const token = localStorage.token
      // Mengirim perubahan data item ke API
      axios.put(`user/${itemId}`, request, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/admin'); // Navigasi ke halaman utama setelah mengupdate item
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
}  
</script>