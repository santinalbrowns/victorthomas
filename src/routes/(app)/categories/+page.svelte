<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.categories.total > 0}
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Slug</th>
      </tr>
    </thead>
    <tbody>
      {#each data.categories.data as category, index}
        <tr>
          <td>{index + 1}</td>
          <td><a href="categories/{category.id}">{category.name}</a></td>
          <td>{category.slug}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <div class="">No cagegories</div>
{/if}
