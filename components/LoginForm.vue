<template>
  <form class="loginForm" @submit="onSubmit">
    <div class="inputGroup">
      <label htmlFor="user">User</label>
      <input
        id="user"
        v-model="values.user"
        type="text"
        name="user"
        placeholder="Tyson.Jakubowski@ya|"
      />
      <div v-if="errors.user" class="error">{{ errors.user }}</div>
    </div>
    <div class="inputGroup">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        v-model="values.password"
        :type="[passwordIsVisible ? 'text' : 'password']"
        name="password"
        placeholder="Enter your password"
      />

      <img
        src="../assets/images/eye.png"
        alt="eye"
        @click="togglePasswordIsVisible()"
      />

      <div v-if="errors.password" class="error">{{ errors.password }}</div>
    </div>

    <ButtonItem type="submit" class-css="login" btn-text="Login" />
  </form>
</template>

<script>
import ButtonItem from './UI/Button';

export default {
  name: 'LoginForm',
  components: {
    ButtonItem,
  },
  // eslint-disable-next-line prettier/prettier
  data() {
    return {
      values: { user: '', password: '' },
      errors: {},
      isSubmitted: false,
      passwordIsVisible: false,
    };
  },

  watch: {
    errors(errors) {
      if (Object.keys(errors).length === 0 && this.isSubmitted) {
        this.$router.push('/newPage');
      }
    },
  },

  methods: {
    // eslint-disable-next-line prettier/prettier
    togglePasswordIsVisible() {
      this.passwordIsVisible = !this.passwordIsVisible;
    },

    // eslint-disable-next-line prettier/prettier
    validate(values) {
      const errors = {};

      if (!values.user) {
        errors.user = 'User cannot be empty';
      }

      if (!values.password) {
        errors.password = 'Password cannot be empty';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters';
      } else if (values.password.length > 12) {
        errors.password = 'Password cannot exceed 12 characters';
      }

      return errors;
    },

    // eslint-disable-next-line prettier/prettier
    onSubmit(e) {
      e.preventDefault();
      this.errors = this.validate(this.values);
      this.isSubmitted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/components/loginForm';
</style>
