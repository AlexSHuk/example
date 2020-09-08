<template>
  <div id="app">
    <HeaderMenu />
    <MainDisplay />
    <Acquainted />
    <Cheerful />
    <RegisterForm />
    <Footer />
    <modal v-if="showModal" />
    <router-view />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import MainDisplay from "@/components/MainDisplay";
import Acquainted from "@/components/Acquainted";
import Cheerful from "@/components/Cheerful";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";
export default {
  components: {
    HeaderMenu,
    MainDisplay,
    Acquainted,
    Cheerful,
    RegisterForm,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../src/assets/css/normalize.css";
@import "@/assets/css/_style.scss";
</style>
