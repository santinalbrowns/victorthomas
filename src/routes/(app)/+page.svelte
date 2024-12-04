<script lang="ts">
  import type { ActionData } from "./$types";

  let { data }: { data: PageData; } = $props();
</script>
  
  <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
  <section
    id="segment-1"
    role="tabpanel"
    aria-labelledby="segment-item-1"
    class="grid grid-cols-3 gap-5 p-5"
  >
    <section class="col-span-2 py-5 rounded-lg space-y-10">
      <div class="grid grid-cols-3 rounded gap-10">
        <div class="px-6 py-3 border rounded-md">
          <div class="text-2xl font-bold">{data.reports.categories}</div>
          <span class="text-gray-400 text-xs">Total Categories</span>
        </div>
        <div class="px-6 py-3 border rounded-md">
          <div class="text-2xl font-bold">{data.reports.products}</div>
          <span class="text-gray-400 text-xs">Total Products</span>
        </div>
        <div class="px-6 py-3 border rounded-md">
          <div class="text-2xl font-bold">{data.reports.categories}</div>
          <span class="text-gray-400 text-xs">Total Sales</span>
        </div>
      </div>
  
      <div class="pb-8 flex items-center justify-between">
        <div class="text-sm">Sales Volumes</div>
        <div class="flex items-center gap-1">
          <span
            class="material-symbols-outlined text-gray-400"
            style="font-size: 14px;"
          >
            schedule
          </span>
          <span class="text-xs text-gray-400">Last 30 Days</span>
        </div>
      </div>
    </section>
  
    <section class="overflow-x-auto px-5">
      <div class="grid grid-cols-1 rounded py-4 gap-10">
        <div class="px-6">
          <div class="">
            <div class="text-xs text-gray-400">Total Sales</div>
            <div class="text-2xl font-bold">
              MWK{data.totalPrice}
            </div>
          </div>
        </div>
  
        <div class="px-6">
          <div class="">
            <div class="text-xs text-gray-400">Total Purchases</div>
            <div class="text-2xl font-bold">
              0
            </div>
          </div>
          <div class="flex text-xs items-center gap-2">
              <div class="flex items-center gap-0.5 text-green-500 rounded-md">
                <span class="material-symbols-outlined !text-base">
                  arrow_upward
                </span>
                <span
                  >0%</span
                >
              </div>
            <span class="text-gray-400"
              >from 0</span
            >
          </div>
        </div>
  
        <div class="px-6">
          <div class="">
            <div class="text-xs text-gray-400">Net Profit</div>
            <div class="text-2xl font-bold">
              0
            </div>
          </div>
          <div class="flex text-xs items-center gap-2">
              <div class="flex items-center gap-0.5 text-green-500 rounded-md">
                <span class="material-symbols-outlined !text-base">
                  arrow_upward
                </span>
                <span
                  >0%</span
                >
              </div>
            <span class="text-gray-400"
              >from 0</span
            >
          </div>
        </div>
      </div>
    </section>
  </section>
  