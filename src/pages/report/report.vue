<template>
  <div>
    <div class="bg-white rounded-xl mt-4 p-6">
      <div class="flex justify-between mb-3">
        <h3 class="text-2xl font-medium text-left py-2">Laporan Transaksi</h3>
      </div>
      <div class="w-1/2">
        <div class="my-2">
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Nasabah</label>
          <select v-model="selectedName" id="customer" placeholder="Pilih Nama Nasabah" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option v-for="customer in customers" :key="customer.name" :value="customer.name">
              {{ customer.name }}
            </option>
          </select>
        </div>
        <div class="flex">
          <div class="mr-10">
            <label for="birth" class="text-left block mb-2 text-xs font-medium text-gray-900 dark:text-white">Dari Tanggal :</label>
            <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <VueDatePicker v-model="formattedStartDate"></VueDatePicker>
            </div>
          </div>
          <div>
            <label for="birth" class="text-left block mb-2 text-xs font-medium text-gray-900 dark:text-white">Ke Tanggal : </label>
            <div class="relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <VueDatePicker v-model="formattedEndDate"></VueDatePicker>
            </div>
          </div>
        </div>
        <div class="my-3 grid justify-items-end">
          <div class="flex gap-2">
            <button type="reset" class="w-24 text-primary bg-white border-2 border-primary hover:bg-hover hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset</button>
            <button @click="fetchItems" type="submit" class="w-24 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Filter</button>
          </div>
        </div>
      </div>
      
      <div v-if="transactions.length > 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(transaction, index ) in transactions" :key="transaction.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td class="px-3 py-4">
                        {{ transaction.date }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ transaction.nasabah.name }}
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div @click="openModal(transaction.nasabah.id, transaction.date)" class="p-2 rounded bg-blue-700">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4569 4.7975C15.435 4.74813 14.9056 3.57375 13.7287 2.39687C12.1606 0.82875 10.18 0 7.99999 0C5.81999 0 3.83937 0.82875 2.27124 2.39687C1.09437 3.57375 0.562494 4.75 0.543119 4.7975C0.51469 4.86144 0.5 4.93064 0.5 5.00062C0.5 5.0706 0.51469 5.1398 0.543119 5.20375C0.564994 5.25312 1.09437 6.42688 2.27124 7.60375C3.83937 9.17125 5.81999 10 7.99999 10C10.18 10 12.1606 9.17125 13.7287 7.60375C14.9056 6.42688 15.435 5.25312 15.4569 5.20375C15.4853 5.1398 15.5 5.0706 15.5 5.00062C15.5 4.93064 15.4853 4.86144 15.4569 4.7975ZM7.99999 9C6.07624 9 4.39562 8.30062 3.00437 6.92188C2.43352 6.35418 1.94786 5.70685 1.56249 5C1.94776 4.29309 2.43343 3.64574 3.00437 3.07812C4.39562 1.69938 6.07624 1 7.99999 1C9.92374 1 11.6044 1.69938 12.9956 3.07812C13.5676 3.6456 14.0543 4.29295 14.4406 5C13.99 5.84125 12.0269 9 7.99999 9ZM7.99999 2C7.40665 2 6.82663 2.17595 6.33328 2.50559C5.83994 2.83524 5.45542 3.30377 5.22836 3.85195C5.00129 4.40013 4.94188 5.00333 5.05764 5.58527C5.17339 6.16721 5.45912 6.70176 5.87867 7.12132C6.29823 7.54088 6.83278 7.8266 7.41472 7.94236C7.99667 8.05811 8.59987 7.9987 9.14804 7.77164C9.69622 7.54458 10.1648 7.16006 10.4944 6.66671C10.824 6.17336 11 5.59334 11 5C10.9992 4.2046 10.6828 3.44202 10.1204 2.87959C9.55797 2.31716 8.79539 2.00083 7.99999 2ZM7.99999 7C7.60443 7 7.21775 6.8827 6.88885 6.66294C6.55996 6.44318 6.30361 6.13082 6.15224 5.76537C6.00086 5.39991 5.96125 4.99778 6.03842 4.60982C6.11559 4.22186 6.30608 3.86549 6.58578 3.58579C6.86549 3.30608 7.22185 3.1156 7.60981 3.03843C7.99778 2.96126 8.39991 3.00087 8.76536 3.15224C9.13081 3.30362 9.44317 3.55996 9.66293 3.88886C9.8827 4.21776 9.99999 4.60444 9.99999 5C9.99999 5.53043 9.78928 6.03914 9.41421 6.41421C9.03913 6.78929 8.53043 7 7.99999 7Z" fill="white"/>
                            </svg>
                          </div>  
                        </div>
                      </td>
                  </tr>
              </tbody>
            </table>
            <div v-if="popupActive">
              <div>
                <transition name="modal-animation">
                  <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
                    <div class="bg-white w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                      <div class="modal-content py-4 text-left px-6">
                        <div>
                          <div>
                            <div>
                              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                  <tr>
                                      <th scope="col" class="px-3 py-3">
                                          Nomor
                                      </th>
                                      <th scope="col" class="px-3 py-3">
                                          <div class="flex items-center">
                                            Jenis Sampah
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                          </div>
                                      </th>
                                      <th scope="col" class="px-3 py-3">
                                          <div class="flex items-center">
                                            Berat
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                          </div>
                                      </th>
                                      <th scope="col" class="px-3 py-3">
                                          <div class="flex items-center">
                                            Harga
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                                          </div>
                                      </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(detail, index) in detailItems" :key="detail.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                                      <td scope="row" class="px-3 py-2 dark:text-white">
                                        {{ index+1 }}
                                      </td>
                                      <td scope="row" class="px-3 py-2 dark:text-white">
                                          {{ detail.garbage }}
                                      </td>
                                      <td class="px-3 py-2">
                                          {{ detail.weight }}
                                      </td>
                                      <td class="px-3 py-2">
                                          {{ detail.price }}
                                      </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="flex justify-center pt-2">
                          <button @click="closeModal" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="py-32 text-center">Tidak ada transaksi yang tercatat</p>
          </div>
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
      transactions: [],
      selectedName: '',
      startDate: '',
      endDate: '',
      detailItems: [],
      popupActive: false,
    };
  },
  mounted() {
    this.fetchCustomers(); // Panggil method untuk mengambil data nasabah saat komponen dimuat
    this.fetchItems(); // Panggil method untuk mengambil data item saat komponen dimuat
  },
  computed: {
    formattedStartDate: {
      get() {
        // Format tanggal menggunakan fungsi formatDateToSend
        return this.startDate ? this.formatDateToSend(this.startDate) : '';
      },
      set(value) {
        this.startDate = value;
      }
    },
    formattedEndDate: {
      get() {
        // Format tanggal menggunakan fungsi formatDateToSend
        return this.endDate ? this.formatDateToSend(this.endDate) : '';
      },
      set(value) {
        this.endDate = value;
      }
    }
  },
  methods: {
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
  fetchItems(){
    // Buat objek query parameter berdasarkan input pencarian
    const query = {
      nasabah: this.selectedName,
      start: this.formattedStartDate, // Gunakan formattedStartDate sebagai pengganti startDate
      end: this.formattedEndDate // Gunakan formattedEndDate sebagai pengganti endDate
    };
    const token = localStorage.token
      axios.get('transaction', {params: query, headers: { "Authorization": `Bearer ${token}` }})
        .then(response => {
          console.log(response)
          this.transactions = response.data.data;
          this.totalPages = response.data.meta.last_page;
          this.total = response.data.meta.total;
        })
        .catch(error => {
          console.error(error);
        });
    },
    openModal(id, date) {
      const token = localStorage.token;
      const url = `/deposit/${id}?date=${date}`;

      // Panggil API untuk mendapatkan detail transaksi
      axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
          console.log(response);
          this.detailItems = response.data.data.garbages;

          this.popupActive = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    closeModal() {
      this.popupActive = false;
    },
  }
}
</script>

<style>

</style>