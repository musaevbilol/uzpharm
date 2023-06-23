<template>
  <!----- Organizator--- -->
  <div class="Organizatorbg">
    <div class="container Organ xl:pt-[100px] pb-[50px]">
      <div class="adv-title xl:mr-[84px]">
        <h1>Организаторы</h1>
      </div>
      <div class="allorganizator">
        <div
          class="OrganizatorImg"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/blazon.png" alt="" />
          <h3>
            министерство инвестиций и внешней торговли республики узбекистан
          </h3>
        </div>
        <div class="OrganizatorImg">
          <img src="../../assets/images/blazon2.png" alt="" />
          <h3>
            АГЕНТСТВО ПО РАЗВИТИЮ ФАРМАЦЕВТИЧЕСКОЙ ОТРАСЛИ МИНИСТЕРСТВО
            ИНВЕСТИЦИЙ, ПРОМЫШЛЕННОСТИ И ТОРГОВЛИ РЕСПУБЛИКИ УЗБЕКИСТАН
          </h3>
        </div>
        <div
          class="OrganizatorImg"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <img src="../../assets/images/organizator3.png" alt="img" />
          <h3>
            Ассоциация представительств иностранных фармацевтических компаний и
            производителей в Республике Узбекистан
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Organizatorbg {
  background: #f2f8f6;
}
.OrganizatorImg {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 250px;
  height: 300px;
  background: #ffffff;
  align-items: center;
  border: 1px solid white;
}
.OrganizatorImg h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  color: #1c2f3f;
}
.OrganizatorImg img {
  width: 90px;
  padding-bottom: 10px;
}
.adv-title {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: #1c2f3f;
}
.Organ {
  display: flex;
}
.allorganizator {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1280px) {
  .Organ {
    display: flex;
    flex-wrap: wrap;
  }
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 768px) {
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  .OrganizatorImg {
    width: 232px;
    height: 335px;
  }
  .adv-title h1 {
    margin-top: 30px;
    margin-bottom: 25px;
  }
}
@media (max-width: 640px) {
  .Organ {
    display: flex;
    flex-wrap: wrap;
  }
  .adv-title {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 414px) {
  .Organ {
    display: flex;
    flex-wrap: wrap;
  }
  .OrganizatorImg {
    width: 385px;
  }
  .adv-title {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>