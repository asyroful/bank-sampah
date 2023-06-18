<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Admin</h3>
    <div class="py-6">
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Admin</label>
          <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis nama admin disini" required="">
        </div>
        <div>
          <label for="address" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <textarea v-model="address" name="address" id="" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tulis alamat disini"></textarea>
        </div>
        <div>
          <label for="phone" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
          <input v-model="phone" type="number" name="phone" id="phone" placeholder="Tulis Nomor Telepon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div>
          <label for="username" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input v-model="username" type="text" name="username" id="username" placeholder="Tulis username anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <div>
          <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input v-model="password" type="text" name="password" id="password" placeholder="Tulis password anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
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
      name : '',
      role: 'admin',
      address: '',
      phone: '',
      username: '',
      password: '',
    };
  }, 
  methods: {
    handleSubmit(event) {
      event.preventDefault();

        const data = { 
          name: this.name,
          role: this.role,
          address: this.address,
          phone: this.phone,
          username: this.username,
          password: this.password,
        }; // Data baru yang akan ditambahkan
        const token = localStorage.token

      axios
        .post('user', data, {headers: { "Authorization": `Bearer ${token}` }}) // Ganti dengan URL API yang sesuai
        .then((response) => {
          const successMessage = response.data.message;
          localStorage.setItem("successMessage", successMessage);
          this.$router.push('/admin'); // Mengarahkan kembali ke halaman utama setelah menyimpan data
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