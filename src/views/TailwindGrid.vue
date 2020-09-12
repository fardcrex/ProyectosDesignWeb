<template>

  <body class="container mx-auto mt-5 text-center">

    <div class="grid grid-cols-3 gap-4 my-4">
      <div class="bg-red-400 py-2">a</div>
      <div class="bg-red-400 py-2">b</div>
      <div class="bg-red-400 py-2">c</div>
      <div class="bg-red-400 py-2">d</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-blue-400 py-2">a</div>
      <div class="bg-blue-400 py-2">b</div>
      <div class="bg-blue-400 py-2">c</div>
      <div class="bg-blue-400 py-2">d</div>
    </div>
    <div class="grid grid-cols-4 col-gap-3 row-gap-3 my-4">
      <div class="py-4 bg-green-400 col-span-2">a</div>
      <div class="py-4 bg-green-400">b</div>
      <div class="py-4 bg-green-400">s</div>
      <div class="py-4 bg-green-400">c</div>
      <div class="py-4 bg-green-400 col-span-3">d</div>
    </div>
    <div class="grid grid-cols-12 gap-2">
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
      <div class="bg-orange-500 py-2">J</div>
    </div>
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
  </body>
</template>

<script>
// sm md lg xl
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tailwind";
</style>
