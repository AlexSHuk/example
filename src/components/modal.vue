<template>
  <div class="modal">
    <div class="modal_bg"></div>
    <div class="modal__container">
      <div class="modal_header">
        <h2>Congratulations</h2>
        <span class="close-button" @click="closeModal"></span>
      </div>
      <div class="modal_body">
        <p>You have successfulli passed the registration</p>
      </div>
      <button class="modal_btn btn_red" @click="closeModal">Great</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit((event = "closeModal"));
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/_style";
@import "../assets/css/_variables";
.modal {
  &_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.6;
    z-index: 222;
  }
  &__container {
    width: 394px;
    height: 190px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 333;
    border: 1px solid #666666;
    border-radius: 4px;
  }
  &_header {
    padding: 18px 17px;
    display: flex;
  }
  &_body {
    padding: 20px 17px;
    border-top: 1px solid #eceef1;
    border-bottom: 1px solid #eceef1;
  }
  &_btn {
    cursor: pointer;
    width: 80px;
    height: 38px;
    position: absolute;
    right: 16px;
    bottom: 15px;
    border: none;
    border-radius: 4px;
  }
}

.close-button {
  position: absolute;
  right: 17px;
  top: 24px;
  width: 12px;
  height: 12px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before {
    position: absolute;
    content: " ";
    height: 15px;
    width: 3px;
    background-color: #b7b7b7;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    content: " ";
    height: 15px;
    width: 3px;
    background-color: #b7b7b7;
    transform: rotate(-45deg);
  }
}
</style>
