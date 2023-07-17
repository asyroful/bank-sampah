<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Upload Bukti Transfer</h3>
    <div class="py-6">
      <label class="block text-left mb-4 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
      <input @change="handleFileChange" type="file" id="photo" accept="image/*" class="block w-full text-sm text-gray-900 border border-primary rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-700">
      <div class="grid justify-items-end my-4">
        <button @click="uploadImage" type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        trx_photo: null,
      }
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        this.trx_photo = file;
      },
      uploadImage() {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('trx_photo', this.trx_photo);

        const itemId = this.$route.params.id;
        const token = localStorage.token;
        axios.post(`photo_trx/${itemId}`, formData, {
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          const successMessage = response.data.message;
            localStorage.setItem("successMessage", successMessage);
            this.$router.push('/withdrawal'); // Mengarahkan kembali ke halaman utama setelah menyimpan data
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