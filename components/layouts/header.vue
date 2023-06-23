<template>
  <div class="nav">
    <div class="container">
      <div class="nav-logo">
        <nuxt-link to="/"
          ><img class="image" src="../../assets/images/Logo.png" alt=""
        /></nuxt-link>
        <nuxt-link to="/"><h1 class="logoname">
          Second International Pharmaceutical<br />
          Forum of Uzbekistan
        </h1></nuxt-link>
      </div>
      <div class="menu">
        
        <ul>
          <li v-for="menu in menuArray" :key="menu">
            <nuxt-link :to="menu.link">
              {{ menu.title }}
            </nuxt-link>
          </li>
        </ul>
        <div class="nav-regist">
          <div class="Flex">
            <!-- <img class="rus" src="../../assets/images/rus.png" alt="" />
            <p class="language">Русский</p> -->
            <img src="../../assets/images/rusimage.png" alt="" />
          </div>
          <!-- <a-button >
             
           </a-button> -->
          <button @click="open = true" class="regis">Зарегистрироваться</button>
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
    </div>
    <div class="res-menu" v-if="isMenuOpened">
      <div class="nav-logo">
        <img class="image" src="../../assets/images/Logo.png" alt="" />
        <h1 class="logoname">
          Second International Pharmaceutical<br />
          Forum of Uzbekistan
        </h1>
      </div>
      <transition name="mobile-nav">
        <ul class="container res-link">
          <div class="navlogo">
            <img
              class="image navimage"
              src="../../assets/images/logofooter.png"
              alt=""
            />
            <h1 class="logoname">
              Second International Pharmaceutical Forum of Uzbekistan
            </h1>
          </div>
          <li v-for="menu in menuArray" :key="menu">
            <nuxt-link :to="menu.link">
              {{ menu.title }}
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <!-- burger mmenu -->
      <div class="burger-menu" @click="openMenu">
        <img
          v-if="!isMenuOpened"
          src="../../assets/images/menu.png"
          alt="image"
        />
        <img
          v-if="isMenuOpened"
          src="../../assets/images/exit.png"
          alt="image"
        />
      </div>
      <!-- ------------Navbar----------- -->
      <!-- header -->
    </div>
  </div>
</template>

<script>
import { Modal } from "ant-design-vue";

export default {
  components: {
    "a-modal": Modal,
  },
  data() {
    return {
      isMenuOpened: true,
      is_navbar_active: false,
      isMenuOpened: true,
      menuArray: [
        {
          title: "Программа",
          link: "/programma",
        },
        {
          title: "Участники",
          link: "/members",
        },
        {
          title: "Проживание",
          link: "/place",
        },
        {
          title: "Медиа",
          link: "/media",
        },
      ],
      name: "Имя и фамилия",
      number: "Номер телефона",
      rank: "Должность",
      pochta: "Почта",
      company: "Компания",

      open: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
    checkScreenWidth() {
      const winWidth = window.innerWidth;

      if (winWidth <= 768) {
        this.isMenuOpened = false;
      } else {
        this.isMenuOpened = true;
      }
    },
    openMenu() {
      if (this.isMenuOpened == false) {
        this.isMenuOpened = true;
      } else {
        this.isMenuOpened = false;
      }
    },
  },
  mounted() {
    const winWidth = window.innerWidth;
    window.addEventListener("scroll", () => {
      this.handleScroll();
      window.pageYOffset > 0
        ? (this.is_navbar_active = true)
        : (this.is_navbar_active = false);
      if (winWidth < 800 && this.is_navbar_active == true) {
        this.isMenuOpened = false;
      }
    }),
      window.addEventListener("resize", this.checkScreenWidth);
    this.checkScreenWidth();
  },
};
</script>

<style scoped>
.InputDiv {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
.scroll {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  transition: 0.3s;
}

.content::-webkit-scrollbar {
  display: none;
}
@media (max-width: 768px) {
  form {
    display: flex;
    flex-wrap: wrap;
  }
}
@media (max-width: 414px) {
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