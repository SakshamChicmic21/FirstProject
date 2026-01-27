import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

export default function CustomMenu({
  items = [],
  menuButton = "Menu",
}: Readonly<{
  items: { label: string; onClick: () => void; disabled?: boolean }[];
  menuButton?: React.ReactNode;
}>) {
  return (
    <Menu menuButton={<MenuButton>{menuButton}</MenuButton>} transition>
      {items.map((item, index) => (
        <MenuItem
          key={`${item?.label + index}`}
          onClick={item.onClick}
          disabled={item.disabled}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
