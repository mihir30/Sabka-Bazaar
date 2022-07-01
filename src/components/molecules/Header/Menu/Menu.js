import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useForm from "../../../../validations/validateRegister";

const Menu = () => {
  const { getEmail, removeEmail } = useForm();
  let primaryMenus = [
    { name: "HOME", url: "/" },
    { name: "PRODUCTS", url: "/products" },
    { name: "SIGN IN", url: "/login" },
    { name: "REGISTER", url: "/register" },
  ];
  const location = useLocation();
  let searchQuery = location.pathname;
  let data = <div></div>;
  let logout = <div></div>;
  if (getEmail() === null) {
    data = <div></div>;
  } else {
    if (searchQuery === "/login") {
      data = <div></div>;
      logout = <div></div>;
      removeEmail();
    } else if (searchQuery === "/register") {
      data = <div></div>;
      logout = <div></div>;
      removeEmail();
    } else {
      data = (
        <div>
          Hello, <span className="header-email">{getEmail()}</span>
        </div>
      );
      primaryMenus.push({ name: "LOGOUT", url: "/login" });
    }
  }

  let menus = null;
  menus = primaryMenus.map((primaryMenu, index) => {
    return <MenuItem {...primaryMenu} key={index} />;
  });

  return <ul className="navigation">{menus}</ul>;
};
export default Menu;
