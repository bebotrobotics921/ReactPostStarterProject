import React from "react";
import classes from "./Navbar.module.css";
import SVGComponent from "./Logo";
import { Container, Group, Burger, Drawer, Stack } from "@mantine/core";
import useLinks from "./useLinks";
import { DrawerContext } from "../../Contexts/drawerContext";

const Navbar = () => {
  const { opened, toggle } = React.useContext(DrawerContext);
  const [items] = useLinks();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <SVGComponent size={28} /><h3>BEAR PHOTOGRAPHY</h3>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} />
        <Drawer
          withCloseButton={true}
          opened={opened}
          size="100%"
          onClose={toggle}
        >
          <Stack>{items}</Stack>
        </Drawer>
      </Container>
     
    </header>
  );
};

export default Navbar;
