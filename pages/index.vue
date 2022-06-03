<template>
  <div class="container">
    <main class="main">
      <div class="logoWrapper">
        <Image src="{logo}" alt="Widitrade Logo" width="{115}" height="{82}" />
      </div>
      <LoginForm />
    </main>
    <div class="photoWrapper">
      eee
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      data: []
    }
  },

  head: {
    title: 'Widitrade Tech Challenge',
    meta: [
      {
        hig: 'description',
        name: 'description',
        content:
          'Widitrade Tech challenge for a Junior Frontend Developer position'
      },
      {
        hig: 'author',
        name: 'author',
        content: 'Eric Lehmann'
      },
      {
        hig: 'keywords',
        name: 'keywords',
        content: 'tech challenge, widitrade, junior, frontend developer, login'
      }
    ]
  }
}
</script>
