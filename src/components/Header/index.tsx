import * as React from "react";

import { Box, AppBar, Toolbar } from "@mui/material";

import Logo from "../Logo";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import IdentityMenu from "./IdentityMenu";
import { MENU, MOBILE_MENU } from "./config";
import { MenuItemProps } from "./MenuItem";

export interface HeaderProps {
  menu?: MenuItemProps[];
  mobileMenu?: MenuItemProps[];
  identity?: boolean;
  logo?: JSX.Element;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const {
    identity = true,
    menu = MENU,
    mobileMenu = MOBILE_MENU,
    logo,
  } = props;

  return (
    <AppBar
      sx={{
        position: "fixed",
        zIndex: 11,
        top: { xs: 16, md: 24 },
        left: { xs: 16, md: 24 },
        width: { xs: "calc(100% - 32px)", md: "calc(100% - 48px)" },
        display: "flex",
        alignItems: "center",
        flexShrink: 1,
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        boxShadow: "none",
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.5)",
        borderRadius: "8px",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {logo || <Logo />}
        <Menu menu={menu} />
        {identity ? <IdentityMenu /> : <Box />}
        <MobileMenu menu={mobileMenu} />
      </Toolbar>
    </AppBar>
  );
};
