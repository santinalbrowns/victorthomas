<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.purchases.total > 0}
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Order Price (MWK)</th>
        <th>Selling Price (MWK)</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each data.purchases.data as purchase}
        <tr>
          <td>{purchase.id}</td>
          <td>
            <div>
              <p>{purchase.product.name}</p>
              <!-- <img
                src={`/uploads/${purchase.product.images[0]?.name}`}
                alt={purchase.product.name}
                class="w-16 h-16 object-cover"
              /> -->
            </div>
          </td>
          <td>{purchase.quantity}</td>
          <td>{purchase.order_price.toLocaleString()}</td>
          <td>{purchase.selling_price.toLocaleString()}</td>
          <td>{new Date(purchase.date).toLocaleString()}</td>
          <td><form action="/purchases/{purchase.id}" method="post">
            <button>Delete</button>
          </form></td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <div>No purchases available</div>
{/if}

<style lang="postcss">
  img {
    @apply w-16 h-16 object-cover rounded;
  }
</style>
