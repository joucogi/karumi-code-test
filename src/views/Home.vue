<template>
  <div class="home">
    <div class="logo">
      <LogoComponent />
    </div>
    <div class="content">
      <h2 class="mb-5">Welcome to your homepage Joel</h2>
      <ButtonComponent id="btnLogout" name="Log out" @click="goToLogin" />
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "Home",
  components: {
    LogoComponent,
    ButtonComponent
  },
  methods: {
    goToLogin: function() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.home > div {
  flex: 1;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 50px;
}
</style>
