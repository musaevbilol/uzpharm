<template>
  <!---- green1 column----- -->
  <section class="greencolumn xl:h-[300px] mt-[40px] xl:mt-[100px]">
    <div class="container green1">
      <div
        class="firstG pt-[80px] aos-animate"
        data-aos="flip-left"
        data-aos-easing="ease-in sine"
        data-aos-duration="3000"
      >
        >
        <div class="Green1 numimage">
          <img src="../../assets/images/num1.png" alt="" />
        </div>
        <div class="Green1">
          <p class="pt-2 text-[10px]">УЧАСТНИКОВ</p>
        </div>
      </div>
      <div class="firstG pt-[80px]" >
        <div class="Green1">
          <img class="xl:w-[70px]" src="../../assets/images/num2.png" alt="" />
        </div>
        <div class="Green1">
          <p class="gg pt-2 text-[10px]">
            ТЕМАТИЧЕСКИХ СЕССИЙ + КРУГЛЫЕ СТОЛЫ +<br />
            МАСТЕР-КЛАССЫ
          </p>
        </div>
      </div>
      <div
        class="firstG pt-[80px]"
        data-aos="flip-left"
        data-aos-easing="ease-in sine"
        data-aos-duration="3000"
      >
        <div class="Green1">
          <img src="../../assets/images/num3.png" alt="" />
        </div>
        <div class="Green1">
          <p class="g1 pt-2 text-[10px]">ДЕЛОВОГО ОБЩЕНИЯ</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.green1 {
  display: flex;
  gap: 32px;
}
.greencolumn {
  background: #f2f8f6;
}
.firstG {
  color: white;
  margin-top: 50px;
  width: 400px;
  height: 200px;
  background: #06b48b;
  border-radius: 4px;
}
.Green1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Green1 p {
  line-height: 150%;
}
@media (max-width: 1280px) {
}
@media (max-width: 768px) {
  .green1 {
    display: flex;
    gap: 10px;
  }
}
@media (max-width: 414px) {
  .green1 {
    display: flex;
    gap: 5px;
  }
  .numimage img {
    width: 70px;
  }
}
</style>