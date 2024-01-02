import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import Search from "../common/Search";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
       <Search />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
