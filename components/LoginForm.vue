<template>
  <form className="{styles.loginForm}" onSubmit="{onSubmitHandler}">
    <div className="{styles.inputGroup}">
      <label htmlFor="user">User</label>
      <input id="user" type="text" name="user" onChange="{onChangeHandler}" placeholder="Tyson.Jakubowski@ya|">
      <div
        className="{styles.error}"
      >
        {errors.user}
      </div>
    </div>
    <div className="{styles.inputGroup}">
      <label htmlFor="password">Password</label>

      <input
        id="password"
        type="password"
        name="password"
        onChange="{onChangeHandler}"
        placeholder="Enter your password"
      >
      <div className="{styles.imageWrapper}">
        <Image src="{eye}" alt="eye" width="{24}" height="{24}" on-click="{passwordHandler}" />
      </div>

      <div
        className="{styles.error}"
      >
        {errors.password}
      </div>
    </div>
    <Button type="submit" class-css="login">
      Login
    </Button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
