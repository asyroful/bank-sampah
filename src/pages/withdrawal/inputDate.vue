<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Input Tanggal Transaksi Penarikan</h3>
    <p class="text-left text-sm">halaman ini untuk menentukan tanggal pengubahan data penarikan saldo nasabah</p>
    <div class="py-6">
      <form class="space-y-4 md:space-y-6">
        <div>
          <label for="date" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal transaksi</label>
          <input type="text" name="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input tanggal transaksi" required="">
        </div>
        <div class="grid justify-items-end">
          <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>