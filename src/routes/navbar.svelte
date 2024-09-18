<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  </script>
  <Navbar  >
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CEK Updates</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/">Next Up</NavLi>
      <NavLi href="/past-events">Looking Back</NavLi>
      <NavLi href="/about">Updates</NavLi>
    </NavUl>
  </Navbar>  