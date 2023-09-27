import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Avocado from "../../assets/Avocado Hass.jpg";
import { useUpdateProductServiceMutation } from "../../services/product.service";

interface ModalProps {
  value?: object;
  handleModal: () => void;
  setValue?: () => void;
}

interface CancellationReason {
  id: number;
  label: string;
}

const Modal: React.FC<ModalProps> = ({ value, setValue, handleModal }) => {
  const [updateProductService] = useUpdateProductServiceMutation();

  const [cancellationReasons] = useState<CancellationReason[]>([
    {
      id: 0,
      label: "Missing Product",
    },
    {
      id: 1,
      label: "Quantity is not the same",
    },
    {
      id: 2,
      label: "Price is not the same",
    },
    {
      id: 3,
      label: "Other",
    },
  ]);

  const handleGetValue = async () => {
    try {
      await updateProductService({
        id: value?.id,
        ...value,
      }).unwrap();
      handleModal("edit");
    } catch (error) {
      console.error("Error updating product:", error);
    }
    console.log(value);
  };
  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full bg-[#0000007a] backdrop-blur-[2px] flex justify-center items-center"
      >
        <div className="relative w-full max-w-[600px] max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={() => {
                handleModal("edit");
              }}
            >
              <RxCross1 className="w-4 h-4 text-gray-700" />
            </button>
            <div className="p-6">
              <h2 className="font-semibold text-[#323540] text-base mt-4">
                Chiken Breast Filter, Boneless Marinated 6 Ounce Raw, Invivid...
              </h2>
              <h3 className="text-sm text-gray-600 font-normal">
                American Roland
              </h3>
              {/* Modal content Start*/}
              <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left ">
                  <thead className="text-sm">
                    <tr>
                      <th scope="col" className="w-[150px]">
                        Product
                      </th>
                      <th scope="col">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-32 p-4">
                        <img src={Avocado} alt="Apple Watch" />
                      </td>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                Price ($)
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="number"
                                  id="first_product"
                                  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block px-2.5 py-1 "
                                  placeholder="1"
                                  value={value?.price}
                                  onChange={(e) => {
                                    setValue({
                                      ...value,
                                      price: e.target.value,
                                    });
                                  }}
                                />
                              </td>
                              <td
                                className="px-4 py-4 text-sm text-gray-700"
                                colSpan={2}
                              >
                                / 6 * 1LB
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                Quantity
                              </td>
                              <td className="px-6 py-4 flex items-center space-x-3">
                                <button
                                  className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                  type="button"
                                  onClick={() => {
                                    if (value?.quantity <= 1) return;

                                    setValue({
                                      ...value,
                                      quantity: value?.quantity - 1,
                                    });
                                  }}
                                >
                                  <AiOutlineMinus className="w-3 h-3" />
                                </button>
                                <input
                                  type="text"
                                  id="quantity"
                                  name="quantity"
                                  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="1"
                                  value={value?.quantity}
                                  onChange={(e) => {
                                    setValue({
                                      ...value,
                                      quantity: e.target.value,
                                    });
                                  }}
                                />
                                <button
                                  className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                  type="button"
                                  onClick={() => {
                                    setValue({
                                      ...value,
                                      quantity: value?.quantity + 1,
                                    });
                                  }}
                                >
                                  <AiOutlinePlus className="w-5 h-5" />
                                </button>
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-700">
                                x 6 * 1LB
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                Total
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-700">
                                {value?.price * value?.quantity}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Modal content End*/}
              <h3 className="font-semibold text-[#323540] text-base">
                Choose reason{" "}
                <span className="text-xs font-light text-gray-500">
                  (Opational)
                </span>
              </h3>
              <div className="flex items-center gap-x-4 gap-y-2 flex-wrap mt-4">
                {cancellationReasons.map((reason, i) => {
                  return (
                    <button
                      className={`border rounded-full px-4 py-2 text-xs text-gray-500 `}
                      key={i}
                    >
                      {reason?.label}
                    </button>
                  );
                })}
              </div>
              {/* Modal content End*/}
              <div className="w-full flex justify-end mt-4 ">
                <button
                  className="px-6 py-1 rounded-full text-[#1E633F] font-bold transition"
                  onClick={() => {
                    handleModal("edit");
                  }}
                >
                  Cancle
                </button>
                <button
                  className="px-6 py-1 rounded-full text-white hover:text-[#1E633F]  bg-[#1E633F] hover:bg-white border-2 border-[#1E633F] transition"
                  onClick={handleGetValue}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
