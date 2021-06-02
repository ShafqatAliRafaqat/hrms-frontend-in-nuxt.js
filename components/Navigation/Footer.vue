<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>

</template>

<script>
export default {
  name: "Footer.vue",
  data(){
    return{
      fixed: false,
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/main.scss";


</style>
