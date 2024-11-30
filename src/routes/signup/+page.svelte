<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<form action="" method="post" use:enhance>
    
  {#if form?.message}
    <div class="">{form.message}</div>
  {/if}

  <div class="flex flex-col gap-3 p-5">
    <input
      type="text"
      name="firstname"
      id="firstname"
      placeholder="Firstname"
    />

    <input type="text" name="lastname" id="lastname" placeholder="Lastname" />

    <input type="email" name="email" id="email" placeholder="Email" />

    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />

    <button> Signup </button>

    <a href="/signin">Signin here</a>
  </div>
</form>
