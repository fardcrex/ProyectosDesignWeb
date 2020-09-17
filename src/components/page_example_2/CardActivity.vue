<template>
  <div
    class="activities-grid-item"
    v-bind:style="{ background: `url(${require('@/assets/img_page_2/'+urlBackground)})` }"
  >
    <slot></slot>
    <h1>{{title}}</h1>
    <p>{{cuerpo}}</p>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    cuerpo: {
      type: String,
      default: "",
    },
    urlBackground: {
      type: String,
      default: "stars.jpg",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/stylepage2.scss";
.activities-grid-item {
  height: 40em;
  padding: 4em 5em 6em;
  position: relative;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-gradient;
    z-index: -1;
  }
  svg {
    height: 4em;
    width: 4em;
    /*   margin-right: 0.5rem; */
  }
  h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 1.7em;
    text-transform: uppercase;
    margin: 2em 0;
  }
}
</style>
