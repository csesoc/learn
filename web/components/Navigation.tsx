import * as NavigationMenu from "@radix-ui/react-navigation-menu";

/**
 * Root navigation menu shown at top of all pages.
 */
const Navigation = () => (
  <NavigationMenu.Root className="h-full w-full bg-black">
    <NavigationMenu.List>
      <NavigationMenu.Item>Test</NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export default Navigation;
