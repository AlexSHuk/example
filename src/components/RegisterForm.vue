<template>
  <div class="wrapper typo-text" id="RegisterForm">
    <div class="title">
      <h1>Register to get a work</h1>
      <p>
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>
    </div>

    <div class="container">
      <form id="form" @submit.prevent="submit">
        <div class="container__input form">
          <div class="form__input" :class="{ errorInput: $v.name.$error }">
            <label for="name" class="typo-text typo-text_bold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              :class="{ error: $v.name.$error }"
              v-model.lazy="$v.name.$model"
            />
            <p
              class="error"
              v-if="
                !$v.name.required || !$v.name.minlenght || !$v.name.maxlength
              "
            >Error</p>
          </div>
          <div class="form__input" :class="{ errorInput: $v.email.$error }">
            <label for="email" class="typo-text typo-text_bold">Email</label>
            <input
              type="text"
              placeholder="Your email"
              name="email"
              :class="{ error: $v.email.$error }"
              v-model.lazy="$v.email.$model"
            />
            <p class="error" v-if="!$v.email.required || !$v.email.email">Error</p>
          </div>
          <div class="form__input" :class="{ errorInput: $v.phone.$error }">
            <label for="phone" class="typo-text typo-text_bold">Phone number</label>
            <the-mask
              :mask="['+380 ## ### ## ##']"
              placeholder="+380 XX XXX XX XX "
              name="phone"
              v-model.lazy="$v.phone.$model"
              :class="{ error: $v.phone.$error }"
              :masked="false"
            />
            <p class="phone_subtitle">Enter phone number in open format</p>
            <p class="error" v-if="!$v.phone.required || !$v.phone.minLength">Error</p>
          </div>
        </div>

        <div class="container__checkbox">
          <p class="container__checkbox_title">Select your position</p>
          <label class="custom-radio" v-for="item in positions" v-bind:key="item.id">
            <input type="radio" :value="item.id" v-model="selectPosition" />
            <span>{{ item.position }}</span>
          </label>
        </div>
        <div class="container__file" :class="{ errorInput: $v.file.$error }">
          <input
            name="file"
            type="file"
            id="field__file"
            class="field field__file"
            accept="image/jpeg, image/png, image/gif"
            @change="handleFileUpload"
          />
          <p>Photo</p>
          <label class="field__file-wrapper" for="field__file">
            <div class="field__file-fake">Upload your photo</div>
            <div class="field__file-button">Browse</div>
          </label>
          <p class="error" v-if="!$v.file.required">Error</p>
        </div>

        <button
          class="btn btn_red"
          type="submit"
          @click="showModal = true"
          :disabled="
            !$v.email.required || !$v.name.required || !$v.phone.required || !$v.file.required
          "
        >Sign up now</button>
      </form>
    </div>
    <modal v-if="showModal" @closeModal="closeModal" />
  </div>
</template>
<script>
import { TheMask } from "vue-the-mask";
import modal from "./modal";
import { mapMutations } from "vuex";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  name: "RegisterForm",
  components: { modal, TheMask },
  data() {
    return {
      positions: [
        { id: 1, position: "Frontend Developer" },
        { id: 2, position: "Backend Developer" },
        { id: 3, position: "Designer" },
        { id: 4, position: "QA" },
      ],
      showModal: false,
      selectPosition: "1",
      file: null,
      email: "",
      name: "",
      phone: "",
      token: "",
    };
  },

  // валидация формы
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60),
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(9),
    },
    file: {
      required,
    },
  },
  methods: {
    ...mapMutations(["resetPage", "setUsers"]),
    // метод проверки заполнения всех обязательных полей
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      )
        .then((res) => res.json())
        .then(({ token }) => (this.token = token));

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", "+380" + this.phone);
      formData.append("position_id", this.selectPosition);
      formData.append("photo", this.file);

      await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          headers: {
            Token: this.token,
          },
          body: formData,
        }
      );

      this.showModal = true;
      this.setUsers([]);
      this.resetPage();
      await this.$store.dispatch("fetchUsers");

      this.resetForm();
    },
    handleFileUpload({ target: { files } }) {
      this.file = files[0];
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.position = 0;
      this.$refs.file.value = "";
    },
    closeModal() {
      this.showModal = false;
      this.$store.dispatch("fetchUsers");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

input {
  max-width: 468px;
  margin: 0 auto;
  // делаем рамку при ошибке валидации
  &.error {
    outline: solid 0px $primary-color;
    box-shadow: 0 0 4px 1px $primary-color;
  }
  // делаем рамку при фокусе
  &:focus {
    outline: solid 0px $secondary-color;
    box-shadow: 0 0 4px 0px $secondary-color;
  }
}
// выводим ошибку "Error"
.form {
  &__input {
    display: flex;
    flex-direction: column;
    & p.phone_subtitle {
      font-size: 12px;
    }
    & p.error {
      color: transparent;
    }
    &.errorInput p.error {
      color: #ff0000;
    }
  }
}

.container__file {
  & p.error {
    color: transparent;
  }
  &.errorInput p.error {
    color: #ff0000;
  }
}

.container {
  max-width: 472px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  &__input input {
    width: 100%;
    height: 37px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 12px;
    margin-top: 10px;
  }
  &__checkbox {
    display: flex;
    flex-direction: column;
    & label {
      margin: 7px 0;
    }
    &_title {
      margin-bottom: 20px;
    }
    & input {
      max-width: 270px;
    }
  }
  &__file {
    margin: 20px auto 40px auto;
    & label {
      margin-top: 14px;
    }
  }
}

// кастомизация кнопки radio
.custom-radio {
  max-width: 180px;
  // скрываем стандартный переключатель radio
  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    // стили для радиокнопки, находящейся в состоянии checked
    &:checked + span::before {
      border: 5px solid #0b76ef;
    }
  }
  // выравнивание кнопки radio по вертикальной оси
  & span {
    display: flex;
    align-items: center;
  }
  //  создание в label псевдоэлемента radio
  & span::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #adb5bd;
    margin-right: 10px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}

// скрываем стандартный input загрузки файлов
.field__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.field__file-wrapper {
  max-width: 472px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
// стилизация поля "choose youre photo"
.field__file-fake {
  color: #b2b9c0;
  height: 38px;
  width: calc(100% - 83px);
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  border-right: none;
}
// стилизация кнопки выбора файла "browse"
.field__file-button {
  width: 83px;
  height: 38px;
  background: #f8f7f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ced4da;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
// позиционирование кнопки "sign up now"
button {
  margin: 0 auto;
  display: block;
}

@media screen and(max-width: 768px) {
  .container {
    max-width: 472px;
  }
}
@media screen and(min-width: 361px) and (max-width: 479px) {
  .container {
    max-width: 360px;
  }
}
@media screen and(max-width: 360px) {
  .container {
    max-width: 330px;
  }
  .title {
    width: 304px;
  }
  input {
    max-width: 320px;
  }
  .field__file-wrapper {
    max-width: 330px;
  }
}
</style>
