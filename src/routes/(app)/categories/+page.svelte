<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

{#if data.categories.total > 0}
  <section class="px-10 py-5">
    <header
      class="flex justify-between text-gray-900 sticky top-0 z-10 bg-white"
    >
      <div class="space-y-5">
        <div class="space-y-2">
          <div class="font-semibold text-lg text-left rtl:text-right">
            Categories
          </div>
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
            <li
              class="inline-flex items-center text-xs font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Categories
            </li>
          </ol>
        </div>

        <div class="">
          <div class="py-3">
            <div class="relative max-w-xs">
              <label class="sr-only">Search</label>
              <input
                type="text"
                name="hs-table-with-pagination-search"
                id="hs-table-with-pagination-search"
                class="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search for items"
              />
              <div
                class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
              >
                <svg
                  class="size-4 text-gray-400"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <a
          href="/categories/add"
          class="block bg-blue-500 text-white text-sm px-4 py-1 rounded-md"
          >Create</a
        >
      </div>
    </header>

    <section>
      <div class="flex flex-col pb-5">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >#</th
                    >
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >Name</th
                    >
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    ></th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {#each data.categories.data as category, index}
                    <tr class="hover:bg-gray-100">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >{index + 1}</td
                      >
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >{category.name}</td
                      >

                      <td
                        class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                      >
                        <a
                          href="/categories/{category.id}"
                          class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                          >Edit</a
                        >
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="py-1 px-4 hidden">
        <nav class="flex items-center space-x-1">
          <button
            type="button"
            class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            type="button"
            class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
            aria-current="page">1</button
          >
          <button
            type="button"
            class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
            >2</button
          >
          <button
            type="button"
            class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
            >3</button
          >
          <button
            type="button"
            class="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            <span class="sr-only">Next</span>
            <span aria-hidden="true">»</span>
          </button>
        </nav>
      </div>
    </section>
  </section>
{:else}
  <div
    class="h-screen flex flex-col justify-center items-center text-center space-y-1"
  >
    <div class="flex">
      <span
        class="material-symbols-outlined text-blue-300"
        style="font-size: 100px;"
      >
        category
      </span>
    </div>
    <div class="">
      <div class="text-2xl text-gray-400">No Categories</div>
    </div>
    <div class="text-sm text-gray-400">
      <span
        >Click <a href={`/categories/add`} class="text-blue-500"> here</a> to add
        your first category</span
      >
    </div>
  </div>
{/if}
