import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "../../../styles/Navbar.module.scss";
import routesList from "../../utils/routesList";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = (
    <div
      className={styles.drawer}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {routesList.map((route, index) => (
          <ListItem key={index} button onClick={toggleDrawer(false)}>
            <Link href={route.to} passHref>
              <Button
                variant="contained"
                className={`bg-black text-2xl ${
                  pathname === route.to ? "is-active" : ""
                }`}
                fullWidth
                onClick={() => setDrawerOpen(false)}
              >
                {route.text}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <>
          <AppBar position="static" className={styles.navbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={styles.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                Anders Lundbäck
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList}
          </Drawer>
        </>
      ) : (
        <nav className={styles.desktopMenu}>
          <ul>
            {routesList.map((route, index) => (
              <li key={index}>
                <Link href={route.to} passHref>
                  <Button
                    variant="contained"
                    className={`bg-black text-2xl ${
                      pathname === route.to ? "is-active" : ""
                    }`}
                  >
                    {route.text}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
