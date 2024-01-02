import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSearch } from "../../redux/features/Search";
const Search = () => {
  const { searchOpen } = useSelector((state) => state.search);
  const dispatch = useDispatch()
  const close = ()=>{
    dispatch(openCloseSearch(false))
  }

  if (searchOpen) {
    const contaianer = document.querySelector("body");
    contaianer.style.height = "100vh";
    contaianer.style.overflow = "hidden";
  } else {
    const contaianer = document.querySelector("body");
    contaianer.style.height = "max-content";
    contaianer.style.overflow = "scroll";
  }
  return (
    <div className={`search-modal ${searchOpen ? "open" : ""}`}>
        <div className="background" onClick={close}></div>
      <div className="content">
        <div className="input">
          <input type="text" placeholder="search"/>
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
