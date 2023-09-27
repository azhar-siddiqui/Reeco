import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const BreadCrumb = () => {
  return (
    <ol className="inline-flex items-center ">
      <li className="inline-flex items-center">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          Orders
        </Link>
      </li>
      <li>
        <div className="flex items-center">
          <BiChevronRight className="w-7 h-7 text-gray-400" />
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white underline leading-3"
          >
            Order 32457XYZ
          </Link>
        </div>
      </li>
    </ol>
  );
};

export default BreadCrumb;
