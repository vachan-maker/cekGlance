<script>
    import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
    import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
  </script>
    <BottomNav {activeUrl} position="fixed" classInner="grid-cols-4" class="sm:block md:hidden">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Organisations" href="/organizers" exact={false}>
      <WalletSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Upcoming" href="/upcoming">
      <AdjustmentsVerticalOutline />
    </BottomNavItem>
    <BottomNavItem btnName="Past Events" href="/past-events">
      <UserCircleSolid />
    </BottomNavItem>
  </BottomNav>
  
  