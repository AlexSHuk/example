<template>
  <div class="wrapper">
    <div class="title">
      <h1>Let's get acquainted</h1>
    </div>

    <div class="container">
      <img src="@/assets/man-laptop-v1.svg" alt="man laptop" />
      <div class="container_text">
        <h2>I am cool frontend developer</h2>
        <p class="typo-text">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction.
        </p>
        <p class="typo-text">
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page P​SD mockup​ into HTML5/CSS3.
        </p>
        <a href="#RegisterForm" class="typo-text btn_flat typo-text_bold">Sign up now</a>
      </div>
    </div>
  </div>
</template>

<script>
// import clampy from "@clampy-js/vue-clampy";
export default {
  name: "Acquainted",
  // directives: {
  //   clampy,
  // },
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  margin: 34px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  text-align: justify;
  align-items: center;
  & img {
    max-width: 342px;
    width: 100%;
    max-height: auto;
  }
  &_text {
    max-width: 552px;
    width: 100%;
    & :nth-child(2) {
      margin: 26px 0 40px 0;
    }
    & :nth-child(3) {
      margin-bottom: 40px;
    }
  }
}
@media screen and (min-width: 480px) and (max-width: 768px) {
  .container {
    margin: 30px 15px 0 15px;
    & img {
      max-width: 248px;
    }
    &_text {
      max-width: 431px;
    }
  }
}
@media screen and (min-width: 360px) and (max-width: 480px) {
  .container {
    flex-direction: column;
    & img {
      max-width: 290px;
    }
  }
}
@media screen and(max-width: 360px) {
  .container {
    margin: 30px 10px 0 10px;
    flex-direction: column;
    & img {
      max-width: 290px;
    }
    &_text {
      width: 100%;
      & h2 {
        margin-top: 40px;
        text-align: center;
      }
      & :nth-child(2) {
        margin: 16px 0 25px 0;
      }
      & :nth-child(3) {
        margin-bottom: 37px;
      }
      & a {
        display: block;
        width: 94px;
        margin: 0 auto;
      }
    }
  }
}
</style>
