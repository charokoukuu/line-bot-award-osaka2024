import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, ListItemButton } from "@mui/material";
import { useState } from "react";
import { DrawerLeft } from "./DrawerLeft";
import { navigationItem } from "../types";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-[#eed3a8] text-xl font-bold text-zinc-900 shadow-md">
        {isMobile ? (
          <div>
            <div className="relative h-14 items-center px-4">
              <IconButton
                className="justify-start"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <MenuIcon />
              </IconButton>
              <div className="mx-auto text-3xl">
                <Link href="/">
                  <img
                    src="botreasure.svg"
                    alt="RunTicket"
                    className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <nav>
            <ul className="mx-4 flex h-14 items-center justify-start gap-4 text-xs">
              <li className="text-3xl">
                <Link href="/">
                  <img
                    src="botreasure.svg"
                    alt="BOTREASURE"
                    className="bg-blur-md h-14 rounded-xl"
                  />
                </Link>
              </li>
              {navigationItem.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <ListItemButton>{item.name}</ListItemButton>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <DrawerLeft
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </>
  );
};
