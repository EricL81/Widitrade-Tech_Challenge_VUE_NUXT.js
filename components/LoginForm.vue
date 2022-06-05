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
  data () {
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
    togglePasswordIsVisible () {
      this.passwordIsVisible = !this.passwordIsVisible;
    },

    // eslint-disable-next-line prettier/prettier
    validate (values) {
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
    onSubmit (e) {
      e.preventDefault();
      this.errors = this.validate(this.values);
      this.isSubmitted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  margin-top: 4.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;

  .inputGroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0;
    position: relative;

    img {
      position: absolute;
      right: 12px;
      top: 41px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    label {
      font-family: $ff-mulish;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      color: $color-label;
      order: 0;
      flex: none;
      flex-grow: 0;
    }

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #ffffff;
      border: 1px solid $color-line;
      border-radius: 1rem;
      width: 100%;
      height: 48px;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
      caret-color: $color-accent;
      font-size: 1rem;
      color: $color-body;
      background: $color-background;

      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
        color: $color-placeholder;
        flex: none;
        order: 0;
        flex-grow: 1;
      }

      &:focus {
        outline: 2px solid $color-accent;
        background: #ffffff;
      }
    }

    .error {
      padding: 0 20px;
      flex: none;
      order: 2;
      flex-grow: 0;
      font-family: $ff-mulish;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: $color-primary;
      margin-top: 8.5px;
    }
  }
}

@media only screen and (min-width: 744px) {
  .loginForm {
    width: 408px;
    height: 285px;
    margin: 0 auto;
    position: relative;
    top: 142px;
  }
}

@media only screen and (min-width: 1440px) {
  .loginForm {
    width: 356px;
    height: 285px;
    margin: 0 auto;
    top: 478px - 82px;
  }
}
</style>
