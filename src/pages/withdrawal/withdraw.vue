<template>
  <div>
    <div class="bg-white rounded-xl mt-4 p-6">
      <div class="flex justify-between mb-3">
        <h3 class="text-2xl font-medium text-left py-2">Penarikan Saldo Nasabah</h3>
        <h3 class="text-2xl font-medium text-left py-2">Saldo : 12.000</h3>        
      </div>
      <div v-if="cd === currentDate" class="flex justify-between bg-red-100 p-3 rounded-lg mb-3">
        <p class="w-2/3 text-sm font-base text-left text-red-400 py-2">Pergantian data penarikan saldo nasabah dapat dilakukan sebelum tanggal {{ cd }} </p>
        <button @click="editItem(id)" type="button" class="text-white px-4 bg-gray-300 rounded-lg focus:outline-none" disabled>Ubah Data Penarikan</button>    
      </div>
      <div v-else class="flex justify-between bg-green-300 p-3 rounded-lg mb-3">
        <p class="w-2/3 text-sm font-base text-left text-primary py-2">Pergantian data penarikan saldo nasabah dapat dilakukan sebelum tanggal {{ cd }} </p>
        <button @click="editItem(id)" type="button" class="text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Ubah Data Penarikan</button>    
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
                          <div @click="openModal(withdraw.id)" class="p-2 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" rx="4" fill="#616161"/>
                              <path d="M17.5 6.5H6.5C6.23478 6.5 5.98043 6.60536 5.79289 6.79289C5.60536 6.98043 5.5 7.23478 5.5 7.5V16.5C5.5 16.7652 5.60536 17.0196 5.79289 17.2071C5.98043 17.3946 6.23478 17.5 6.5 17.5H17.5C17.7652 17.5 18.0196 17.3946 18.2071 17.2071C18.3946 17.0196 18.5 16.7652 18.5 16.5V7.5C18.5 7.23478 18.3946 6.98043 18.2071 6.79289C18.0196 6.60536 17.7652 6.5 17.5 6.5ZM17.5 7.5V13.9219L15.8706 12.2931C15.7778 12.2002 15.6675 12.1266 15.5462 12.0763C15.4248 12.026 15.2948 12.0002 15.1634 12.0002C15.0321 12.0002 14.902 12.026 14.7807 12.0763C14.6594 12.1266 14.5491 12.2002 14.4563 12.2931L13.2063 13.5431L10.4563 10.7931C10.2687 10.6057 10.0145 10.5005 9.74937 10.5005C9.48427 10.5005 9.23002 10.6057 9.0425 10.7931L6.5 13.3356V7.5H17.5ZM6.5 14.75L9.75 11.5L14.75 16.5H6.5V14.75ZM17.5 16.5H16.1644L13.9144 14.25L15.1644 13L17.5 15.3363V16.5ZM13 10.25C13 10.1017 13.044 9.95666 13.1264 9.83332C13.2088 9.70999 13.3259 9.61386 13.463 9.55709C13.6 9.50032 13.7508 9.48547 13.8963 9.51441C14.0418 9.54335 14.1754 9.61478 14.2803 9.71967C14.3852 9.82456 14.4566 9.9582 14.4856 10.1037C14.5145 10.2492 14.4997 10.4 14.4429 10.537C14.3861 10.6741 14.29 10.7912 14.1667 10.8736C14.0433 10.956 13.8983 11 13.75 11C13.5511 11 13.3603 10.921 13.2197 10.7803C13.079 10.6397 13 10.4489 13 10.25Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                  </tr>
              </tbody>
          </table>
          <div v-if="popupActive">
            <transition name="modal-animation">
              <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
                <div class="bg-white w-2/5 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                  <div class="modal-content py-16 text-left px-10">
                    <div class="flex justify-center">
                      <img class="w-full p-4" :src="image_url" alt="">
                    </div>
                    <div class="flex justify-center pt-2">
                      <button @click="closeModal" class="px-4 text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-light rounded-lg text-sm py-2 mr-2">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
      </div>
    </div>
    <div v-if="successMessage" class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
        {{ successMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs';
export default {
  data() {
    return {
      withdraws: [],
      currentDate: '',
      popupActive: false,
      image_url: '',
      cd: '',
      successMessage: '',
    }
  },
  mounted() {
    this.fetchItems();
    const today = dayjs().format('YYYY-MM-DD');
    this.currentDate = today;
    console.log(this.currentDate)
  },
  computed: {
    convertedURL() {
      return this.image_url.replace('localhost:8000', 'localhost:8081');
    },
  },
  methods: {
    fetchItems(){
      const token = localStorage.token
      axios.get('cashout', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.withdraws = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
      axios.get('cashout-date', {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.cd = response.data.data.date;
        })
        .catch(error => {
          console.error(error);
        });
    },
    openModal(id) {
      const token = localStorage.token;
      axios.get(`photo_trx/${id}`, {headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.image_url = response.data.data.image_url;
          this.popupActive = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    closeModal() {
      this.popupActive = false;
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