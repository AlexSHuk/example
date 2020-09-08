<template>
  <div class="container">
    <nav>
      <div class="logo_container">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
      <div class="menu">
        <ul>
          <li
            class="menu__item typo-text"
            v-for="item in menuList.slice(0, 5)"
            v-bind:key="item.id"
          >
            <a
              href="#RegisterForm"
              v-bind:class="{ active: item.id === activeIndex }"
              v-on:click="activeIndex = item.id"
            >{{ item.item }}</a>
          </li>
        </ul>
      </div>
      <transition name="slide" @enter="enter" @leave="leave">
        <div v-if="isOpenMenu" class="mobile mobile_container">
          <div class="logo">
            <img src="../assets/logo.svg" alt="logo" />
          </div>
          <ul class="mobile__menu">
            <div class="line mobile__menu_item"></div>
            <li
              class="mobile__menu_item typo-text"
              v-for="item in menuList.slice(0, 5)"
              v-bind:key="item.id"
            >
              <a
                href="#RegisterForm"
                v-bind:class="{ active: item.id === activeIndex }"
                v-on:click="activeIndex = item.id"
              >{{ item.item }}</a>
            </li>
            <div class="line mobile__menu_item"></div>
            <li
              class="mobile__menu_item typo-text"
              v-for="item in menuList.slice(5, 10)"
              v-bind:key="item.id"
            >
              <a
                href="#RegisterForm"
                v-bind:class="{ active: item.id === activeIndex }"
                v-on:click="activeIndex = item.id"
              >{{ item.item }}</a>
            </li>
            <div class="line mobile__menu_item"></div>
            <li
              class="mobile__menu_item typo-text"
              v-for="item in menuList.slice(10, 15)"
              v-bind:key="item.id"
            >
              <a
                href="#RegisterForm"
                v-bind:class="{ active: item.id === activeIndex }"
                v-on:click="activeIndex = item.id"
              >{{ item.item }}</a>
            </li>
          </ul>
        </div>
      </transition>

      <div
        class="burger-menu"
        v-bind:class="{ active: isOpenMenu }"
        v-on:click="isOpenMenu = !isOpenMenu"
      >
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
export default {
  name: "HeaderMenu",
  data() {
    return {
      menuList: [
        { id: 1, item: "About Me" },
        { id: 2, item: "Relationship" },
        { id: 3, item: "Requirements" },
        { id: 4, item: "Users" },
        { id: 5, item: "Sign Up" },
        { id: 6, item: "How it works" },
        { id: 7, item: "Partnership" },
        { id: 8, item: "Help" },
        { id: 9, item: "Leave testimonial" },
        { id: 10, item: "Contact us" },
        { id: 11, item: "Articles" },
        { id: 12, item: "Our news" },
        { id: 13, item: "Testimonials" },
        { id: 14, item: "Licenses" },
        { id: 15, item: "Privacy Policy" },
      ],
      activeIndex: false,
      isOpenMenu: false,
    };
  },
  methods: {
    enter(el) {
      disableBodyScroll(el);
    },
    leave() {
      clearAllBodyScrollLocks();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s ease-in-out;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $bg-color;
  height: 60px;
  z-index: 200;
  display: flex;
  align-items: center;
  & nav {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    align-items: center;
  }
}
.burger-menu {
  display: none;
}
.menu {
  & ul {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    margin-left: 31px;
  }
}

@media only screen and(max-width: 768px) {
  // кнопка меню для tablet and mobile
  .mobile {
    &_container {
      position: absolute;
      top: 0;
      left: 0;
      width: 290px;
      height: 100vh;
      z-index: 201;
      background-color: #fff;
      overflow-y: auto;
    }
    & .logo {
      height: 60px;
      display: flex;
      align-items: center;
      margin-left: 15px;
    }
    &__menu {
      display: flex;
      flex-direction: column;
      &_item {
        margin-bottom: 30px;
        padding-left: 14px;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
  }
  .menu {
    display: none;
  }
  .burger-menu {
    display: block;
    position: relative;
    width: 20px;
    height: 15px;
    cursor: pointer;
  }
  .burger-menu span {
    background-color: #1b4a8a;
    position: absolute;
    width: 100%;
    height: 3px;
    right: 0;
    top: 6px;
    transition: all 0.2s ease;
  }
  .burger-menu:before,
  .burger-menu:after {
    content: "";
    background-color: #1b4a8a;
    position: absolute;
    width: 100%;
    height: 3px;
    right: 0;
    transition: all 0.2s ease;
  }
  .burger-menu:before {
    top: 0;
  }
  .burger-menu:after {
    bottom: 0;
  }

  .burger-menu.active:before {
    transform: rotate(45deg);
    top: 6px;
  }
  .burger-menu.active:after {
    transform: rotate(-45deg);
    bottom: 6px;
  }
  .burger-menu.active span {
    transform: scale(0);
  }
}
@media screen and(max-width: 360px) {
  .container {
    height: 40px;
    & nav {
      padding: 11px 15px 9px 15px;
    }
  }
  .mobile_container .logo {
    height: 40px;
  }
}
</style>
