<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData, form: ActionData } = $props();

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
>
  <div class="flex flex-col gap-4 p-5">
    {#if form?.message}
      <div class="">{form.message}</div>
    {/if}

    <div class="form-group">
      <label for="product_id">Product</label>
      <select id="product_id" name="product_id" required>
        <option value="" disabled selected>Select a product</option>
        {#each data.products.data as product}
          <option value={product.id}>{product.name}</option>
        {/each}
      </select>
    </div>

    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" min="1" required />
    </div>

    <div class="form-group">
      <label for="order_price">Order Price (MWK)</label>
      <input
        type="number"
        id="order_price"
        name="order_price"
        step="0.01"
        min="0"
        required
      />
    </div>

    <div class="form-group">
      <label for="selling_price">Selling Price (MWK)</label>
      <input
        type="number"
        id="selling_price"
        name="selling_price"
        step="0.01"
        min="0"
        required
      />
    </div>

    <div class="form-group">
      <label for="date">Date</label>
      <input type="datetime-local" id="date" name="date" required />
    </div>

    <button type="submit">Add Purchase</button>
  </div>
</form>

<style lang="postcss">
  .form-group {
    @apply flex flex-col;
  }
</style>
