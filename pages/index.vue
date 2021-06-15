<template>
  <div>
    <login></login>
  </div>
</template>

<script>
import login from "./auth/login";

export default {
  components: {
    login
  },
  created(){

    if (!this.$store.state.user.isAuthenticated) {
      this.$router.push('/auth/login')
    }
    else{
      this.$router.push('/setup')
    }


  }
}
</script>
