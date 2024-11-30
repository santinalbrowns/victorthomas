<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();

  let loading: boolean = $state(false);
</script>

<form
  action="/products/{data.product.id}?/update"
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
      <input
        type="text"
        id="name"
        name="name"
        value={data.product.name}
        required
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" name="description" rows="4" required
        >{data.product.description}</textarea
      >
    </div>

    <div class="form-group">
      <label>
        <input
          type="checkbox"
          id="status"
          name="status"
          checked={data.product.status}
        />
        Status
      </label>
    </div>

    <div class="form-group">
      <label>
        <input
          type="checkbox"
          id="visibility"
          name="visibility"
          checked={data.product.visibility}
        />
        Visibility
      </label>
    </div>

    <div class="form-group">
      <label for="sku">SKU</label>
      <input
        type="text"
        id="sku"
        name="sku"
        value={data.product.sku}
        required
      />
    </div>

    <div class="form-group">
      <label for="category_id">Category</label>
      <select id="category_id" name="category_id" required>
        <option disabled selected>Select a category</option>
        {#each data.categories.data as category}
          <option
            selected={category.id == data.product.category_id}
            value={category.id}>{category.name}</option
          >
        {/each}
      </select>
    </div>

    <div class="form-group">
      <label for="images">Images</label>
      <input type="file" id="images" name="images[]" multiple />
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

<form action="/products/{data.product.id}?/delete" method="post">
  <button>Delete</button>
</form>

<style lang="postcss">
  .form-group {
    @apply flex flex-col;
  }
</style>
