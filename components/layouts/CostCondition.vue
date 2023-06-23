<template>
  <!-- ---- Cost and Condition ---- -->
  <section class="container mt-50px xl:mt-[100px] xl:pb-[80px] pb-[50px]">
    <div class="Condition">
      <div class="cond xl:mr-[100px]">
        <h1>Стоимость и условия участия</h1>
        <div>
          <a-button @click="open = true"> Регистрация </a-button>
          <a-modal
            :footer="null"
            title="Зарегистрироваться"
            centered
            :visible="open"
            @ok="open = false"
            @cancel="open = false"
            :width="700"
            :height="640"
          >
            <div class="InputDiv">
              <input type="text" :placeholder="name" />
              <input type="text" :placeholder="pochta" />
              <input type="number" :placeholder="number" />
              <input type="text" :placeholder="company" />
              <input type="text" :placeholder="rank" />
              <div class="checkbox">
                <input type="checkbox" id="subscribe" value="subscribe" />
                <label for="subscribe"
                  >Я согласен с <span>пользовательскими условиями</span></label
                ><br />
              </div>
            </div>
            <div class="mt-[10px] end-regist">
                  <h1>Зарегистрироваться</h1>
                </div>
          </a-modal>
        </div>
      </div>
      <!-----  ant design ---->
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane @click="changeStyle" key="1" tab="Участие">
          <div class="CardContainer">
            <div class="stoimost pt-[5px] pb-[5px]">Cтоимость</div>
            <div class="numtext mt-[15px]">
              <h1>$1 500</h1>
            </div>
            <div class="numtext1 mt-[13px]">
              <p>За одного делегата</p>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Стать партнером" force-render>
          <div>
            <div class="text-h1">
              <h1>
                Оставьте заявку на онлайн-участие и наши представители свяжутся
                с вами для подробной информации
              </h1>
              <h2>
                Выбор одного из спонсорских пакетов — это наилучший способ
                продемонстрировать лидирующее положение на рынке, расширить сеть
                деловых контактов, привлечь эффективных партнеров.
              </h2>
            </div>
            <div class="inputform">
              <form>
                <input type="text" :placeholder="name" />
                <input type="text" :placeholder="pochta" />
                <input type="number" :placeholder="number" />
                <input type="text" :placeholder="company" />
                <input type="text" :placeholder="rank" />
              </form>
            </div>
            <button class="btn-new">Отправить</button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </section>
</template>

<script>
import { Button, Modal } from "ant-design-vue";
export default {
  components: {
    "a-button": Button,
    "a-modal": Modal,
  },
  data() {
    return {
      name: "Имя и фамилия",
      number: "Номер телефона",
      rank: "Должность",
      pochta: "Почта",
      company: "Компания",
      buttonStyle: {
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      },
      open: false,
    };
  },
  method: {
    changeStyle() {
      this.buttonStyle.backgroundColor = "red";
      this.buttonStyle.color = "white";
      this.buttonStyle.border = "1px solid blue";
    },
  },
};
</script>

<style scoped>
.end-regist{
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 15px;
  width: 650px;
  height: 60px;
background: #06B48B;
border-radius: 4px;
}
.end-regist h1{
  font-weight: 600;
font-size: 20px;
line-height: 150%;
text-align: center;
color: #FFFFFF;
}
.InputDiv input {
  width: 650px;
}
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox label {
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  color: #465863;
}
.checkbox input {
  width: 12.5px;
  height: 12.5px;
  margin-right: 11px;
}
span {
  color: rgba(28, 110, 176, 1);
}
button {
  transition: 0.4s ease-out;
  margin-top: 30px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #06b48b;
  border-radius: 4px;
  padding: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  color: #06b48b;
}
.text-h1 h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: #1c2f3f;
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
input {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #465863;
  padding: 10px 15px 15px;
  width: 434px;
  height: 50px;
  background: #ffffff;
  border: 1.5px solid #c5d4e0;
  border-radius: 4px;
}
input:hover {
  transition: border 0.5s ease-out;
  border: 1px solid rgba(6, 180, 139, 1);
}
.numtext {
  display: flex;
  justify-content: center;
  align-items: center;
}
.numtext h1 {
  font-weight: 900px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 35px;
  color: #ffff;
}
.numtext1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.numtext1 p {
  font-size: 15px;
  color: #ffff;
}

.stoimost {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #0ac398;
}

.text-h1 h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 12px;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  color: #1c2f3f;
  opacity: 0.8;
}
.cond h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: #1c2f3f;
}
.Condition {
  display: flex;
}
.CardContainer {
  width: 400px;
  height: 200px;
  background: #ffffff;
  border: 2px solid #06b48b;
  border-radius: 4px;
  background: #06b48b;
}
.InputDiv {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.btn-new {
  margin-top: 30px;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
  background: #06b48b;
}
@media (max-width: 768px) {
  .cond {
    margin-right: 30px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
  }
}
@media (max-width: 414px) {
  .Condition {
    display: flex;
    flex-wrap: wrap;
  }
  form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
  input {
    width: 100%;
  }
}
</style>