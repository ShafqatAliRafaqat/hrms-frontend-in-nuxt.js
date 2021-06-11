<template>
  <v-app>
    <AppBar />
    <Drawer/>
    <v-main>
      <v-container>
        <snackbar v-if="notify.snackbar"></snackbar>
        <loader v-if="loader"></loader>
        <nuxt />
      </v-container>
    </v-main>
<!--    <Footer />-->
  </v-app>
</template>
<script>
import AppBar from "../components/Navigation/AppBar";
import Footer from "~/components/Navigation/Footer";
import Snackbar from "~/components/Snackbar";
import Loader from "~/components/Loader";
import Drawer from "../components/Navigation/Drawer";
export default {
middleware: ["auth"],
components:{AppBar, Footer,Snackbar,Loader, Drawer},
  computed:{
    notify(){
      return this.$store.state.alert
    },
    loader(){
      return this.$store.state.loader
    }
  }
}
</script>
