<template >
  <section class="ganador">
    <div class="pop">
      <div class="pop-up">
        <div class="trophy">🏆</div>
      </div>
      <div class="text">
        <h3>Ganador</h3>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.ganador {
  //position: fixed;
}
.pop {
  height: 80px;
  width: 200px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px #e6e6e6d5;
  position: relative;
  margin: 10px;
}
.pop-up {
  position: absolute;
  top: -20px;
  width: 100%;
}
.pop-up .trophy {
  font-size: 30pt;
}
.pop-up img {
  height: 100px;
}
.pop .text {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: 35px;
}
.pop .text h3 {
  font-size: 25px;
  color: black;
  width: 100%;
  height: 100%;
  font-weight: bold;
  margin-bottom: 0px;
}
</style>
