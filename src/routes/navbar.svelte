<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  </script>
  <Navbar  >
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CEK Glance</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/" data-sveltekit-preload-data="hover">Next Up</NavLi>
      <NavLi href="/past-events" data-sveltekit-preload-data="hover">Looking Back</NavLi>
      <NavLi href="/about" data-sveltekit-preload-data="hover">Updates</NavLi>
    </NavUl>
  </Navbar>  