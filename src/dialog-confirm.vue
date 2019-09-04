<template>
  <div class="dialog-msg">
    <div>
      <button @click="confirm">{{yesText}}</button>
      <button @click="cancel">{{noText}}</button>
      <router-view />
    </div>
  </div>
</template>

<script>
import home from "./home.vue";
import main from "./main.vue";
export default {
    name: 'dialog-confirm',
    data () {
        return {
            yesText:'确认',
            noText:'取消',
            confirmData:null,
        }
    },
    methods: {
        confirm: function() {
      this.$router.push({
        path: "/",
        component: main
      })
      
    },
      cancel: function() {
      this.$router.push({
        path: "/home",
        component: home
      });
      }
    }
}
</script>