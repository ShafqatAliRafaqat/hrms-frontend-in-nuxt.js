<template>
  <v-app>
    <v-main>
      <v-container>
        <snackbar v-if="notify.snackbar"></snackbar>
        <loader v-if="loader"></loader>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "~/components/Snackbar";
import Loader from "~/components/Loader";
export default {
  name: "authLayout.vue",
  components:{Snackbar,Loader},
  computed:{
    notify(){
      return this.$store.state.alert
    },
    loader(){
      return this.$store.state.loader
    }
  },
  created() {
    this.$store.commit('SHOW_SNACKBAR', {snackbar:false,color:'', message:''})

  }
}
</script>

<style scoped>

</style>
