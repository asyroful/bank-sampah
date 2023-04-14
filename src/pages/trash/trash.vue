<template>
  <div>
    <div class="bg-white rounded-xl p-6">
      <div class="flex justify-between mb-6">
        <h3 class="text-2xl font-medium text-left py-2">Data Sampah</h3>
        <router-link to="/trash/add">
          <button type="button" class="text-white bg-primary hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm py-2 px-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><span class="pr-2">+</span>Tambah Sampah</button>
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
                            Harga
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                          <div class="flex items-center">
                            Satuan
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                
                  <tr v-for="(trash, index ) in filteredTrash" :key="trash.id" class="bg-white border-b text-gray-900 dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ index+1 }}
                      </td>
                      <td scope="row" class="px-3 py-4 dark:text-white">
                        {{ trash.name }}
                      </td>
                      <td class="px-3 py-4">
                        {{ trash.price }}
                      </td>
                      <td class="px-3 py-4">
                        {{ trash.weightUnit }}
                      </td>
                      <td class="px-3 py-4">
                        <div class="flex gap-1">
                          <div class="p-1 rounded bg-black cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.79375 13.4999H3C2.86739 13.4999 2.74022 13.4473 2.64645 13.3535C2.55268 13.2597 2.5 13.1326 2.5 12.9999V10.2062C2.49978 10.1413 2.51236 10.0769 2.53702 10.0169C2.56169 9.95682 2.59796 9.90222 2.64375 9.85619L10.1438 2.3562C10.1903 2.30895 10.2457 2.27144 10.3069 2.24583C10.3681 2.22022 10.4337 2.20703 10.5 2.20703C10.5663 2.20703 10.632 2.22022 10.6931 2.24583C10.7543 2.27144 10.8097 2.30895 10.8563 2.3562L13.6438 5.1437C13.691 5.19022 13.7285 5.24568 13.7541 5.30684C13.7797 5.368 13.7929 5.43364 13.7929 5.49995C13.7929 5.56625 13.7797 5.63189 13.7541 5.69305C13.7285 5.75421 13.691 5.80967 13.6438 5.85619L6.14375 13.3562C6.09773 13.402 6.04313 13.4383 5.98307 13.4629C5.92301 13.4876 5.85868 13.5002 5.79375 13.4999Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8.5 4L12 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M10.25 5.75L4.25 11.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M5.96875 13.4688L2.53125 10.0312" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                          <div class="p-1 rounded bg-red-600 cursor-pointer">
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
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h1>This is a Modal Header</h1>
        <p>This is a modal message</p>
      </div>
    </Modal>
    <button @click="toggleModal" type="button">Open Modal</button>
    <div class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button @click="deleteTrash(trash.id)" data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  data() {
    return {
      search: '',
      Trashs: [
        { id: 1, name: 'Plastik', price: 1500, weightUnit: 'Kilogram (Kg)'  },
        { id: 2, name: 'Kaleng', price: 2000, weightUnit: 'Kilogram (Kg)'  },
        { id: 3, name: 'Kertas', price: 1000, weightUnit: 'Kilogram (Kg)'  },
        { id: 4, name: 'Duplax', price: 1800, weightUnit: 'Kilogram (Kg)'  },
      ]
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
    return { modalActive, toggleModal };
  },
  methods: {
    deleteTrash(id){
      let deleteTrashList = this.Trashs.filter((e) => e.id != id);
      this.Trashs = deleteTrashList;
    }
  },
  computed : {
    filteredTrash: function() {
      return this.Trashs.filter(trash => 
        trash.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
  // async mounted() {
  //   const token = localStorage.getItem("token")
  //   const response = await axios.get('record', { headers: {"Authorization" : `Bearer ${token}`} })
  //   this.medicalRecord = response.data
  //   console.log(response) 
  // }
}
</script>

<style>

</style>