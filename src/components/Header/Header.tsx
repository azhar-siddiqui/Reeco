import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-[#1E633F] text-white h-[60px] flex items-center">
      <nav className="w-full mx-5 xl:mx-auto max-w-[1200px] flex items-center justify-between">
        <ol className="flex gap-x-10 md:gap-x-16">
          <li>
            <Link to="/">
              <p className="font-bold text-lg">Reeco</p>
            </Link>
          </li>
          <li className="hidden md:block">
            <NavLink to="/">Store</NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink to="/">Order</NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink to="/">Analytics</NavLink>
          </li>
        </ol>
        <ol className="flex gap-x-6 md:gap-x-12">
          <li className="relative">
            <span className="bg-[#3DCA72] h-4 w-4 flex items-center justify-center rounded-full absolute z-10 top-[-2px] text-xs left-[-5px]">
              5
            </span>
            <NavLink to="/">
              <AiOutlineShoppingCart className="h-8 w-8 transform scale-x-[-1]" />
            </NavLink>
          </li>
          <li className="flex gap-x-5 items-center cursor-pointer">
            <span>Hello, James</span>
            <BsChevronDown className="h-4 w-4 " />
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
