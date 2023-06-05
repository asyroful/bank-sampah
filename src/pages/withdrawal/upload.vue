<template>
  <div class="bg-white rounded-xl p-6">
    <h3 class="text-2xl font-medium text-left py-2">Upload Bukti Transfer</h3>
    <div class="py-6">
      <form class="space-y-4">
        <label class="block text-left mb-2 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
        <input class="block w-full text-sm text-gray-900 border border-primary rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-700" id="file_input" type="file">
        <div class="grid justify-items-end">
          <button type="submit" class="w-32 text-white bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Simpan</button>
        </div>
      </form>
    </div>
  </div>
</template>