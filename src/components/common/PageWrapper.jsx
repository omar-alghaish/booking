import { useDispatch } from "react-redux";
import { useEffect } from "react";

const PageWrapper = ({ state, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state, dispatch]);

  return children;
};

export default PageWrapper;
