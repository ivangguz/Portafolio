"use client";

import React from "react";
import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { AcmeLogo } from "../../public/Logos/AcmeLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen} className="purple-dark">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive className="code-editor-font">
          <Link aria-current="page" href="#">
            // Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="code-editor-font">
          <Link href="#" color="foreground">
            // Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem className="code-editor-font">
          <Link color="foreground" href="#">
            // Sobre Mi
          </Link>
        </NavbarItem>
        <NavbarItem className="code-editor-font">
          <Link color="foreground" href="#">
            // Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
