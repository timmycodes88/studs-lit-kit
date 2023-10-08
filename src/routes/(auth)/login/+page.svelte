<script>
  import Card from '$lib/components/ui/card.svelte'
</script>

<form>
  <Card bg="bg-base-200 lg:min-w-[24rem]" let:C>
    <C.GrandTitle>Login</C.GrandTitle>
    <div class="form-control w-full max-w-xs">
      <label for="username/email" class="label">
        <span class="label-text">Username</span>
      </label>
      <input
        name="username/email"
        type="text"
        placeholder="username / email"
        class="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
    <div class="form-control w-full max-w-xs">
      <label for="password" class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        name="password"
        type="password"
        placeholder="password"
        class="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
    <C.Actions>
      <button class="mt-3 btn btn-primary w-full">Login</button>
    </C.Actions>
    <a href="/register" class="btn btn-link">Don't have an Account?</a>
  </Card>
</form>
