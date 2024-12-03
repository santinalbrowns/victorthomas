<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.orders.total > 0}
  <div class="p-10">
    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Status</th>
          <th>Total (MWK)</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each data.orders.data as order}
          <tr>
            <td>{order.number}</td>
            <td>{order.status}</td>
            <td>{order.total.toLocaleString()}</td>
            <td>
              <div>
                <p>
                  {order.details.customer.firstname}
                  {order.details.customer.lastname}
                </p>
                <p>{order.details.customer.email}</p>
                <p>{order.details.customer.phone || "N/A"}</p>
              </div>
            </td>
            <td>
              <ul>
                {#each order.items as item}
                  <li>
                    <p>
                      {item.name} (x{item.quantity}) - MWK {item.price.toLocaleString()}
                    </p>
                    <!-- {#if item.images.length > 0}
                        <img
                          src={`/uploads/${item.images[0].name}`}
                          alt={item.name}
                          class="w-16 h-16 object-cover my-2"
                        />
                      {/if} -->
                  </li>
                {/each}
              </ul>
            </td>
            <td>
              {new Date(order.created_at).toLocaleString()}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <div class="text-center text-gray-500">No orders available</div>
{/if}

<style lang="postcss">
  img {
    @apply w-16 h-16 object-cover rounded my-2;
  }

  th {
    @apply px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase
  }

  table {
    @apply min-w-full divide-y divide-gray-200
  }

  thead {
    @apply bg-gray-50
  }

  td {
    @apply px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800
  }
</style>
