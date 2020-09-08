<template>
  <div class="wrapper">
    <div class="title">
      <h1>Our cheerful users</h1>
      <p>Attention! Sorting users by registration date</p>
    </div>
    <div class="grid">
      <CardItem
        v-for="user in getUsers"
        :key="user.id"
        v-bind:user_data="user"
      />
    </div>
    <button
      class="btn btn_red typo-text"
      :disabled="isDisabled"
      @click="showMore"
    >
      Show more
    </button>
  </div>
</template>

<script>
import CardItem from "./CardItem";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Cheerful",
  components: { CardItem },

  async created() {
    await this.$store.dispatch("fetchUsers");
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    ...mapGetters(["getUsers", "getPage", "getTotalPages"]),

    isDisabled() {
      return this.getPage === this.getTotalPages;
    },
  },
  methods: {
    ...mapMutations(["incrementPage", "resetPage"]),
    showMore() {
      this.incrementPage();
      this.$store.dispatch("fetchUsers");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #f9f9f3;
}

// разметка сетки карточек пользователей
.grid {
  margin: 78px 84px 64px 84px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

button {
  display: block;
  margin: 0 auto;
}
@media screen and(min-width: 768px) and(max-width:1023px) {
  .grid {
    margin: 78px 40px 64px 40px;
  }
}
@media screen and(min-width: 480px) and(max-width:767px) {
  .grid {
    margin: 78px 40px 64px 40px;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and(max-width: 479px) {
  .grid {
    margin: 34px auto 64px auto;
    grid-template-columns: 1fr;
  }
}
</style>
