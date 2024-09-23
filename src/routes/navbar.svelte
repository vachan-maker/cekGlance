<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
  </script>
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CEK Glance</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl {activeUrl} >
      <NavLi href="/upcoming" data-sveltekit-preload-data="hover">Next Up</NavLi>
      <NavLi href="/past-events" data-sveltekit-preload-data="hover">Looking Back</NavLi>
    </NavUl>
  </Navbar>  