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
@import '~assets/scss/components/UI/button';
</style>
