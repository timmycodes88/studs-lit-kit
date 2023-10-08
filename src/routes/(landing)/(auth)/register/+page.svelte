<script lang="ts">
  import AuthCardWrapper from "../auth-card-wrapper.svelte"
  import AuthInput from "../auth-input.svelte"

  const props = {
    title: "Register",
    description: "Register for an account",
    button: "Register",
    href: "/login",
    linkText: "Already have an Account?",
  }

  //  <AuthInput
  //     name="first_name"
  //     type="text"
  //     placeholder="first name"
  //     label="First Name"
  //   />
  //   <AuthInput
  //     name="last_name"
  //     type="text"
  //     placeholder="last name"
  //     label="Last Name"
  //   />
  //   <AuthInput
  //     name="username"
  //     type="text"
  //     placeholder="username"
  //     label="Username"
  //   />
</script>

<AuthCardWrapper {...props}>
  <AuthInput name="email" type="email" placeholder="email" label="Email" />
  <AuthInput
    name="password"
    type="password"
    placeholder="password"
    label="password"
  />
  <AuthInput
    name="password2"
    type="password"
    placeholder="password"
    label="retype password"
  />
</AuthCardWrapper>
