import React from "react";
import CustomLink from "../Customlink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="d-flex p-3 items-center justify-content-center nav-link">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
