<template>
  <div>
    <div class="headerSxD">
      <p>CSS GRID</p>
    </div>
    <div class="contenedor">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div class="div_4">4</div>
      <div>5</div>
      <div>6</div>
      <div class="div_7">
        <p>7</p>
      </div>
      <div class="div_8">8</div>
      <div>9</div>
      <div class="div_10">10</div>
      <div>11</div>
      <div>12</div>
    </div>
    <div class="contenedor_2">
      <div class="header">1</div>
      <div class="sidebar-1">2</div>
      <div class="contenido">3</div>
      <div class="sidebar-2">4</div>
      <div class="widgets">5</div>
      <div class="footer">6</div>
    </div>
    <div class="contenedor_3">
      <div class="">1</div>
      <div class="">2</div>
      <div class="">3</div>
      <div class="">4</div>
      <div class="">5</div>
      <div class="">6</div>
      <div class="">7</div>
      <div class="">8</div>
      <div class="">9</div>
    </div>
    <div class="contenedor_4">
      <div class="">1</div>
      <div class="">3</div>
      <div class="span2">2</div>
      <div class="">5</div>
      <div class="">6</div>
      <div class="">7</div>
      <div class="span2">4</div>
      <div class="">8</div>
      <div class="">9</div>
      <div class="span2">10</div>
      <div class="">11</div>
      <div class="">12</div>
      <div class="">11</div>
      <div class="">12</div>
      <div class="span2">11</div>
      <div class="">12</div>
    </div>
    <div class="contenedor_5">
      <div class="">1</div>
      <div class="">2</div>
      <div class="">3</div>

    </div>
    <div class="contenedor_6">
      <div class="">1</div>
      <div class="">2</div>
      <div class="">3</div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #eeeeee;
}
.header p {
  font-size: 50px;
  text-align: center;
  padding: 20px 0;
}

.contenedor {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  font-size: 50px;
  display: grid;
  grid-template-columns: repeat(3, 200px) minmax(200px, 100px);
  grid-template-rows: repeat(5, 150px);
  justify-content: end;
  row-gap: 20px;
  grid-auto-flow: dense;
  column-gap: 20px;
  margin-bottom: 10vh;
}
.contenedor div {
  // display: block;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
}
.div_7 {
  /*   display: flex;
  flex-direction: column;
  justify-content: center; */
  grid-column: 1/3;
  grid-row: 2/4;
}
.div_4 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.div_10 {
  grid-row: 2/4;
}
.div_8 {
  grid-row: 5/6;
  grid-column-start: 1;
  grid-column: span 3;
}

.contenedor_2 {
  display: grid;
  gap: 20px;
  font-size: 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 150px);
  grid-template-areas:
    "header header header"
    "sidebar-1 contenido sidebar-2"
    "sidebar-1 widgets sidebar-2"
    "footer footer footer";
  div {
    // display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.header {
  background-color: chartreuse;
  grid-column-start: header;
  grid-column-end: header;
}
.sidebar-1 {
  background-color: burlywood;
  grid-area: sidebar-1;
}
.contenido {
  background-color: rgb(163, 205, 253);
  grid-area: contenido;
}
.sidebar-2 {
  background-color: rgb(238, 251, 115);
  grid-area: sidebar-2;
}
.footer {
  background-color: rgb(124, 115, 251);
  grid-area: footer;
}
.widgets {
  background-color: rgb(115, 251, 206);
  grid-area: widgets;
}

.contenedor_3 {
  margin: 30px;
  display: grid;
  font-size: 50px;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 200px);
  place-items: center center;
  border: 1px solid red;
}
.contenedor_3 div {
  border: 1px solid red;
  // height: 150px;
  /*  display: flex;
  align-items: center;
  justify-self: stretch; */
  //align-self: center;
  place-self: stretch start;

  background-color: aquamarine;
}
.contenedor_4 {
  margin: 30px;
  display: grid;
  font-size: 50px;
  gap: 20px;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 200px 100px 200px;
  grid-auto-columns: 100px;
  grid-auto-flow: row;
  border: 1px solid red;
  grid-auto-flow: row dense;
}
.contenedor_4 div,
.contenedor_6 div,
.contenedor_5 div {
  background-color: rgb(255, 206, 127);
}
.span2 {
  grid-row: span 2;
  background-color: #1900ff !important;
}

.contenedor_5,
.contenedor_6 {
  margin: 30px;
  display: grid;
  gap: 20px;
  font-size: 50px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.contenedor_6 {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
