<template>
  <div class="body">
    <header>
      <div class="container">
        <AppNav :nav_links="nav_links"></AppNav>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="container">
          <div class="main-message">
            <h3>The great outdoor</h3>
            <router-view></router-view>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate mollitia veritatis autem ratione culpa molestias accusamus quae quis odio inventore dicta officia, eaque dolores quibusdam pariatur est excepturi quos.</p>
            <div class="cta">
              <a
                href="#"
                class="btn"
              >Book now</a>
            </div>
          </div>
        </div>
      </section>
      <section class="experience-outdoors">
        <div class="container">
          <div class="title-heading">
            <h3>Experiencia</h3>
            <h1>The thrilling outdoors</h1>
            <p>Lorem ipsum dolor sit amet, cta, vitae eveniet distinctio aut dolorum?</p>
          </div>
          <div class="activities-grid">
            <div class="activities-grid-item start-gazing">
              <i class="icon ion-md-star"></i>
              <h1>Estrella dinamo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis consequuntur adipisci esse corporis fugiat, magni dolores magnam aperiam, praesentium voluptates illum minus! Ut, officiis dolores ipsa reiciendis iste at.</p>
            </div>
            <div class="activities-grid-item hiking">
              <i class="icon ion-md-compass"></i>
              <h1>hiking dinamo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis consequuntur adipisci esse corporis fugiat, magni dolores magnam aperiam, praesentium voluptates illum minus! Ut, officiis dolores ipsa reiciendis iste at.</p>
            </div>
            <div class="activities-grid-item camping">
              <i class="icon ion-md-bonfire"></i>
              <h1>Camping dinamo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis consequuntur adipisci esse corporis fugiat, magni dolores magnam aperiam, praesentium voluptates illum minus! Ut, officiis dolores ipsa reiciendis iste at.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="container">
          <div class="testimonial">
            <div class="testimonial-text-box">
              <p>Este Tour es fantastico para el estilo de vida Lo recomiendo!</p>
              <i class="icon ion-md-quote"></i>
            </div>
            <div class="testimonial-customer">
              <img
                src="../assets/img_page_2/perfil.jpg"
                alt=""
              >
              <h1>Jair Conislla</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="begin-adventure">
        <div class="container">
          <div class="title-heading">
            <h3>Let the</h3>
            <h1>Adventure begin</h1>
            <p>Lorem ipsum dolor sit amet, cta, vitae eveniet distinctio aut dolorum?</p>
          </div>
          <div class="adventure-grid">
            <div class="adventure-grid-item">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iure asperiores sapiente saepe accusantium. Incidunt minus eum iste! Voluptate pariatur aspernatur aperiam rerum omnis qui error nam sunt earum doloremque.
              </p>
            </div>
            <div class="adventure-grid-item">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iure asperiores sapiente saepe accusantium. Incidunt minus eum iste! Voluptate pariatur aspernatur aperiam rerum omnis qui error nam sunt earum doloremque.
              </p>
            </div>
          </div>
          <a
            class="btn"
            href="#"
          >Book your adventure</a>
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2020 OutdoorsDinamo, Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<script>
import AppNav from "@/components/page_example_2/AppNav.vue";
export default {
  components: { AppNav },
  data() {
    return {
      nav_links: [
        {
          name: "Inicio",
          ruta: "/ExamplePage2",
        },
        {
          name: "Destinatario",
          ruta: "/ExamplePage2/Destinatario",
        },
        {
          name: "Precio",
          ruta: "/ExamplePage2/Precio",
        },
        {
          name: "Booking",
          ruta: "/ExamplePage2/Booking",
        },
        {
          name: "Nosotros",
          ruta: "/ExamplePage2/Nosotros",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/stylepage2.scss";
/* header */
header {
  width: 100%;
  height: 5em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.container {
  width: 100%;
  max-width: 98rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* HERO */
.hero {
  width: 100%;
  height: 80vh;
  background: $color-gradient,
    url("../assets/img_page_2/header-bg.jpg") center no-repeat;
  position: relative;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 4.7rem;
    background: url("../assets/img_page_2/wave-small.png") center no-repeat;
    background-size: cover;
  }
}
.main-message {
  width: 100%;
  max-width: 50rem;
  color: #fafafa;
  text-transform: uppercase;
  transform: translateY(10%);
  h3 {
    font-size: 1rem;
  }
  h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 2rem;
    margin: 1rem 0;
  }
  p {
    text-transform: lowercase;
  }
}
.btn {
  background-color: $color-secundario;
  border-radius: 2em;
  color: #fafafa;
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  transition: background-color 650ms;
}
.btn:hover {
  background-color: $color-secundario;
}
/* Experiencias al aire libre */
.experience-outdoors {
  padding: 0;
}
.title-heading {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 8em;
  color: rgba(0, 0, 0, 0.7);
  h3 {
    font-size: 1.4em;
  }
  h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 2em;
    margin: 0.5em 0 1em;
  }
  p {
    text-transform: lowercase;
  }
}
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  gap: 2.5em;
}

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
  i {
    font-size: 4em;
    color: $color-secundario;
  }
  h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 1.7em;
    text-transform: uppercase;
    margin: 2em 0;
  }
}
.start-gazing {
  background: url("../assets/img_page_2/stars.jpg");
}
.hiking {
  background: url("../assets/img_page_2/hiking.jpg");
}
.camping {
  background: url("../assets/img_page_2/camping.jpg");
}

/* testimonial */

.testimonials {
  width: 100%;
  height: 80vh;
  background: $color-gradient,
    url("../assets/img_page_2/testimonials-bg.jpg") center no-repeat fixed;
  position: relative;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 4.7em;
    background: url("../assets/img_page_2/wave-small-reversed.png") center
      no-repeat;
    background-size: cover;
  }
}
.testimonial {
  width: 100%;
  color: #fafafa;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &-text-box {
    padding: 0 1.5em;
    margin-bottom: 2em;
    position: relative;
    i {
      position: absolute;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 8em;
      color: $color-secundario;
      opacity: 0.5;
      z-index: -1;
    }
  }

  &-customer {
    img {
      width: 10em;
      height: 10em;
      border-radius: 100%;
      border: 3px solid $color-secundario;
    }
    h1 {
      margin-top: 0.5em;
    }
  }
}

/* Begin adventures */
.adventure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  gap: 2.5em;
  margin-bottom: 2em;
  &-item p {
    color: rgba(0, 0, 0, 0.7);
  }
}

footer {
  padding: 2.5em 0;
  background-color: $color-secundario;
  text-align: center;
  color: #fafafa;
}

@media screen and (min-width: 470px) {
  .hero::before {
    height: 9.4em;
    background: url("../assets/img_page_2/wave-medium.png") center no-repeat;
    background-size: cover;
  }
  .testimonials::before {
    height: 9.4em;
    background: url("../assets/img_page_2/wave-medium-reversed.png") center
      no-repeat;
    background-size: cover;
  }
}
@media screen and (min-width: 700px) {
  header {
    height: 8em;
  }
  .nav-brand {
    width: 3.5em;
  }
  .nav-list {
    width: initial;
    height: initial;
    background-color: transparent;
    position: initial;
    top: initial;
    right: initial;
    flex-direction: row;
    transition: initial;
  }
  .menu-icons {
    display: none;
  }
  .nav-item {
    margin: 0 2.5em;
  }
  .nav-link,
  .current {
    color: #fafafa;
    position: relative;
    font-size: 1.3em;
  }
  .nav-link::before,
  .current::before {
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
  .current::before {
    transform: scaleX(1);
  }
  .nav-link:hover::before {
    transform: scaleX(1);
  }
  .hero {
    height: 80vh;
    min-height: 600px;
  }
  .testimonials {
    min-height: 600px;
  }
  .main-message {
    transform: translateY(40%);
  }
  .title-heading h1 {
    font-size: 2.5em;
  }
}
@media screen and (min-width: 950px) {
  .hero::before {
    height: 22.7em;
    background: url("../assets/img_page_2/wave-large.png") center no-repeat;
    background-size: cover;
  }
  .testimonials::before {
    height: 22.7em;
    background: url("../assets/img_page_2/wave-large-reversed.png") center
      no-repeat;
    background-size: cover;
  }
}
@media screen and (min-width: 1200px) {
  .hero {
    height: 90vh;
  }
  .main-message {
    padding-left: 5em;
  }
}
</style>
