<script>
  import AuthCardWrapper from "../auth-card-wrapper.svelte"
  import AuthInput from "../auth-input.svelte"

  const props = {
    title: "Login",
    description: "Login to your account",
    button: "Login",
    href: "/register",
    linkText: "Don't have an Account?",
  }
</script>

<AuthCardWrapper {...props}>
  <AuthInput
    name="username/email"
    type="text"
    placeholder="username / email"
    label="username / email"
  />

  <AuthInput
    name="password"
    type="password"
    placeholder="password"
    label="password"
  />
</AuthCardWrapper>
