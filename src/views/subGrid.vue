<template>
  <div class="contenedorGrid">
    <div class="cabezera">
      <div
        v-for="tab in menu"
        v-bind:key="tab"
      >{{tab}}</div>

    </div>
    <div class="ads">
      <div>D</div>
      <div>E</div>
    </div>
    <div class="ads_two">
      <button
        @click="agregarItem"
        type="button"
      >Agregar</button>
    </div>
    <div class="main">
      <div
        v-for="(item,index) in items"
        v-bind:key="index"
      >
        <h2>{{item.titulo}}</h2>
        <p>{{item.cuerpo}}</p>
      </div>
    </div>
    <div class="bibliografia"></div>
    <div class="redes"></div>
    <div class="footerino"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ["A", "B", "C"],
      items: [
        {
          titulo: "titulo",
          cuerpo: "cuerpo del item",
        },
        {
          titulo: "titulo",
          cuerpo: "cuerpo del item",
        },
      ],
    };
  },
  methods: {
    agregarItem() {
      for (let index = 0; index < 25; index++) {
        this.items.push({
          titulo: "titulo",
          cuerpo: "cuerpo del item",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$tablet: 540px;
$notebook: 814px;
$laptop: 1025px;
$desk: 1500px;
.contenedorGrid {
  background-color: antiquewhite;
  margin: 0 auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20vh 30vh 100vh 30vh 25vh 30vh;
  grid-template-areas:
    "cabezera  cabezera"
    "ads       ads"
    "main      main "
    "ads_two   ads_two"
    "biblio    redes"
    "footerino footerino";

  @media screen and (min-width: $tablet) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 20vh 30vh 100vh 30vh 30vh;
    grid-template-areas:
      "cabezera  cabezera  cabezera  cabezera  "
      "ads      ads      ads_two            ads_two"
      "main      main      main           main"
      "biblio    biblio    biblio       redes"
      "footerino footerino footerino footerino";
  }
  @media screen and (min-width: $notebook) {
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 20vh 60vh 60vh 30vh 30vh 30vh;
    grid-template-areas:
      "cabezera  ads"
      "main      ads"
      "main      ads_two"
      "biblio    ads_two"
      "biblio    redes"
      "footerino footerino";
  }
}
.cabezera {
  background-color: aquamarine;
  grid-area: cabezera;
  grid-column-start: cabezera;
  grid-column-end: cabezera;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
}
.main {
  background-color: cadetblue;
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 220px;
  gap: 2rem;
  align-items: stretch;
  justify-items: stretch;
  padding: 2rem;
  overflow-y: auto;
  div {
    background-color: coral;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2rem;
    align-items: flex-start;
  }
}
.ads {
  background-color: rgb(255, 255, 109);
  grid-area: ads;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
}
.ads_two {
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  display: grid;
  grid-area: ads_two;
  align-items: center;
  grid-template-rows: 1fr;
  justify-items: center;
}
.bibliografia {
  background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
  grid-area: biblio;
}
.redes {
  background-color: rgb(109, 194, 255);
  grid-area: redes;
}
</style>
