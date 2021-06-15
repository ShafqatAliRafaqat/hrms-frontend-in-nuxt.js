<template>
  <v-app>
<!--    <AppBar />-->
<!--    <Drawer/>-->
    <Navbar/>
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
import Navbar from "../components/Navigation/Navbar";
export default {
middleware: ["auth"],
components:{AppBar, Footer,Snackbar,Loader, Drawer,Navbar},
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
