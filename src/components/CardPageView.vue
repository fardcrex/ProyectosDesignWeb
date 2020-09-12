<template>
  <div class="p-4">
    <div class="bg-gray-100 p-5 rounded-lg ">
      <img
        class="h-40 rounded w-full  object-center mb-6"
        :src="require('@/assets/miniaturas/'+pageObject.imagenSrc)"
        alt="content"
      >

      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{pageObject.titulo}}</h2>
      <p class="leading-relaxed text-base">{{pageObject.contenido}}</p>
      <router-link
        class="mt-3 text-indigo-500 inline-flex items-center"
        :to="pageObject.link"
      >Visitar Página
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPageView",
  props: {
    pageObject: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/tailwind";
</style>
