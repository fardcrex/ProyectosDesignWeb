<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">
        <h1>Dinamo</h1>
        <p>Lorem ipsum dolor sit amet consectetur, voluptatibus ipsam hic, ad soluta quae voluptate sunt voluptatum itaque esse ullam asperiores aperiam, aut explicabo commodi incidunt nulla culpa.</p>
        <div class="buttons">
          <button @click="desacelerar"> desacelerar </button>
          <button @click="Ascelerar"> Ascelerar </button>
        </div>
      </div>
      <div class="view">
        <div class="clip-svg">

          <div class="night">
            <div
              class="surface"
              v-bind:style="{ animation: `moveRight ${velocidad}s linear infinite` }"
            ></div>
            <div class="car suspension">
              <img
                src="../assets/Img_06.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <clipPath id="myClip">
            <path
              id="Vector"
              d="M142.39 0C142.39 0 -8.61004 29 0.389958 233C0.389958 233 3.08995 328.93 52.6299 417.12C92.0299 487.28 163.05 534 242.92 543.66C347.8 556.42 614.92 589.29 672.39 428C672.39 428 678.88 352.53 738.93 317C782.27 291.39 809.39 245.32 809.39 195V0H142.39Z"
              fill="url(#paint0_linear)"
            />
          </clipPath>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="451322"
              y1="154159"
              x2="1.10643e+06"
              y2="154159"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7FE0F4" />
              <stop
                offset="0.1"
                stop-color="#76D9F1"
              />
              <stop
                offset="0.26"
                stop-color="#5CC8EA"
              />
              <stop
                offset="0.47"
                stop-color="#33ABDD"
              />
              <stop
                offset="0.57"
                stop-color="#1E9CD7"
              />
              <stop
                offset="0.87"
                stop-color="#0075BE"
              />
              <stop
                offset="0.99"
                stop-color="#355C97"
              />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      velocidad: 6,
    };
  },
  methods: {
    desacelerar() {
      this.velocidad = this.velocidad + 3;
      console.log(this.velocidad);
    },
    Ascelerar() {
      this.velocidad = this.velocidad - 3;
      if (this.velocidad <= 0) this.velocidad = 1;
      console.log(this.velocidad);
    },
  },
};
</script>

<style lang="scss" scoped>
$tablet: 540px;
$notebook: 814px;
$laptop: 1025px;
$desk: 1500px;
* {
  margin: 0;
  box-sizing: border-box;
}

.wrapper {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100vw;
  margin: 0 auto;
  box-shadow: 1px 3px 20px rgba(0, 0, 0, 0);
  height: 100vh;
  @media screen and (min-width: $desk) {
  }
}
.container {
  background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  max-width: 1100px;
  width: 85vw;
  overflow: hidden;
  height: 70vh;
  min-height: 600px;

  .title {
    width: 90%;

    text-align: center;
    padding: 2rem;
    margin: 7rem 0;
  }
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 3rem;
    color: aliceblue;
    margin: 1.5rem;
  }
  p {
    font-family: "Muli", sans-serif;
    color: #ececf0bd;
  }
  button {
    font-family: "Muli", sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin: 2rem 0.3rem;
    border-radius: 3rem;
    border: 0;
    cursor: pointer;
  }
}
.clip-svg {
  clip-path: url(#myClip);
}

.night {
  height: 560px;
  width: 700px;
  background: url("../assets/background.png");
  background-size: cover;
  position: relative;
  overflow-x: hidden;
}
.moveRight {
  animation: moveRight 6s linear infinite;
}
.surface {
  height: 140px;
  width: 500%;
  display: block;
  background: url("../assets/Img_02.png");
  position: absolute;
  bottom: 0;
  left: 0px;
  background-repeat: repeat-x;
}

@keyframes moveRight {
  100% {
    transform: translateX(-2950px);
  }
}

/* Made Changes */
.car {
  position: absolute;
  bottom: 43px;
  left: 24%;
}

.suspension {
  animation: suspension 1s linear infinite;
}

@keyframes suspension {
  100% {
    transform: translateY(-1px);
  }
  50% {
    transform: translateY(2px);
  }
  0% {
    transform: translateY(-1px);
  }
}

/* .container .title {
  width: 90%;
  height: 20%;
} */
</style>
