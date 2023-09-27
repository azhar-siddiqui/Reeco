import { useEffect, useState } from "react";

import BreadCrumb from "../components/Bredcrumb/BreadCrumb";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPrinter, BsCheck2 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

import Avocado from "../assets/Avocado Hass.jpg";
import Modal from "../components/Modal/Modal";
import { useProductServiceQuery } from "../services/product.service";
import { Product } from "../@types/products/product";
import { extractLastTwoDigits } from "../utils/extractLastTwoDigits";
import MissingProduct from "../components/Modal/MissingProduct";

const OrderDetails = () => {
  const { data, isSuccess, isError } = useProductServiceQuery({
    query: "",
  });
  const [editModal, setEditModal] = useState(false);
  const [missingModal, setMissingModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const [value, setValue] = useState<Product | null>({
    id: 0,
    productName: "",
    brand: "",
    quantity: 0,
    status: "",
    price: 0,
    discountedPrice: 0,
    productUnit: "",
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, isSuccess, isError]);

  const handleModal = (value: string, id: number | string) => {
    if (value === "edit") {
      setEditModal(!editModal);
    }
    if (value === "missing") {
      setMissingModal(!missingModal);
    }
  };

  const handleEditDetails = (id: number) => {
    setEditModal(true);
    const existingUser = products.find((user) => user.id === id);
    setValue(existingUser || null);
  };

  return (
    <>
      <div className="bg-white shadow-lg py-2 w-full">
        <div className="mx-5 xl:mx-auto max-w-[1200px]">
          <BreadCrumb />
          <div className="sm:flex justify-between mt-4">
            <h1 className="text-xl font-bold text-[#323540]">Order 32457ABC</h1>
            <div className="flex justify-between gap-x-4 mt-4 sm:mt-0">
              <button className="px-6 py-1 rounded-full text-[#1E633F] hover:text-white bg-white hover:bg-[#1E633F] border-2 border-[#1E633F] transition">
                Back
              </button>
              <button className="px-6 py-1 rounded-full  text-white  hover:text-[#1E633F] bg-[#1E633F] hover:bg-white  border-2 border-[#1E633F] transition">
                Approve Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Section Start*/}
      <div className="mx-5 xl:mx-auto max-w-[1200px] border mt-6 rounded-lg py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 md:px-5">
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Supplier
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">
              East coast fruits
              <br className="hidden sm:block" /> vegetables
            </p>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block" />
          </div>
          <hr className="md:hidden" />
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Shipping Date
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">Thu, Feb 10</p>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block" />
          </div>
          <hr className="md:hidden" />
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Total
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">$ 15,028.3</p>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block" />
          </div>
          <hr className="md:hidden" />
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Category
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">$ 15,028.3</p>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block" />
          </div>
          <hr className="md:hidden" />
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Department
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">300-444-678</p>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block" />
          </div>
          <hr className="md:hidden" />
          <div className="relative my-4 px-5 lg:my-0">
            <h5 className="mb-0 font-semibold text-gray-500 opacity-70">
              Status
            </h5>
            <p className="font-bold text-[#3f434a] text-lg">
              Awaiting your <br className="hidden sm:block" /> approvel
            </p>
          </div>
        </div>
      </div>
      {/* Divider Section End*/}

      <div className="mx-5 xl:mx-auto max-w-[1200px] border mt-6 rounded-lg py-6 px-10">
        <div className="w-full flex items-center justify-between">
          <div className="max-w-[450px] border-2 rounded-full  py-2 px-4 flex items-center flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              className="w-full bg-transparent px-1 outline-none"
            />
            <button>
              <AiOutlineSearch className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="flex gap-x-10">
            <button className="px-6 py-1 rounded-full text-[#1E633F] hover:text-white bg-white hover:bg-[#1E633F] border-2 border-[#1E633F] transition">
              Add item
            </button>
            <button>
              <BsPrinter className="text-[#1E633F] w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Order Product Table Content  Start*/}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <table className="w-full text-sm text-left  dark:text-gray-400">
            <thead className="text-xs capitalize border">
              <tr className="text-center text-gray-600">
                <th scope="col" className="px-4 py-3 w-[50px]">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 rounded focus:ring-0"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 w-[350px] font-normal text-sm"
                >
                  Product name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-normal text-sm w-[150px]"
                >
                  Brand
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-normal text-sm w-[130px]"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-normal text-sm w-[100px]"
                >
                  Quntity
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-normal text-sm w-[100px]"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-normal text-sm w-[280px]"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item) => {
                  const {
                    id,
                    productName,
                    brand,
                    quantity,
                    status,
                    price,
                    // discountedPrice,
                    // productUnit,
                  } = item;
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                      key={id}
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="flex items-center px-4 py-3 font-normal mx-auto text-gray-500">
                        <img
                          className="w-10 h-10 "
                          src={Avocado}
                          alt="Jese image"
                        />
                        <p className="pl-5 text-xs">{productName}</p>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {brand}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        $ {price} / 6+1LB
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        <span className="font-bold">{quantity}</span> x 6 * 1LB
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        $ {extractLastTwoDigits(price) * quantity}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-x-4">
                          {status === "Accepted" && (
                            <span className="bg-green-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                              {status}
                            </span>
                          )}
                          {status === "Missing - Urgent" && (
                            <span className="bg-red-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                              {status}
                            </span>
                          )}
                          {status === "Missing" && (
                            <span className="bg-orange-600 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                              {status}
                            </span>
                          )}
                          <button>
                            <BsCheck2 className="w-5 h-5 text-gray-500" />
                          </button>
                          <button
                            onClick={() => {
                              handleModal("missing", id);
                            }}
                          >
                            <RxCross1 className="w-4 h-4 text-gray-500" />
                          </button>
                          <button
                            className="text-gray-500 text-sm"
                            onClick={() => {
                              handleEditDetails(id);
                              handleModal("edit");
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* Order Product Table Content  Start*/}
      </div>
      {editModal && (
        <Modal handleModal={handleModal} value={value} setValue={setValue} />
      )}

      {missingModal && <MissingProduct handleModal={handleModal} />}
    </>
  );
};

export default OrderDetails;
