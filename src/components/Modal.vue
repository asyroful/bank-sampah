<template>
	
  <transition name="modal-animation">
    <div v-show="modalActive" class="fixed w-full h-full top-0 left-0 flex items-center justify-center">
			<div class="modal-overlay absolute z-50 w-full h-full bg-gray-900 opacity-50"></div>
			<div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-center items-center pb-3">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="36" cy="36" r="36" fill="#FFF4F2"/>
						<path d="M32.6667 41.2867L47.9867 25.965L50.3451 28.3217L32.6667 46L22.0601 35.3934L24.4167 33.0367L32.6667 41.2867Z" fill="#CB3A31"/>
					</svg>
        </div>

        <!--Body-->
        <slot />

        <!--Footer-->
        <!-- <div class="flex justify-center pt-2">
          <button @click="close" class="px-4 bg-transparent p-3 rounded-lg text-red-600 hover:bg-gray-100 hover:text-red-400 mr-2">Cancel</button>
          <button class="modal-close px-4 bg-red-600 p-3 rounded-lg text-white hover:bg-red-400">Hapus</button>
        </div> -->
      </div>
			</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>

<!-- <style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 64px 16px;
    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
    button {
      padding: 20px 30px;
      border: none;
      font-size: 16px;
      background-color: crimson;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style> -->