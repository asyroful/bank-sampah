<template>
  <div>
    <div class="bg-white rounded-xl p-6">
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-medium text-left py-2">Data Setor Sampah Nasabah</h3>
        <router-link to="/transaction/add">
          <button type="button" class="text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span class="pr-2">+</span>Tambah Setor Sampah</button>
        </router-link>
      </div>
      <div>
        <form class="flex items-center w-full mb-6">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
             </div>
            <input v-model="search" type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search..." required>
          </div>
        </form>     
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="p-3">
                          Nomor
                      </th>
                      <th scope="col" class="p-3">
                          <div class="flex items-center">
                            Tanggal Transaksi
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="p-3">
                          <div class="flex items-center">
                            Nama Nasabah
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="p-3">
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr v-for="(transaction, index ) in transactions" :key="transaction.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ transaction.date }}
                      </td>
                      <td class="px-3 py-4">
                        {{ transaction.nasabah.name }}
                      </td>
                      
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div @click="openModal(transaction.nasabah.id, transaction.date)" class="p-2 rounded bg-blue-700 cursor-pointer">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4569 4.7975C15.435 4.74813 14.9056 3.57375 13.7287 2.39687C12.1606 0.82875 10.18 0 7.99999 0C5.81999 0 3.83937 0.82875 2.27124 2.39687C1.09437 3.57375 0.562494 4.75 0.543119 4.7975C0.51469 4.86144 0.5 4.93064 0.5 5.00062C0.5 5.0706 0.51469 5.1398 0.543119 5.20375C0.564994 5.25312 1.09437 6.42688 2.27124 7.60375C3.83937 9.17125 5.81999 10 7.99999 10C10.18 10 12.1606 9.17125 13.7287 7.60375C14.9056 6.42688 15.435 5.25312 15.4569 5.20375C15.4853 5.1398 15.5 5.0706 15.5 5.00062C15.5 4.93064 15.4853 4.86144 15.4569 4.7975ZM7.99999 9C6.07624 9 4.39562 8.30062 3.00437 6.92188C2.43352 6.35418 1.94786 5.70685 1.56249 5C1.94776 4.29309 2.43343 3.64574 3.00437 3.07812C4.39562 1.69938 6.07624 1 7.99999 1C9.92374 1 11.6044 1.69938 12.9956 3.07812C13.5676 3.6456 14.0543 4.29295 14.4406 5C13.99 5.84125 12.0269 9 7.99999 9ZM7.99999 2C7.40665 2 6.82663 2.17595 6.33328 2.50559C5.83994 2.83524 5.45542 3.30377 5.22836 3.85195C5.00129 4.40013 4.94188 5.00333 5.05764 5.58527C5.17339 6.16721 5.45912 6.70176 5.87867 7.12132C6.29823 7.54088 6.83278 7.8266 7.41472 7.94236C7.99667 8.05811 8.59987 7.9987 9.14804 7.77164C9.69622 7.54458 10.1648 7.16006 10.4944 6.66671C10.824 6.17336 11 5.59334 11 5C10.9992 4.2046 10.6828 3.44202 10.1204 2.87959C9.55797 2.31716 8.79539 2.00083 7.99999 2ZM7.99999 7C7.60443 7 7.21775 6.8827 6.88885 6.66294C6.55996 6.44318 6.30361 6.13082 6.15224 5.76537C6.00086 5.39991 5.96125 4.99778 6.03842 4.60982C6.11559 4.22186 6.30608 3.86549 6.58578 3.58579C6.86549 3.30608 7.22185 3.1156 7.60981 3.03843C7.99778 2.96126 8.39991 3.00087 8.76536 3.15224C9.13081 3.30362 9.44317 3.55996 9.66293 3.88886C9.8827 4.21776 9.99999 4.60444 9.99999 5C9.99999 5.53043 9.78928 6.03914 9.41421 6.41421C9.03913 6.78929 8.53043 7 7.99999 7Z" fill="white"/>
                            </svg>
                          </div> 
                          <div @click="editItem(transaction.nasabah.id)" class="p-1 rounded bg-black cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.79375 13.4999H3C2.86739 13.4999 2.74022 13.4473 2.64645 13.3535C2.55268 13.2597 2.5 13.1326 2.5 12.9999V10.2062C2.49978 10.1413 2.51236 10.0769 2.53702 10.0169C2.56169 9.95682 2.59796 9.90222 2.64375 9.85619L10.1438 2.3562C10.1903 2.30895 10.2457 2.27144 10.3069 2.24583C10.3681 2.22022 10.4337 2.20703 10.5 2.20703C10.5663 2.20703 10.632 2.22022 10.6931 2.24583C10.7543 2.27144 10.8097 2.30895 10.8563 2.3562L13.6438 5.1437C13.691 5.19022 13.7285 5.24568 13.7541 5.30684C13.7797 5.368 13.7929 5.43364 13.7929 5.49995C13.7929 5.56625 13.7797 5.63189 13.7541 5.69305C13.7285 5.75421 13.691 5.80967 13.6438 5.85619L6.14375 13.3562C6.09773 13.402 6.04313 13.4383 5.98307 13.4629C5.92301 13.4876 5.85868 13.5002 5.79375 13.4999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8.5 4L12 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.25 5.75L4.25 11.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M5.96875 13.4688L2.53125 10.0312" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div @click="toggleModal" class="p-1 rounded bg-red-500 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.5 3.5H2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M9.5 6.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <Modal @close="toggleModal" :modalActive="modalActive">
                        <div class="modal-content">
                          <p class="text-center">Apakah kamu ingin menghapus data sampah?</p>
                        </div>
                        <!--Footer-->
                        <div class="flex justify-center pt-2">
                            <button @click="close" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Cancel</button>
                            <button @click="deleteItem(transaction.nasabah.id, transaction.date)" class="modal-close px-4 bg-red-600 p-3 rounded-lg text-white hover:bg-red-400">Hapus</button>
                          </div>
                      </Modal>
                  </tr>
              </tbody>
          </table>
          <div v-if="popupActive">
            <transition name="modal-animation">
              <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
                <div class="bg-white w-2/5 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                  <div class="modal-content py-16 text-left px-10">
                    <div>
                      <div class="flex justify-center mb-8">
                        <h3 class="text-2xl">Detail Sampah</h3>
                      </div>
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
                          <tr v-for="(detail, index) in detailItems.garbages" :key="detail.name" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
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
                      <div class="flex justify-between text-base text-black">
                        <div>
                          <p>Total :</p>
                        </div>
                        <div class="mr-24">
                          <p>{{ detailItems.total }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center pt-2">
                      <button @click="closeModal" class="px-4 text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 mr-2">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
      </div>
      <div class="flex flex-col items-center mt-4">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing <span class="font-semibold text-gray-900 dark:text-white">{{ currentPage }}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{ totalPages }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ transactions.length }}</span> Entries
        </span>
        <!-- Buttons -->
        <div class="inline-flex mt-2 xs:mt-0">
            <button @click="previousPage" :disabled="currentPage === 1" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
            </button>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
            </button>
        </div>
      </div>
      <div v-if="successMessage" class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  data() {
    return {
      search: '',
      transactions: [],
      detailItems: [],
      popupActive: false,
      currentPage: 1, // Halaman saat ini
      totalPages: 0, // Total halaman
      total: 0,
      successMessage: '',
    }
  },
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    const close = () => {
      modalActive.value = !modalActive.value
    }
    return { modalActive, toggleModal, close };
  },
  mounted() {
    this.fetchItems();
  },
  created() {
    // Periksa apakah ada pesan sukses dalam LocalStorage
    const successMessage = localStorage.getItem("successMessage");
    if (successMessage) {
      // Tampilkan notifikasi
      this.successMessage = successMessage
      setTimeout(() => {
        this.successMessage = ''; // Sembunyikan notifikasi setelah beberapa detik
      }, 3000);
      localStorage.removeItem("successMessage");
    }
  },
  methods: {
    fetchItems(){
      const token = localStorage.token
      axios.get(`deposit?page=${this.currentPage}`, {headers: { "Authorization": `Bearer ${token}` }})
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
    deleteItem(id, date){
      const token = localStorage.token
      // Menghapus item dengan ID tertentu dari API
      axios.delete(`deposit/${id}?date=${date}`, {headers: { "Authorization": `Bearer ${token}` }})
        .then((response) => {
          console.log(response)
          this.toggleModal();
          this.successMessage = response.data.message; // Tampilkan notifikasi "Berhasil dihapus"
          setTimeout(() => {
            this.successMessage = ''; // Sembunyikan notifikasi setelah beberapa detik
          }, 3000);
          this.fetchItems(); // Memuat kembali daftar item setelah menghapus
        })
        .catch(error => {
          console.error(error);
        });
      // if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      // }
    },
    editItem(id) {
      // Navigasi ke halaman edit dengan menggunakan ID item
      this.$router.push({ name: 'Edit Transaction', params: { id: id } });
    },
    openModal(id, date) {
      const token = localStorage.token;
      const url = `/deposit/${id}?date=${date}`;

      // Panggil API untuk mendapatkan detail transaksi
      axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
          console.log(response);
          this.detailItems = response.data.data;

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
  },
}
</script>

<style>

</style>