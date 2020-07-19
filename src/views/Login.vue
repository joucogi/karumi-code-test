<template>
  <div class="login">
    <div class="logo">
      <LogoComponent />
    </div>
    <div class="content">
      <EmailInputComponent
        v-model="username"
        id="username"
        class="mb-3"
        placeholder="Username"
        @input="setUsername"
      />

      <PasswordInputComponent
        v-model="password"
        id="password"
        class="mb-5"
        placeholder="Password"
        @input="setPassword"
      />
      <span class="mb-5 error" :class="{ hidden: !showError }">
        {{ error }}
      </span>
      <ButtonComponent id="btnLogin" name="Login" @click="loginUser()" />
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent";
import EmailInputComponent from "@/components/EmailInputComponent";
import PasswordInputComponent from "@/components/PasswordInputComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "Login",
  inject: ["login", "validator"],
  data() {
    return {
      username: "",
      password: "",
      showError: false,
      error: ""
    };
  },
  components: {
    LogoComponent,
    EmailInputComponent,
    PasswordInputComponent,
    ButtonComponent
  },
  methods: {
    setUsername: function(payload) {
      this.username = payload;
    },
    setPassword: function(payload) {
      this.password = payload;
    },
    loginUser: function() {
      this.showError = false;
      if (
              !this.validateEmail() ||
              !this.validateLogin()
      ) {
        this.showError = true;
        return;
      }

      this.$router.push({ name: "Home" });
    },
    validateEmail: function() {
      if (!this.validator.emailIsValid(this.username)) {
        this.error = "The username is not an email";
        return false;
      }

      return true;
    },
    validateLogin: function() {
      if (!this.login.validate(this.username, this.password)) {
        this.error = "The username or password you’ve entered is incorrect";
        return false
      }

      return true;
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.login > div {
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
}

.hidden {
  display: none;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
