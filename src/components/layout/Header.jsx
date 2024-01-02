import React, { useState } from "react";
import { headerRoutes } from "../../routes/router";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSearch } from "../../redux/features/Search";

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const { searchOpen } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const openSearch = () => {
    dispatch(openCloseSearch(true));
    setIsOpen(false)
    console.log(searchOpen)

  };
  const close = ()=>{
    setIsOpen(false)
  }
  const toggle = () => {
    setIsOpen(!open);
  };
  return (
    <>
      <div className="toggle-open" onClick={toggle}>
        {open ? <IoClose /> : <BsList />}
      </div>
      <div className={`header-container ${open ? "open" : ""}`}>
        <div className="left-side">
          <div className="logo">Emprise</div>
          <div className="links">
            {headerRoutes.map((link) => (
              <Link onClick={close} to={link.path}>{link.state}</Link>
            ))}
            <div onClick={openSearch}>
              <CiSearch />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="buttons-container">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
