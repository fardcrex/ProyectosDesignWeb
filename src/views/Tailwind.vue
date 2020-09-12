<template>
  <div class="appContainer">
    <br>
    <h1>Hola mundo</h1>
    <br>
    <h2>Hola tailwind</h2>
    <br>
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl mt-3 border">
      <div class="flex-shrink-0">
        <img
          class="h-12 w-12"
          src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-icono-de-servicio-de-chat-by-vexels.png"
          alt="ChitChat Logo"
        >
      </div>

      <div class="ml-6 pt-1 ">
        <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
      </div>
    </div>
    <br>
    <div class=" container mx-auto py-10">
      <div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img
            class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="https://api.adorable.io/avatars/196/abott@adorable.png"
            alt=""
          >
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">Jane Doe</p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
            </div>
            <div class="flex flex-wrap">
              <button class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Call</button>
              <button class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="bg-blue-500 sm:bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mi botón</button>
  </div>

</template>

<script>
// sm md lg xl
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tailwind";
.appContainer {
  min-height: 100vh;
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}
</style>
