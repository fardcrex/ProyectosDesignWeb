<template>
  <div
    id="nav"
    :class="{shadow:loggedIn}"
  >

    <router-link to="/">Inicio</router-link>
    <router-link to="/notas">Notas</router-link>
    <router-link to="/tailwind">Tailwind</router-link>
    <router-link to="/grid">Grid</router-link>

    <!--  <router-link
      v-if="!loggedIn"
      to="/entrar"
      class="button"
    >Entrar</router-link> -->

  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped >
@import "@/assets/styles/global.scss";

#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  max-width: 100%;
  margin: auto;
  padding: 0.2em 0.6em;

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $notebook) {
    padding: 0.2em 10%;
  }
  @media screen and (min-width: $laptop) {
    padding: 0.2em 15%;
  }
}
.shadow {
  background: $color-card;
  box-shadow: $shadow-neumorphic;
}
.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: $color-white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: $color-primary;
  border-bottom: 2px solid $color-card-outer;
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
