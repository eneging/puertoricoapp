import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext"; // Asegúrate de ajustar la ruta
import { useCartDrawer } from "../CartDrawerContext";

export default function SliderOver() {
    const { isOpen, closeDrawer } = useCartDrawer();

  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <Dialog open={isOpen} onClose={closeDrawer} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white text-orange-600">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium ">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeDrawer}
                        className="relative -m-2 p-2 "
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-900">
                        Tu carrito está vacío
                      </p>
                    ) : (
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {cart.map((item) => (
                            <li key={item.product.id} className="flex py-6">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={item.product.name}
                                  src={item.product.image}
                                  className="size-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium ">
                                    <h3>{item.product.name}</h3>
                                    <p className="ml-4">
                                      S/.{item.product.price.toFixed(2)}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-900">
                                    {item.product.category}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-black">
                                    Cantidad {item.quantity}
                                  </p>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-red-600"
                                      onClick={() =>
                                        removeFromCart(item.product.id)
                                      }
                                    >
                                      Eliminar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-orange-600">
                    <p>Subtotal</p>
                    <p>S/.{subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-900">
                    El envío y los impuestos se calculan en el checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Proceder al pago
                    </a>
   
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      o{" "}
                      <button
                        type="button"
                        onClick={closeDrawer}
                        className="font-medium text-orange-500"
                      >
                        Seguir comprando <span aria-hidden="true">→</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
