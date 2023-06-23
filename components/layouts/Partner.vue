<template>
  <!-- Partner Forum -->
  <section class="container mt-50px xl:mt-[100px] xl:pb-[80px] pb-[50px]">
    <div class="PartnerForum">
      <div class="adv-title xl:mr-[0px]">
        <h1>Партнеры форума</h1>
      </div>
      <!-- Partner -->
      <div class="AllPartner">
        <h3>Генеральный партнер</h3>
        <div class="GeneralPartner">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img src="../../assets/images/grandpharm.png" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1500"
          >
            <img src="../../assets/images/partner1.png" alt="img" />
          </div>
          <div
            class="PartnerImg IMAGE"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2000"
          >
            <img src="../../assets/images/pharmluxe.png" alt="img" />
          </div>
          <div
            class="PartnerImg IMAGE"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2500"
          >
            <img src="../../assets/images/astrazneca.png" alt="img" />
          </div>
        </div>
        <!-- line gray -->
        <!-- ---- -->
        <h3 class="mt-[20px] mb-[10px]">Главный партнер</h3>
        <div class="GeneralPartner">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img src="../../assets/images/partner4.png" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1000"
          >
            <img src="../../assets/images/partner2.png" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1500"
          >
            <img src="../../assets/images/partner3.png" alt="img" />
          </div>
        </div>
        <!-- ------- -->
        <h3 class="mt-[20px] mb-[10px]">Юридический партнер</h3>
        <div class="GeneralPartner">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img src="../../assets/images/partner13.png" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img src="../../assets/images/youngpharm.png" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2000"
          >
            <img src="../../assets/images/partnerend.png" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="3000"
          >
            <img src="../../assets/images/blacklegalmax.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.adv-title h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  color: #1c2f3f;
}
.PartnerForum {
  display: flex;
}
.PartnerImg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 205px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #c5d4e0;
  border-radius: 4px;
}
.PartnerImg img {
  width: 150px;
  height: 100px;
}
.IMAGE img {
  height: 60px;
}
.line {
  width: 885px;
  height: 0px;
  border: 1px solid #c5d4e0;
}
.AllPartner h3 {
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #1c2f3f;
}
.young img {
  height: 50px;
}
.GeneralPartner {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 1280px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }

  .PartnerImg {
    width: 182px;
  }
  .GeneralPartner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
}
@media (max-width: 1024px) {
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
}
@media (max-width: 768px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }
  .PartnerImg img {
    width: 140px;
  }
  .PartnerImg {
    width: 170px;
  }
  .GeneralPartner {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 640px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }

  .PartnerImg {
    width: 182px;
  }
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
}
@media (max-width: 414px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }
  .GeneralPartner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
  .PartnerImg {
    width: 182px;
  }
}
</style>