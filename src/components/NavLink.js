import React from "react";
import { NavLink as NavLinkReactRouter } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
  return(
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => isActive ? 'isActive' : undefined } 
      to={to}
      >{children}
    </NavLinkReactRouter>
  );
}