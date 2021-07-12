<template>
  <header>
    <div class="left">
      <router-link :to="{ name: 'Home' }" class="btn btn-icon">
        <i class="icon icon-home"></i>
      </router-link>
      <a :to="{ name: 'Home' }" class="btn btn-icon">
        <i class="icon icon-board"></i>
        <span class="txt">看板</span>
      </a>
    </div>
    <router-link :to="{ name: 'Home' }" class="logo"></router-link>
    <div class="right">
      <a href="" class="btn btn-icon">
        <i class="icon icon-add"></i>
      </a>
      <TPopup>
        <button class="avatar">
          <span>Z</span>
        </button>
      </TPopup>
    </div>
  </header>
</template>

<script>
import TPopup from "./TPopup.vue";
export default {
  name: "THeader",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    TPopup,
  },
};
</script>
<style scoped></style>
