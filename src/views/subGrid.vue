<template>
  <div class="contenedorGrid">
    <div class="cabezera">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            href="https://bulma.io"
          >
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            >
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          class="navbar-menu"
        >
          <div class="navbar-start">
            <a
              class="navbar-item"
              href="https://bulma.io/"
              v-for="tab in menu"
              v-bind:key="tab"
            >{{tab}}</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a
                class="navbar-link"
                href="https://bulma.io/documentation/overview/start/"
              >
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/overview/start/"
                >
                  Overview
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/overview/modifiers/"
                >
                  Modifiers
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/columns/basics/"
                >
                  Columns
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/layout/container/"
                >
                  Layout
                </a>
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/form/general/"
                >
                  Form
                </a>
                <hr class="navbar-divider">
                <a
                  class="navbar-item"
                  href="https://bulma.io/documentation/elements/box/"
                >
                  Elements
                </a>
                <a
                  class="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a
                    class="button is-primary"
                    href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
                  >
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
        class="card"
        v-for="(item,index) in items"
        v-bind:key="index"
      >
        <header class="card-header">
          <p class="card-header-title">
            {{item.titulo}}
          </p>
          <a
            href="#"
            class="card-header-icon"
            aria-label="more options"
          >
            <span class="icon">
              <i
                class="fas fa-angle-down"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            {{item.cuerpo}}
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>

    </div>
    <div class="bibliografia">
      <div class="tabs is-boxed">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i
                  class="fas fa-image"
                  aria-hidden="true"
                ></i></span>
              <span>Pictures</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i
                  class="fas fa-music"
                  aria-hidden="true"
                ></i></span>
              <span>Music</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i
                  class="fas fa-film"
                  aria-hidden="true"
                ></i></span>
              <span>Videos</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i
                  class="far fa-file-alt"
                  aria-hidden="true"
                ></i></span>
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
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
          cuerpo:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
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
          cuerpo:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/bulma.scss";
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
  background-color: rgb(246, 250, 250);
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 220px;
  gap: 2rem;
  align-items: stretch;
  justify-items: stretch;
  padding: 2rem;
  overflow-y: auto;
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
