<template>
  <div class="login flex flex-row-reverse">
    <div class="w-2/5 flex justify-end">
      <img class="object-fill" src="../assets/img/image3.png" alt="">
    </div>
    <div class="">
      <div class="px-24">
        <div class="flex justify-center gap-2 py-4">
          <img src="../assets/img/Logo.png" class=".max-w-8 max-h-10" alt="">
          <h3 class="text-primary pt-4 font-bold">Bank Sampah Digital Ki Ageng Sengguruh</h3>
        </div>
        <div class="py-16">
          <h1 class="text-center text-black font-semibold text-5xl">Halaman Login</h1>
          <p class="m-4 text-center">Selamat Datang di Bank Sampah Digital Ki Ageng Sengguruh Malang!</p>
          <div class="bg-white rounded-lg shadow ">
            <div class="p-6 space-y-4">
                <form class="space-y-4" @submit.prevent="login">
                    <div>
                        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input v-model="username" type="text" name="username" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <div class="grid">
                      <button type="submit" class="w-full text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { useRouter } from 'vue-router';

export default {
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        const token = response.data.data.token;
        console.log(response.data, 'cek login');
        // Simpan token ke penyimpanan lokal, misalnya localStorage
        localStorage.setItem('token', token);
        // Alihkan pengguna ke halaman yang diperlukan setelah login
        this.$router.push('/home');
      })
      .catch(error => {
        console.error(error);
        // Tampilkan pesan kesalahan atau tindakan yang sesuai
      });
    },
  }
}
</script>

