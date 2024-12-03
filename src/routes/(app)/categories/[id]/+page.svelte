<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  let { data, form }: { data: PageData; form: ActionData } = $props();

  let loading: boolean = $state(false);
</script>

<header
  class="flex justify-between px-10 py-5 text-gray-900 sticky top-0 z-10 bg-white"
>
  <div class="space-y-2">
    <div class="font-semibold text-lg text-left rtl:text-right">Categories</div>
    <ol class="flex items-center whitespace-nowrap">
      <li class="inline-flex items-center">
        <a
          class="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="/"
        >
          Home
        </a>
        <svg
          class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li class="inline-flex items-center">
        <a
          class="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="/categories"
        >
          Categories
          <svg
            class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </li>
      <li
        class="inline-flex items-center text-xs font-semibold text-gray-800 truncate"
        aria-current="page"
      >
        Edit
      </li>
    </ol>
  </div>
</header>

<section class="p-10 space-y-3">
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

    <div class="flex flex-col gap-3 max-w-sm">
      <input
        type="text"
        name="name"
        id="name"
        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        value={data.category.name}
        placeholder="name"
      />

      <input
        type="file"
        name="image"
        id="image"
        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />

      <div class="">
        <button
          disabled={loading}
          class="block bg-blue-500 text-white text-sm px-4 py-1 rounded-md"
        >
          {#if loading}
            <span>Loading...</span>
          {:else}
            <span>Update Category</span>
          {/if}
        </button>
      </div>
    </div>
  </form>

  <form action="/categories/{data.category.id}?/delete" method="post">
    <button class="block text-rose-500 text-sm px-4 py-1 rounded-md"
      >Delete</button
    >
  </form>
</section>
