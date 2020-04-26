import React from "react";
import { slide as Menu } from "react-burger-menu";
import image from "../images/menu-icon.png"

export default props => {
  return (
    <Menu right disableAutoFocus customBurgerIcon={(<img src={image} alt="menu" />)} className="menu-icon" >
      <a href="https://www.instagram.com/j.r.and.associates/" target="blank" rel="noopener noreferrer">insta</a>

      <a href="mailto:booking@jrandassociates.org">contact</a>

      <a href="https://go.booker.com/location/JRandassociates" target="blank" rel="noopener noreferrer">book</a>
    </Menu>
  );
};
