<template>
  <div>
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "@/components/Login/NavBarComponent.vue";
export default { components: { NavBarComponent } };
</script>

<style lang="scss" scoped>
</style>
