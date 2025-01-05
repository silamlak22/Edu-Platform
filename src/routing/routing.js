import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
const Routing = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);
  return (
    <>
      <Header></Header>
      <div className={path !== "" ? "page-content" : ""}>
        <Outlet />
      </div>
    </>
  );
};
export default Routing;
