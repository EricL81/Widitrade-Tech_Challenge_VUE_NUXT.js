<template>
  <button :type="type" :class="[classCss ? classCss : '']">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'ButtonItem',
  props: {
    type: {
      type: String,
      default: 'submit',
    },

    classCss: {
      type: String,
      default: '',
    },

    btnText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin buttonDefault() {
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: $color-primary;
  border-radius: 60px;
  font-family: $ff-inter;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: $color-secondary;
  }
}

.login {
  @include buttonDefault();
  margin-top: 17px;
  font-size: 1rem;
  line-height: 24px;
  padding: 14px 42px;
  gap: 14px;
}
</style>
