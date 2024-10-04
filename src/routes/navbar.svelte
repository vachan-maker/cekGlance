<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
  </script>
  <Navbar class="max-w-6xl m-auto">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CEK Glance</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl {activeUrl} >
      <NavLi href="/organizers" data-sveltekit-preload-data="hover">Organizations</NavLi>
      <NavLi href="/upcoming" data-sveltekit-preload-data="hover">Next Up</NavLi>
      <NavLi href="/archive" data-sveltekit-preload-data="hover">Archive</NavLi>
      <NavLi href="/past-events" data-sveltekit-preload-data="hover">Looking Back</NavLi>
    </NavUl>
  </Navbar>  