import React from 'react'

function Ubicacion() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
      {/* Título */}
      <h1 className="text-4xl font-extrabold text-orange-500 mb-4">¡Ubícanos!</h1>
      <p className="text-gray-300 text-center mb-8 max-w-md">
        Estamos listos para atenderte. Aquí puedes encontrarnos.
      </p>

      {/* Mapa embebido */}
      <div className="w-full max-w-2xl mb-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.961453870131!2d-75.736396!3d-14.079452799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e36193f81dcf%3A0xdf81168b59de4c8d!2sPuerto%20Rico!5e0!3m2!1ses-419!2spe!4v1748888589635!5m2!1ses-419!2spe"
          width="100%"
          height="350"
          allowFullScreen={true}
          loading="lazy"
          className="border-0 w-full h-[350px]"
        ></iframe>

     
      </div>

      {/* Información */}
      <div className="text-center mb-8 space-y-3">
        <p className="text-lg">
          📍 <span className="text-orange-400 font-semibold">Av. Principal 123, Lima, Perú</span>
        </p>
        <p>
          📞 <a href="tel:+51999999999" className="text-orange-400 hover:underline">+51 999 999 999</a>
        </p>
        <p>📧 contacto@turestaurante.com</p>
      </div>

      {/* Horarios */}
      <div className="bg-white text-black rounded-xl px-6 py-4 shadow-md mb-8">
        <h2 className="text-xl font-bold text-orange-600 mb-2 text-center">Horarios de Atención</h2>
        <ul className="space-y-1 text-center">
          <li>Lunes a Viernes: 12:00pm - 10:00pm</li>
          <li>Sábados y Domingos: 1:00pm - 11:00pm</li>
        </ul>
      </div>

      {/* CTA */}
      <a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
      >
        Contáctanos por WhatsApp
      </a>
    </main>
  )
}

export default Ubicacion