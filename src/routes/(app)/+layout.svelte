<script lang="ts">
  import "material-symbols";
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";
  import { page, navigating } from "$app/stores";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();

  const routes = [
    {
      name: "Categories",
      path: "/categories",
      icon: "order_approve",
    },
    {
      name: "Products",
      path: "/products",
      icon: "order_approve",
    },
    {
      name: "Purchases",
      path: "/purchases",
      icon: "calendar_month",
    },
    {
      name: "Sales",
      path: "/sales",
      icon: "calendar_month",
    },
  ];
</script>

<!-- <header>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/categories">Categories</a>
  <a href="/purchases">Purchases</a>
  <a href="/sales">Sales</a>
</header> -->

<aside
  class="w-72 fixed left-0 top-0 h-full bg-gray-50 p-8 flex flex-col justify-between"
>
  <div class="space-y-6">
    <div class="space-y-5">
      <div class="w-36 px-2 py-5">
        <a href="/"> <img src="logo.png" alt="logo" /></a>
      </div>
      <ul>
        <li class="text-sm">
          <a
            href="/"
            class:bg-gray-400={$page.url.pathname == "/"}
            class:bg-opacity-10={$page.url.pathname == "/"}
            class="flex items-center gap-3 text-gray-700 text-opacity-75 hover:text-gray-900 px-2 py-1.5 hover:bg-gray-400 hover:bg-opacity-10 rounded-md"
          >
            <span class="material-symbols-outlined">donut_small</span>
            <span>Reports</span>
          </a>
        </li>
        {#each routes as route}
          <li class="text-sm text-white text-opacity-75">
            <a
              href={route.path}
              class:bg-gray-400={$page.url.pathname.startsWith(route.path)}
              class:bg-opacity-10={$page.url.pathname.startsWith(route.path)}
              class="flex items-center gap-3 text-gray-700 text-opacity-75 hover:text-gray-900 px-2 py-1.5 hover:bg-gray-400 hover:bg-opacity-10 rounded-md"
            >
              <span class="material-symbols-outlined"> {route.icon} </span>
              <span>{route.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="">
    <ul>
      <li class="text-sm text-white text-opacity-75">
        <a
          href="/settings"
          class:bg-white={$page.url.pathname == "/settings"}
          class:bg-opacity-10={$page.url.pathname == "/settings"}
          class="flex items-center gap-3 text-white text-opacity-75 hover:text-white px-2 py-1.5 hover:bg-white hover:bg-opacity-10 rounded-md"
        >
          <span class="material-symbols-outlined"> settings </span>
          <span>Settings</span>
        </a>
      </li>
      <li class="text-sm text-white text-opacity-75">
        <a
          href="/support"
          class:bg-white={$page.url.pathname == "/support"}
          class:bg-opacity-10={$page.url.pathname == "/support"}
          class="flex items-center gap-3 text-white text-opacity-75 hover:text-white px-2 py-1.5 hover:bg-white hover:bg-opacity-10 rounded-md"
        >
          <span class="material-symbols-outlined"> help </span>
          <span>Help & Support</span>
        </a>
      </li>
      <li class="text-sm text-white text-opacity-75">
        <form action="" method="post">
          <button
            class="flex items-center gap-3 hover:text-white px-2 py-1.5 hover:bg-white hover:bg-opacity-10 rounded-md"
          >
            <span class="material-symbols-outlined"> logout </span>
            <span>Logout</span>
          </button>
        </form>
      </li>
    </ul>
  </div>
</aside>

<main class="ml-72">
  {@render children()}
</main>

<style lang="postcss">
  ul {
    @apply space-y-0.5;
  }
  .material-symbols-outlined {
    font-size: 16px;
    font-variation-settings:
      "FILL" 1,
      "wght" 300,
      "GRAD" 0,
      "opsz" 24;
  }
</style>
