<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<section class="px-10 pt-5">
  <header class="flex justify-between text-gray-900 sticky top-0 z-10 bg-white">
    <div class="space-y-5">
      <div class="space-y-2">
        <div class="font-semibold text-lg text-left rtl:text-right">
          Products
        </div>
      </div>
    </div>
  </header>
</section>

<section class="px-10">
  <div class="">
    {#if data.products.total > 0}
      <section class="py-3 w-full">
        <header
          class="flex justify-between text-gray-900 sticky top-0 z-10 bg-white py-4"
        >
          <div class="space-y-5">
            <div class="">
              <div class="relative max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="py-2 px-3 ps-9 block w-full border-gray-200 rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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

          <div class="">
            <a
              href="/products/add"
              type="button"
              class="block bg-blue-500 text-white text-sm px-4 py-1 rounded-md"
              >Create</a
            >
          </div>
        </header>

        <section>
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        ></th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >SKU</th
                        >
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >Name</th
                        >
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >Description
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >Status</th
                        >
                        <th
                          scope="col"
                          class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >Visibility</th
                        >
                        <th
                          scope="col"
                          class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      {#each data.products.data as product}
                        <tr>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                          >
                            <!-- <img
                              src="http://localhost:5000/thumbnails/{product
                                .image[0].name}"
                              alt=""
                            /> -->
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 uppercase"
                          >
                            {product.sku}</td
                          >
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                            >{product.name}</td
                          >
                          <td class="px-6 py-4 text-sm text-gray-800 line-clamp-1 overflow-hidden max-w-52"
                            >{product.description}</td
                          >
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                            >{product.status ? "Active" : "Inactive"}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                            >{product.visibility ? "Visible" : "Hidden"}
                          </td>
                          <td
                            class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"
                          >
                            <a
                              href="/products/{product.id}"
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

          <div class="py-6">
            <!-- Pagination -->
            <nav class="flex items-center gap-x-1" aria-label="Pagination">
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Previous"
              >
                <svg
                  class="shrink-0 size-3.5"
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
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span class="sr-only">Previous</span>
              </button>
              <div class="flex items-center gap-x-1">
                <span
                  class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >1</span
                >
                <span
                  class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm"
                  >of</span
                >
                <span
                  class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm"
                  >20</span
                >
              </div>
              <button
                type="button"
                class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-label="Next"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="shrink-0 size-3.5"
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
              </button>
            </nav>
            <!-- End Pagination -->
          </div>
        </section>
      </section>
    {:else}
      <div
        class="h-[70vh] flex flex-col justify-center items-center text-center space-y-1"
      >
        <div class="flex">
          <span
            class="material-symbols-outlined text-blue-300"
            style="font-size: 100px;"
          >
            shopping_cart
          </span>
        </div>
        <div class="">
          <div class="text-2xl text-gray-400">No Products</div>
        </div>
        <div class="text-sm text-gray-400">
          <span
            >Click <a href="/products/add" class="text-blue-500">here</a>
            to add your first product</span
          >
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 1,
      "wght" 100,
      "GRAD" 0,
      "opsz" 24;
  }
</style>
