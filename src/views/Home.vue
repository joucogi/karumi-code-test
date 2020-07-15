<template>
  <div class="home">
    <div class="logo">
      <LogoComponent />
    </div>
    <div class="content">
      <EmailInputComponent class="mb-3" placeholder="Username" />
      <PasswordInputComponent class="mb-5" placeholder="Password" />
      <ButtonComponent name="Login" />
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent";
import EmailInputComponent from "@/components/EmailInputComponent";
import PasswordInputComponent from "@/components/PasswordInputComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "Home",
  components: {
    LogoComponent,
    EmailInputComponent,
    PasswordInputComponent,
    ButtonComponent
  }
};
</script>
<style scoped>
.home {
  width: 100%;
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
