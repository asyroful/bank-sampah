<template>
  <div>
    <div class="bg-white rounded-xl mt-4 p-6">
      <div class="flex justify-between mb-3">
        <h3 class="text-2xl font-medium text-left py-2">Penarikan Saldo Nasabah</h3>
        <router-link to="/withdrawal/inputDate">
          <button type="button" class="text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Input Tanggal</button>
        </router-link>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-3 py-3">
                          Nomor
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Tanggal Transaksi
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Nama Nasabah
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Saldo Nasabah
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Status
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr v-for="(withdraw, index ) in withdraws" :key="withdraw.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td class="px-3 py-4">
                        {{ withdraw.date_transaction }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ withdraw.user }}
                      </td>
                      
                      <td class="px-3 py-4">
                        {{ withdraw.cash_out }}
                      </td>
                      <td class="px-3 py-4">
                        <div v-if="withdraw.status === 'save'" class="bg-green-200 text-green-400 text-xs text-center font-medium px-2 py-0.5 rounded-full w-16">
                          Save
                        </div>
                        <div v-if="withdraw.status === 'transfer'" class="bg-yellow-200 text-yellow-400 text-xs text-center font-medium px-2 py-0.5 rounded-full w-16">
                          Transfer
                        </div>
                        <div v-if="withdraw.status === 'manual'" class="bg-blue-200 text-blue-400 text-xs text-center font-medium px-2 py-0.5 rounded-full w-16">
                          Manual
                        </div>
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div @click="uploadImage(withdraw.id)" class="p-2 rounded bg-black">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 9.5V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V9.5C2 9.36739 2.05268 9.24021 2.14645 9.14645C2.24021 9.05268 2.36739 9 2.5 9C2.63261 9 2.75979 9.05268 2.85355 9.14645C2.94732 9.24021 3 9.36739 3 9.5V13H13V9.5C13 9.36739 13.0527 9.24021 13.1464 9.14645C13.2402 9.05268 13.3674 9 13.5 9C13.6326 9 13.7598 9.05268 13.8536 9.14645C13.9473 9.24021 14 9.36739 14 9.5ZM5.85375 5.35375L7.5 3.70688V9.5C7.5 9.63261 7.55268 9.75979 7.64645 9.85355C7.74021 9.94732 7.86739 10 8 10C8.13261 10 8.25979 9.94732 8.35355 9.85355C8.44732 9.75979 8.5 9.63261 8.5 9.5V3.70688L10.1462 5.35375C10.2401 5.44757 10.3673 5.50028 10.5 5.50028C10.6327 5.50028 10.7599 5.44757 10.8538 5.35375C10.9476 5.25993 11.0003 5.13268 11.0003 5C11.0003 4.86732 10.9476 4.74007 10.8538 4.64625L8.35375 2.14625C8.30731 2.09976 8.25217 2.06288 8.19147 2.03772C8.13077 2.01256 8.06571 1.99961 8 1.99961C7.93429 1.99961 7.86923 2.01256 7.80853 2.03772C7.74783 2.06288 7.69269 2.09976 7.64625 2.14625L5.14625 4.64625C5.05243 4.74007 4.99972 4.86732 4.99972 5C4.99972 5.13268 5.05243 5.25993 5.14625 5.35375C5.24007 5.44757 5.36732 5.50028 5.5 5.50028C5.63268 5.50028 5.75993 5.44757 5.85375 5.35375Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    <div v-if="successMessage" class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
        {{ successMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      withdraws: [],
      successMessage: '',
    }
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    fetchItems(){
      const token = localStorage.token
      axios.get('cashout-admin', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.withdraws = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.total = response.data.meta.total;
        })
        .catch(error => {
          console.error(error);
        });
    },
    uploadImage(id) {
        // Navigasi ke halaman edit dengan menggunakan ID item
        this.$router.push({ name: 'Upload', params: { id: id } });
      },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchItems();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchItems();
      }
    },
  }
}
</script>

<style>

</style>