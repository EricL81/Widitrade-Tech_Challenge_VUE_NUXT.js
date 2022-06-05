<template>
  <div class="container">
    <main class="main">
      <div class="logoWrapper">
        <img src="~assets/images/logo.png" alt="Widitrade Logo" />
      </div>
      <LoginForm />
    </main>
    <div class="photoWrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  head: {
    title: 'Widitrade Tech Challenge',
    meta: [
      {
        hig: 'description',
        name: 'description',
        content:
          'Widitrade Tech challenge for a Junior Frontend Developer position',
      },
      {
        hig: 'author',
        name: 'author',
        content: 'Eric Lehmann',
      },
      {
        hig: 'keywords',
        name: 'keywords',
        content: 'tech challenge, widitrade, junior, frontend developer, login',
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/pages/indexPage.scss';
</style>
