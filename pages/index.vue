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
  mounted(){
    this.$router.push('/auth/login')
  }
}
</script>
