<template>
  <div>
    <span>姓名:</span>
    <input type="text" v-model="username" />
    <br />
    <!-- {{username}} -->
    <br />
    <span>电话:</span>
    <input type="text"/>
    <br />
    <router-view />
    <br />
  </div>
</template>

<script>
import dialogconfirm from "./dialog-confirm.vue";
import main from "./main.vue";
export default {
    props: {
    username: String
  },
  data: function() {
    return {
    // username: ""
    };
  },
  methods: {
    start: function() {
      this.$router.push({
        path: "/dialogconfirm",
        component: dialogconfirm
      });
    }
  }
};
</script>