<template>
  <div class="home">
    <div class="logo">
      <LogoComponent />
    </div>
    <div class="content">
      <h2 class="mb-5">Welcome to your homepage {{ name }}</h2>
      <ButtonComponent id="btnLogout" name="Log out" @click="logoutAndGoToLogin" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LogoComponent from "@/components/LogoComponent";
import ButtonComponent from "@/components/ButtonComponent";
import { LOGOUT } from "@/store/mutations";

export default {
  name: "Home",
  components: {
    LogoComponent,
    ButtonComponent
  },
  computed: {
    ...mapState(["user"]),
    name: function() {
      return this.user.name;
    }
  },
  methods: {
    ...mapMutations({
      logout: LOGOUT
    }),
    logoutAndGoToLogin: function() {
      this.logout();
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
