import React, { useState } from 'react';

interface CheckoutFormProps {
  nombre: string;
  telefono: string;
  setNombre: (nombre: string) => void;
  setTelefono: (telefono: string) => void;
  setUbicacionUrl: (url: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  nombre,
  telefono,
  setNombre,
  setTelefono,
  setUbicacionUrl,
}) => {
  const [loadingUbicacion, setLoadingUbicacion] = useState(false);
  const [ubicacionObtenida, setUbicacionObtenida] = useState(false);

  const manejarUbicacion = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización");
      return;
    }

    setLoadingUbicacion(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setUbicacionUrl(url);
        setUbicacionObtenida(true);
        setLoadingUbicacion(false);
      },
      (error) => {
        console.error("Error al obtener ubicación:", error);
        alert("No se pudo obtener la ubicación");
        setLoadingUbicacion(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div style={{ marginTop: 20 }}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <label>
        Número de contacto:
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <button
        type="button"
        onClick={manejarUbicacion}
        disabled={loadingUbicacion}
        style={{
          marginBottom: 12,
          padding: "8px 12px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {loadingUbicacion ? "Obteniendo ubicación..." : "📍 Usar mi ubicación"}
      </button>

      {ubicacionObtenida && (
        <p style={{ fontSize: 14, color: "green" }}>
          ✅ Ubicación añadida al mensaje
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
