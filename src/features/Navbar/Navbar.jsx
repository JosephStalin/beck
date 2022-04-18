import "./Navbar.css";
import Search from "../Search/Search.js";
import Logo from "./Logo.js.js";
import Categories from "../../components/Categories.js";

function Navbar() {
  return (
    <div>
      <Logo />
      <Search />
      <Categories />
    </div>
  );
}

export default Navbar;
