<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData, PageData } from "./$types";
  
    let { data, form }: { data: PageData; form: ActionData } = $props();
  
    let loading: boolean = $state(false);
  </script>
  
  <form
    action="/categories/{data.category.id}?/update"
    method="post"
    use:enhance={() => {
      loading = true;
      return async ({ update, result }) => {
        loading = true;
        if (result.type == "success") {
          loading = false;
        }
        update();
      };
    }}
    enctype="multipart/form-data"
  >
    {#if form?.message}
      <div class="">{form.message}</div>
    {/if}
  
    <div class="flex flex-col gap-3 p-5">
      <input type="text" name="name" id="name" value={data.category.name} placeholder="name" />
  
      <input type="file" name="image" id="image" />
  
      <button disabled={loading}>
        {#if loading}
          <span>Loading...</span>
        {:else}
          <span>Save</span>
        {/if}
      </button>
    </div>
  </form>
  
  <form action="/categories/{data.category.id}?/delete" method="post">
    <button>Delete</button>
  </form>