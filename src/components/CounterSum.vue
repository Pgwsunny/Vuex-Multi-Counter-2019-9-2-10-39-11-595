<template>
  <div class="counter-sum">
    <h2>
      Counter Sum:
      <span>{{counterSum}}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "counter-sum",
  props: {},

  computed: {
    counterSum: function() {
      
      if(this.$store.getters.counterSum >=10){
                    this.$router.push("/welcome");
                }
      return this.$store.getters.counterSum;
    }
  }
};
</script>
<style scoped>
</style>
