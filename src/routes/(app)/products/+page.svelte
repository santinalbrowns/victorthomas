<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.products.total > 0}
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>ID</th>
        <th>SKU</th>
        <th>Status</th>
        <th>Visibility</th>
      </tr>
    </thead>
    <tbody>
      {#each data.products.data as product, index}
        <tr>
          <td>{index + 1}</td>
          <td><a href="products/{product.id}">{product.name}</a></td>
          <td>{product.id}</td>
          <td>{product.sku}</td>
          <td>{product.status ? "Active" : "Inactive"}</td>
          <td>{product.visibility ? "Visible" : "Hidden"}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <div>No products available</div>
{/if}
