<template>
  <div class="card">
    <div class="card_container">
      <div class="card__icon">
        <img :src="user_data.photo" alt="photo" />
      </div>
      <div class="card__name">
        <h2 v-tooltip.bottom="{content:user_data.name}">{{user_data.name}}</h2>
      </div>
      <div class="card__position">
        <p v-tooltip.bottom="{content:user_data.position}">{{ user_data.position }}</p>
      </div>
      <div class="card__email">
        <p v-tooltip.bottom="{content:user_data.email}">{{ user_data.email }}</p>
      </div>
      <div class="card__phone">
        <p v-tooltip.bottom="{content:user_data.phone}">{{ user_data.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    user_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
// стилизация всплывающей подсказки tooltip
.tooltip {
  .tooltip-inner {
    background: #333;
    color: white;
    border-radius: 4px;
    padding: 7px 14px;
  }
  &[x-placement^="bottom"] {
    margin-top: 20px;
  }
}

// стилизация карточки пользователя
.card {
  margin: 0 auto;
  margin-bottom: 60px;
  &_container {
    width: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  & p,
  h2 {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  &__icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }
  &__name {
    margin: 20px 0 21px 0;
  }

  &__email {
    margin: 12px 0;
  }
}

@media screen and(max-width: 479px) {
  .card {
    margin-bottom: 40px;
  }
}
</style>