import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (

    <div className="flex flex-col bg-white rounded-2xl shadow-md p-4 transition hover:shadow-lg max-w-2xl sm:px-6 lg:max-w-7xl">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl bg-gray-100 object-cover w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <p className="text-xl font-bold text-orange-500 mt-2">${product.price.toFixed(2)}</p>

      <button
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito
      </button>
    </div>
    
  );
};

export default ProductCard;
