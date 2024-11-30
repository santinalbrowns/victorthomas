<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();

  let loading: boolean = $state(false);
</script>

<form
  action=""
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
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" name="description" rows="4" required
      ></textarea>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" id="status" name="status" checked />
        Status
      </label>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" id="visibility" name="visibility" checked />
        Visibility
      </label>
    </div>

    <div class="form-group">
      <label for="sku">SKU</label>
      <input type="text" id="sku" name="sku" required />
    </div>

    <div class="form-group">
      <label for="category_id">Category</label>
      <select id="category_id" name="category_id" required>
        <option disabled selected>Select a category</option>
        {#each data.categories.data as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>

    <div class="form-group">
      <label for="images">Images</label>
      <input type="file" id="images" name="images[]" multiple required />
    </div>

    <button disabled={loading}>
      {#if loading}
        <span>Loading...</span>
      {:else}
        <span>Save</span>
      {/if}
    </button>
  </div>
</form>

<style lang="postcss">
  .form-group {
    @apply flex flex-col;
  }
</style>
