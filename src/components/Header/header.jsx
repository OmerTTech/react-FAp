import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import SelectOpt from "../SelectOpt/SelectOpt";

const header = () => {
  return (
    <div className="bg-danger">
      <header className="container p-2 d-flex justify-content-between">
        <Link to="/">
          <img src="http://shop.az/assets/images/logos/logo.svg" alt="" />
        </Link>
        <nav className="nav">
          <NavLink className="mx-3 d-flex align-items-center" to="/">Ana Səhifə</NavLink>
          <NavLink className="mx-3 d-flex align-items-center" to="/products">Məhsullar</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default header;
