import { RxCross1 } from "react-icons/rx";

interface MissingProductProps {
  handleModal: () => void;
}

const MissingProduct: React.FC<MissingProductProps> = ({ handleModal }) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full bg-[#0000007a] backdrop-blur-[2px] flex justify-center items-center"
    >
      <div className="relative w-full max-w-[450px] max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => {
              handleModal("missing");
            }}
          >
            <RxCross1 className="w-4 h-4 text-gray-700" />
          </button>
          <div className="p-6">
            <h2 className="font-semibold text-[#323540] text-base mt-4">
              Missing Product?
            </h2>
            <h3 className="text-sm text-gray-600 font-normal">
              s "Avocado with Bananas" urgent?
            </h3>

            <div className="w-full flex justify-end mt-4 ">
              <button
                className="px-6 py-1  text-[#1E633F] transition"
                onClick={() => {
                  handleModal("missing");
                }}
              >
                No
              </button>
              <button
                className="px-6 py-1 text-[#1E633F] transition"
                onClick={() => {
                  handleModal("missing");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissingProduct;
