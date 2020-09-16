<template>
  <nav>
    <div class="nav-brand">
      <router-link to="/">
        <img
          src="../../assets/img_page_2/logo.png"
          alt=""
        >
      </router-link>
    </div>
    <div
      class="menu-icons open"
      @click="changeActiveNav"
    >
      <i class="icon ion-md-menu"></i>
    </div>
    <ul
      class="nav-list"
      v-bind:class="{ active: isActive }"
    >
      <div
        class="menu-icons close"
        @click="changeActiveNav"
      >
        <i class="icon ion-md-close"></i>
      </div>
      <li
        class="nav-item"
        v-for="(item,index) in nav_links"
        v-bind:key="index"
      >
        <router-link
          :to="item.ruta"
          class="nav-link"
        >{{item.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    nav_links: Array,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    changeActiveNav() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped >
@import "@/assets/styles/global.scss";
@import "@/assets/styles/stylepage2.scss";

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-brand {
  width: 2rem;
  @media screen and (min-width: 700px) {
    width: 3.5em;
  }
}
.menu-icons i {
  margin: 0;
  font-size: 2rem;
  color: #fafafa;
  cursor: pointer;
  @media screen and (min-width: 700px) {
    display: none;
  }
}
.close i {
  color: $color-secundario;
}
.nav-list {
  width: 25rem;
  height: 100vh;
  background-color: #d7d4e4;
  position: fixed;
  top: 0;
  right: -26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  transition: all 650ms ease-in-out;
  @media screen and (min-width: 700px) {
    width: initial;
    height: initial;
    background-color: transparent;
    position: initial;
    top: initial;
    right: initial;
    flex-direction: row;
    transition: initial;
  }
}
.nav-list.active {
  right: 0;
}

.close {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
}

.nav-item {
  margin: 1.5rem 0;
  @media screen and (min-width: 700px) {
    margin: 0 2.5em;
  }
}
.nav-link {
  font-size: 1.6em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 700px) {
    color: #fafafa;
    position: relative;
    font-size: 1.3em;
  }

  &:before {
    @media screen and (min-width: 700px) {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.5em;
      background-color: $color-secundario;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 650ms;
    }
  }
  &:hover::before {
    @media screen and (min-width: 700px) {
      transform: scaleX(1);
    }
  }
}
.router-link-exact-active {
  color: #fafafa;
  position: relative;
  font-size: 1.3em;
  &:before {
    @media screen and (min-width: 700px) {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.5em;
      background-color: $color-secundario;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 650ms;
      transform: scaleX(1);
    }
  }
}
</style>
