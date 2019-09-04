
<template>
  <div>
    <!-- <router-link :to="'/home'"> -->
      <button @click="start">开始使用</button>
      <br />
    <!-- </router-link> -->
    <span>请输入姓名:</span>
    <input type="text" v-model="username" />
    <router-view />
  </div>
</template>

<script>
import home from "./home.vue";
export default {
  data: function() {
    return {
      username: ""
    };
  },
  methods: {
    start: function() {
      this.$router.push({ path: "/home", component: home });
    }
  }
};
</script>