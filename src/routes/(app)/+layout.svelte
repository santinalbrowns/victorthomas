<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>


<header>
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/categories">Categories</a>
    <a href="/purchases">Purchases</a>
    <a href="/sales">Sales</a>
</header>

{@render children()}