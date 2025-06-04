import React, { useState } from 'react';
import { useCartDrawer } from "../CartDrawerContext";
import { useCart } from "../../context/CartContext";

import Logo from "../../assets/icons/logopuertoricoblanco.svg";
import { Button } from '../ui/button';
import { CalendarCheck, ShoppingCart } from 'lucide-react';
import ReservaModal from '../reservar/ReservaModal';

function Header() {
  const { openDrawer } = useCartDrawer();
  const { cart } = useCart();
  const [showReserveModal, setShowReserveModal] = useState(false);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);



  return (
    <header className="sticky top-0 z-50 h-[8vh] bg-gray-900 text-neutral-900 flex items-center justify-between px-4 shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Botones */}
      <div className="flex items-center gap-3 relative">
        <Button
          onClick={() => setShowReserveModal(true)}
          variant="outline"
          className=" text-white border-0   flex items-center gap-2   "
        >
          <CalendarCheck className="w-4 h-5 " />
          Reservar
        </Button>

        <div className="relative">
          <Button
            onClick={openDrawer}
            className="bg-orange-500 text-white hover:bg-orange-400  px-2 py-1 flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
       
          </Button>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow-md">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>

      {/* Texto promocional */}
      <div className="hidden lg:flex items-center font-semibold text-sm text-gray-700 ml-6">
        Conoce nuestra carta y disfruta del mejor restobar en Ica 🍔🍹
      </div>

      {/* Redes sociales */}
      <ul className="hidden lg:flex items-center gap-3 ml-6">
        <li>
          <span className="[&>svg]:h-6 [&>svg]:w-6 hover:[&>svg]:fill-[#1DA1F2] text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </span>
        </li>
        <li>
          <span className="[&>svg]:h-6 [&>svg]:w-6 hover:[&>svg]:fill-[#25D366] text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM224 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </span>
        </li>
        <li>
          <a href='https://www.facebook.com/RestobarPuertoricoICA'>
            <span className="[&>svg]:h-6 [&>svg]:w-6 hover:[&>svg]:fill-[#1877f2] text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>
        </li>
      </ul>

  
    </header>
  );
}

export default Header;
