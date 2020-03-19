import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideBarItem.scss";

export function SideBarItem({ highlight, label, icon }) {
  return (
    <Menu.Item
      className={["sidebar-item", highlight ? "highlight-item" : null].join(
        " "
      )}
    >
      <div className='sidebar-item-alignment-container'>
        <span>
          <Icon size='large' name={icon} />
        </span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  );
}
