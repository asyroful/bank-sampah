<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Tambah Obat</h3>
    <div class="py-6">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="date" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal transaksi</label>
          <input v-model="form.date" type="text" name="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input tanggal transaksi" required="">
        </div>
        <div>
          <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Nasabah</label>
          <select v-model="form.name" id="medicine" placeholder="Pilih Nama Nasabah" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Ammar</option>
            <option value="">Hisyam</option>
          </select>
        </div>
        <div v-for="(input, index) in inputTrashs" :key="`phoneInput-${index}`" class="space-y-4">
          <div class="flex gap-3">
            <div class="w-1/2">
              <label for="trash" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Sampah</label>
              <select v-model="form.trash" id="medicine" placeholder="Pilih obat anda disini" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="L">Plastik</option>
                <option value="P">Kertas</option>
                <option value="L">Kaleng</option>
                <option value="P">Duplex</option>
              </select>
            </div>
            <div class="w-1/2">
              <label for="weight" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Berat Sampah</label>
              <input v-model="form.weight" type="number" name="weight" id="" placeholder="Input berat sampah" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div @click="addField(input, inputTrashs)" class="mt-7 ml-2 p-3 rounded-full border">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 7.15471 13.9385 7.30308 13.8291 7.41248C13.7197 7.52188 13.5714 7.58333 13.4167 7.58333H7.58333V13.4167C7.58333 13.5714 7.52188 13.7197 7.41248 13.8291C7.30308 13.9385 7.15471 14 7 14C6.84529 14 6.69692 13.9385 6.58752 13.8291C6.47812 13.7197 6.41667 13.5714 6.41667 13.4167V7.58333H0.583333C0.428624 7.58333 0.280251 7.52188 0.170854 7.41248C0.0614583 7.30308 0 7.15471 0 7C0 6.84529 0.0614583 6.69692 0.170854 6.58752C0.280251 6.47812 0.428624 6.41667 0.583333 6.41667H6.41667V0.583333C6.41667 0.428624 6.47812 0.280251 6.58752 0.170854C6.69692 0.0614583 6.84529 0 7 0C7.15471 0 7.30308 0.0614583 7.41248 0.170854C7.52188 0.280251 7.58333 0.428624 7.58333 0.583333V6.41667H13.4167C13.5714 6.41667 13.7197 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7Z" fill="black"/>
              </svg>
            </div>
          </div>
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
// import axios from 'axios'

export default {
  data() {
    return {
      form: {
        name : '',
        date : '',
        trash : '',
        weight : '',
      },
      inputTrashs : [{ phone : '' }]
    };
  }, 
  methods: {
    addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    handleSubmit() {
      let newPatient = {
        name: this.form.name,
        information: this.form.information,
        stock: this.form.stock,
      }
      this.$emit('create-patient', newPatient)
      console.log(this.$emit('create-patient', newPatient))
    }
    // async add() {
    //   const token = localStorage.getItem("token")
    //   this.form.birth = new Date (this.form.birth).toLocaleDateString('en-GB')
    //                     .split("/")
    //                     .reverse()
    //                     .join("-")
    //   await axios.post('user',{...this.form}, { headers: {"Authorization" : `Bearer ${token}`} })
    //   .then(response => {console.log(response)})
    // }
  }
}  
</script>