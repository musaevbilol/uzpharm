<template>
  <!-- --Main Speaker- -->
  <section class="mainspeaker xl:pt-[100px]">
    <div class="container Main">
      <div class="SpeakerText">
        <h1 class="xl:pb-[20px]">Основные спикеры</h1>
        <nuxtlink to="/members" class="btn1">Смотреть всех</nuxtlink>
      </div>
      <!-- speaker card -->
      <div class="AllCard">
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker1.png" alt="" />
          <h1>Воитов Азиз</h1>
          <div class="bggreen">
            <p>Первый заместитель министра</p>
          </div>
          <h3>
            Министерство инвестиций и внешней торговли Республики Узбекистан
          </h3>
        </div>
        <!-- ------ -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker2.png" alt="" />
          <h1>Иноятов Амрилло</h1>
          <div class="bggreen">
            <p>Первый заместитель министра</p>
          </div>
          <h3>Министерство Здравоохранения Республики Узбекистан</h3>
        </div>
        <!-- ---- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker3.png" alt="" />
          <h1>Кариев Сардор</h1>
          <div class="bggreen">
            <p>Директор</p>
          </div>
          <h3>Агентство по развитию фармацевтической отрасли</h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker4.png" alt="" />
          <h1>Шорахметов Шохрух</h1>
          <div class="bggreen">
            <p>Председатель</p>
          </div>
          <h3>Антимонопольный комитет Республики Узбекистан</h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker5.png" alt="" />
          <h1>Азиз Дусматов</h1>
          <div class="bggreen">
            <p>Директор</p>
          </div>
          <h3>
            Центр надлежащей практики ГУП Агентства по развитию фармацевтической
            отрасли при Минздраве
          </h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker6.png" alt="" />
          <h1>Аскарова Мухаббат</h1>
          <div class="bggreen">
            <p>Председатель</p>
          </div>
          <h3>
            Ассоциация представительств иностранных фармацевтических компаний и
            производителей в Республике Узбекистан
          </h3>
        </div>
        <!-- --- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker7.png" alt="" />
          <h1>Ерхат Искалиев</h1>
          <div class="bggreen">
            <p>Председатель</p>
          </div>
          <h3>ТОО «СК-Фармация»</h3>
        </div>
        <!-- -- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img src="../../assets/images/speaker8.png" alt="" />
          <h1>Адриано Антонио Треве</h1>
          <div class="bggreen">
            <p>Председатель</p>
          </div>
          <h3>
            Центральняа и Восточная Европа, Турция, Россия и Индийский
            субконтинент
          </h3>
        </div>
        <!-- -- -->
          <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
            <img src="../../assets/images/speaker9.png" alt="" />
            <h1>Лидия Ключарева</h1>
            <div class="bggreen">
              <p>Председатель</p>
            </div>
            <h3>
              Группа стран СНГ, дивизион Безрецептурные препараты, АО «Байер»
            </h3>
          </div>
    
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.mainspeaker {
  padding-bottom: 100px;
  background: #078b6c;
}
.SpeakerText h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  color: #ffffff;
}
.btn1 {
  cursor: pointer;
  width: 170px;
  color: #edf5f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 6px 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}
.Main {
  display: flex;
}
.Card img {
  width: 250px;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.Card {
  padding: 15px 15px;
  background: #ffffff;
  border-radius: 4px;
  width: 275px;
  height: 390px;
}
.Card h1 {
  padding-top: 15px;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
}
.bggreen {
  padding: 4px 4px;
  background: #ebf3f1;
  border-radius: 2px;
}
.bggreen p {
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  color: #078b6c;
  opacity: 0.8;
}
.Card h3 {
  padding-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #1c2f3f;
}
.AllCard {
  display: grid;
  gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }

@media (min-width: 1280px) {
  .AllCard{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
  }
  }
  @media (min-width: 1024px) {
    .AllCard{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
  }  }

@media (max-width: 768px) {
  .Main {
    display: flex;
    flex-wrap: wrap;
  }
  .Card {
    width: 232px;
    height: 430px;
  }
  .SpeakerText h1 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .SpeakerText .btn1 {
    margin-bottom: 15px;
  }
  .AllCard {
  display: grid;
  gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .Card {
    width: 350px;
    height: 420px;
  }
  .Card img {
    width: 100%;
    height: 240px;
  }
  .AllCard {
  display: grid;
  gap: 25px;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 414px) {
  .SpeakerText h1 {
    font-size: 25px;
  }
  .AllCard {
  display: grid;
  gap: 25px;
    grid-template-columns: repeat(1, 1fr);
  }
  .Card img {
    width: 100%;
    height: 266px;
  }

  .Card {
    width: 100%;
    height: 430px;
    padding-top: 15px;
  }
  .Main {
    display: flex;
    flex-wrap: wrap;
  }
 

  .btn1 {
    margin-top: 15px;
  }
}
</style>