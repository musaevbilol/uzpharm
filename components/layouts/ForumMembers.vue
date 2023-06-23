<template>
  <!-- --------------Forum members------------------ -->
  <div class="bgimage2">
    <div class="container main xl:pt-[100px]">
      <div class="forum xl:mr-[130px] xl:pt-[200px]">
        <h1 class="xl:pb-[30px]">
          Участники<br />
          форума
        </h1>
        <nuxtlink class="btn"> Смотреть всех </nuxtlink>
      </div>
      <!-- Blazon foruma-->
      <div class="GreenCard">
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/blazonnew0.png" alt="" />
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/blazonnew.png" alt="" />
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/blazonnew3.png" alt="" />
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/blazonnew4.png" alt="" />
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img src="../../assets/images/firstblaz.png" alt="" />
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img src="../../assets/images/twoblaz.png" alt="" />
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img src="../../assets/images/threeblaz.png" alt="" />
        </div>
        <nuxtlink
          to="#"
          class="allsee"
          data-aos="fade-down"
          data-aos-duration="4000"
        >
          <img src="../../assets/images/AllSee.png" alt="" />
        </nuxtlink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bgimage2 {
  background: url(../../assets/images/bgimage2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 50px;
}
.forum h1 {
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  color: #1c2f3f;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #06b48b;
  border-radius: 4px;
  padding: 6px 15px;
  width: 170px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  color: #06b48b;
}
.first {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  background: #edf5f3;
  border-radius: 4px;
}
.first img {
  width: 70px;
  height: 60px;
}
.first p {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: #1c2f3f;
}
.main {
  display: flex;
  padding-top: 50px;
}
.allsee img {
  width: 220px;
  height: 220px;
}
.GreenCard {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1280px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .GreenCard {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1024px) {
  .GreenCard {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .GreenCard {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
  .btn {
    margin-bottom: 20px;
  }
}
@media (max-width: 414px) {
  .GreenCard {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>