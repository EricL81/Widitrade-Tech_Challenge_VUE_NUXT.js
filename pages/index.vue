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
.container {
  padding: 0 2rem;
  min-height: 100vh;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 13.375rem;

    .logoWrapper {
      width: 115px;
      height: 82px;
    }
  }

  .photoWrapper {
    display: none;
  }
}

@media only screen and (min-width: 744px) {
  .container {
    padding: 12rem 6rem;
    background: $color-background;

    .main {
      padding: 0;
      height: 749px;
      background: #ffffff;
      box-shadow: 0px 8px 16px rgba(53, 55, 68, 0.04);
      border-radius: 32px;

      .logoWrapper {
        margin: 120px auto 0 auto;
      }
    }
  }
}

@media only screen and (min-width: 1440px) {
  .container {
    display: flex;
    padding: 0;
    width: 1440px;
    height: 1024px;
    position: relative;

    .main {
      padding: 0 7.5rem 0 10rem;
      height: 100%;
      width: 636px;
      border-radius: 0px;
      box-shadow: none;

      .logoWrapper {
        margin: 0;
        position: relative;
        top: 260px;
      }
    }

    .photoWrapper {
      width: 803px;
      height: 1024px;
      display: block;
      background: url(~assets/images/photo.png),
        linear-gradient(
          148.41deg,
          rgba(34, 162, 162, 0.76) 0%,
          rgba(70, 131, 223, 0.526195) 51.16%,
          rgba(116, 166, 224, 0.5) 70.82%,
          rgba(116, 224, 193, 0.58) 100%
        );
      box-shadow: 20px 0px 80px rgba(53, 55, 68, 0.16);
      position: relative;

      &::after {
        content: '';
        width: 803px;
        height: 1024px;
        background: $color-gradient;
        opacity: 0.5;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}
</style>
