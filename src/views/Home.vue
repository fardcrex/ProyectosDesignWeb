<template>
  <div class="home">
    <HelloWorld msg="Welcome a mis varios proyectos de ejercicios web" />
    <div class="container_ejercicios">
      <CardPageView
        v-for="(contenido,index) in pagesContenidoArray"
        v-bind:key="index"
        :pageObject="contenido"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardPageView from "@/components/CardPageView.vue";
import dataPages from "@/data/dataPages.js";

export default {
  data() {
    return {
      pagesContenidoArray: [],
    };
  },
  created() {
    console.log(dataPages);
    this.pagesContenidoArray = dataPages;
  },
  name: "Home",
  components: {
    HelloWorld,
    CardPageView,
  },
};
</script>
<style lang="scss">
.home {
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  min-height: 100vh;
}
.container_ejercicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  justify-content: center;
  margin: 0 auto;
}
</style>
