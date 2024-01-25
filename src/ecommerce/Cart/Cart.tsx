import React, {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useState,
} from "react";
import useCart, { CartDash } from "./useCart";
import { userContext } from "../../loginESubscription/AuthContext";
import useProductDatabyId from "../../dashboard/Product/useProductDatabyId";
import useProductData from "../../dashboard/Product/useProductData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [show, setShow] = useState(false);
  const contesto = useContext(userContext);
  const { CartData, setCartData, loading, error, onFetchData } =
    useCart(contesto);

  const { productData } = useProductData();

  const deleteCartRow = async (id: number) => {
    const rowToDelete = { id: id };
    const response = await fetch(`http://localhost:3001/cart`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(rowToDelete), // body data type must match "Content-Type" header
    });

    setCartData((d: any) => d.filter((del: any) => del.id !== id));

    return response.json(); // parses JSON response into native JavaScript objects
  };

  async function changeQuantity(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
    quantity: number
  ) {
    if (event.currentTarget.id == `increment-button`) {
      const response = await fetch(`http://localhost:3001/cart/${id}`, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ quantity: quantity + 1 }), // body data type must match "Content-Type" header
      });

      onFetchData();

      return response.json();
    } else {
      if (quantity === 1) {
        deleteCartRow(id);
        setCartData((d: any) => d.filter((del: any) => del.id !== id));
        return;
      } else {
        const response = await fetch(`http://localhost:3001/cart/${id}`, {
          method: "PATCH", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ quantity: quantity - 1 }), // body data type must match "Content-Type" header
        });

        onFetchData();

        return response.json();
      }
    }
  }

  const notify = () => toast("Ordine Creato!");

  function cartProduct(props: CartDash) {
    const product = productData.filter((el) => el.id === props.product_id);

    return (
      <div className="md:flex items-center mt-14 py-8 border-t border-gray-200 ">
        <div className="w-1/4">
          <img
            src={`/src/Images/${props.product_id}.jpg`}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
            {props.product_id}
          </p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800">
              {product && product[0].name}
            </p>
            <form className="max-w-xs mx-auto">
              <label
                htmlFor="quantity-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose quantity:
              </label>
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  onClick={(event) =>
                    changeQuantity(event, Number(props.id), props.quantity)
                  }
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={props.quantity}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={(event) =>
                    changeQuantity(event, Number(props.id), props.quantity)
                  }
                  data-input-counter-increment="quantity-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                Please select a 5 digit number from 0 to 9.
              </p>
            </form>
          </div>

          <div className="flex items-center justify-between pt-5 pr-6">
            <div className="flex itemms-center">
              <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                Add to favorites
              </p>
              <p
                className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                onClick={() => deleteCartRow(Number(props.id))}
              >
                Remove
              </p>
            </div>
            <p className="text-base font-black leading-none text-gray-800">
              {product && product[0].price}€
            </p>
          </div>
        </div>
      </div>
    );
  }

  let totalAm = 0;

  //-----------------------------------------------------------------------
  if (CartData) {
    CartData.forEach((el) => {
      const product = productData.find((e) => e.id === el.product_id);

      if (product) {
        totalAm += Number(product.price * el.quantity);
      }
    });
  }

  totalAm = Number(totalAm.toFixed(2));

  async function createOrder() {
    const product = {
      userId: contesto,
      totalAmm: totalAm,
    };

    const response = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setShow(!show);
    notify();
    return response.json();
  }
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center ">
          <button
            onClick={
              contesto === 0
                ? () => (window.location.href = "/log-in")
                : () => {
                    setShow(!show);
                    onFetchData();
                  }
            }
            style={{ zIndex: 1000 }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2ZO4xMURjHf1YyjalorAqVkXg0VuFViA2xGla2oGIlXhGroluFR8Go6GzhHatCRWM7q/Co2MSuhFgVjV2yEhn55H/lkp2559wZe7+IX3KSyZzv/93/yb333O+cA/+pSwnoAW4Cr4AJNft9Q30W45qdwBhQy2ijwA4cMhuopow+BQ4DFWCOWkX/PUvFnZPWDVUZ+wrsAWY1iG0DehWbDMbN41QDvgBrInRrU4PZTsGUUu+E3YlY9kn7uugJoCf1TtgjE4tpniuH3dnCuCUTh5rIcUQ5rlMgIzKxpIkcS5XDvjOF8Vkmyk3kKCuH5SqM5HvgJc+/P5DJgHJjptpk3kHMc2C+9kebm2cgKwNmk5l6tEbUvyJP8m0SP2jCQChZeR6qvytP8oMSD9Tp35gyYL/zEpJnQP3mKZqzEvfX6R9NGbBaKS8heU6q/0yeC1yT2Eru6XiXMvA2zwUi8vSq3zxFMyRxZ53+LTJhF9+c5wIReTrlxTxF86YFdVSrqMiLLRmiy+upFtRRraIsL99ilwsLJPyIHz7JU3uMaLVEtujxwgt56sizDr+LH+7JU3eM6JhEF/HDJXnqixFdkOg4fjghT7b1FMwdiXbhh93yNBgjeiLROvywXp6GY0QfJFqIHxbJ03iowDbKvqt52jUvxfparJG/xx/j8mZ3J5MNCn6MP4blzd6X4NnhNv4YjJlNk/n6PP6oxnzfki/oUfzRF1Nx3Fewx6Oxbnmzuiu4ylyFPzpiqvKk7p+PP9pD10nJSmwq58HN36YtdOWarI1ti8YrYyF7CcluxSP8MiSPmxoF7VXQFfxyNeTwtV9Bp/DL6Ywd0N/2WPfjlwPyeJmAXe+t+KUr4JTg51mIBS3DL8vl8WWjoAkHp1K1wGZep8XjUVtW+3UU9wNY5IVjWCP9OAAAAABJRU5ErkJggg=="
              alt="cart"
              className="text-white w-7 h-7 mr-3"
              style={{ filter: "invert(100%)" }}
            />
          </button>
        </div>
        {show && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
            style={{ zIndex: 1000 }}
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Cart
                  </p>

                  {CartData[0] && CartData.map((el) => cartProduct(el))}
                  {/* FINE PRODOTTI */}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Summary
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          {totalAm ? totalAm + "€" : "N/A"}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          0€
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          {totalAm}€
                        </p>
                      </div>
                      <button
                        onClick={createOrder}
                        className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          /* Add any additional styles for your cart modal */
          #scroll::-webkit-scrollbar {
              width: 1px;
          }

          #scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
          }

          #scroll::-webkit-scrollbar-thumb {
              background: rgb(133, 132, 132);
          }
        `}
      </style>
    </>
  );
}

export default Cart;
