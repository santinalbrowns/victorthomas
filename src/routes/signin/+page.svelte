<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<form action="" method="post" use:enhance>
  <div class="flex flex-col gap-3 p-5">
    {#if form?.message}
      <div class="">{form.message}</div>
    {/if}

    <input type="email" name="email" id="email" placeholder="Email" />

    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />

    <button> Signin </button>

    <a href="/signup">Signup here</a>
  </div>
</form>
