import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navigationItem } from "../types";
import { Drawer } from "antd";

interface DrawerLeftProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}
export const DrawerLeft = ({ isMenuOpen, setIsMenuOpen }: DrawerLeftProps) => {
  return (
    <Drawer
      title=""
      placement="left"
      onClose={() => {
        setIsMenuOpen(false);
      }}
      open={isMenuOpen}
    >
      <List>
        {navigationItem.map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <Link
                href={item.path}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <ListItemButton className="w-full">
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          </div>
        ))}
      </List>
    </Drawer>
  );
};
