<template>
  <div class="wrap">
    <div class="container container_bg">
      <div class="container_content">
        <h1>Test assignment for Frontend Developer position</h1>
        <p class="typo-text">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.
          <span
            class="mobile_disabled"
          >
            Please be patient, we consider and respond to every application
            that meets minimum requirements. We look forward to your submission.
            Good luck! The photo has to scale in the banner area on the
            different screens
          </span>
        </p>
        <a href="#RegisterForm">
          <button class="btn btn_red typo-text">Sign up now</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDisplay",
  components: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.container {
  margin-top: 60px;
  width: 100%;
  &_content {
    width: 536px;
    text-align: left;
    color: #fff;
    position: relative;
    top: 80px;
    left: 30px;
  }

  &_bg {
    height: 600px;
    background-image: url("../assets/banner-photo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  & h1 {
    text-transform: uppercase;
  }
  & p {
    margin: 40px 0px;
  }
}
@media only screen and(max-width: 768px) {
  .container {
    &_content {
      max-width: 454px;
      width: 100%;
    }

    & h1 {
      max-width: 416px;
    }
  }
}
@media only screen and(min-width: 360px) and(max-width:480px) {
  .container {
    &_content {
      left: 10px;
    }
    & h1 {
      text-align: center;
    }
    & .mobile_disabled {
      display: none;
    }
  }
}
@media only screen and(max-width: 360px) {
  .container {
    margin-top: 40px;
    &_content {
      max-width: 320px;
      text-align: center;
      top: 70px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &_bg {
      height: 400px;
    }
    & p {
      margin: 20px 0 26px 0;
    }
  }
  & .mobile_disabled {
    display: none;
  }
}
</style>
