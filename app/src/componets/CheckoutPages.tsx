
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [locationUrl, setLocationUrl] = useState<string | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationObtained, setLocationObtained] = useState(false);
  const navigate = useNavigate();

const telefono: string = "+51932563713";

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    setLoadingLocation(true);

  navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    const mapsUrl =  `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    setLocationUrl(mapsUrl);
    setLocationObtained(true);
    setLoadingLocation(false);
  },
  (error) => {
    console.error(error);
    alert("No se pudo obtener tu ubicación.");
    setLoadingLocation(false);
  },
  {
    enableHighAccuracy: true, // <--- ACTIVA GPS si está disponible
    timeout: 10000,
    maximumAge: 0,
  }
);
  };

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!phone.trim()) {
      newErrors.phone = "El número es obligatorio.";
    } else if (!/^\+?\d{9,15}$/.test(phone)) {
      newErrors.phone = "Número inválido. Debe tener entre 9 y 15 dígitos.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generarMensajeWhatsApp = () => {
    const items = cart
      .map(
        (item) =>
          `• ${item.product.name} x${item.quantity} = $${item.product.price * item.quantity}`
      )
      .join("\n");

    const mensaje = `Hola, soy ${name}.\nQuiero hacer este pedido:\n\n${items}\n\nTotal: $${total.toFixed(
      2
    )}\nMi número de contacto: ${phone}${locationUrl ? `\n📍 Mi ubicación: ${locationUrl}` : ""}`;

    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = generarMensajeWhatsApp();
    window.open(url, "_blank");
    clearCart();
    navigate("/thanks");
  };

  return (
     <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Finaliza tu pedido</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              placeholder="Nombre completo"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              placeholder="Número de WhatsApp"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <button
              type="button"
              onClick={handleLocation}
              disabled={loadingLocation}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition"
            >
              {loadingLocation ? "Obteniendo ubicación..." : "📍 Usar mi ubicación"}
            </button>
            {locationObtained && (
              <p className="text-green-600 text-sm mt-2">✅ Ubicación añadida al mensaje</p>
            )}
          </div>

          <div className="border-t pt-4">
            <p className="text-lg font-semibold text-gray-700">
              Total: <span className="text-orange-500 font-bold">s/{total.toFixed(2)}</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl text-base transition"
          >
            Enviar pedido por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
