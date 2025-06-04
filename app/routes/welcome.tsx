import PrincipalVista from "../src/componets/principalVista"
import Alistas from "../src/assets/icons/alistasicon.png";
import Bebida from "../src/assets/icons/bebidaicon.png";


export function Welcome() {
  return (
    <>
      <main className="min-h-screen  flex flex-col items-center">
        
        {/* Hero Section */}
        <section className="text-center mt-10 mb-6">
          <h1 className="text-3xl px-3 font-extrabold text-orange-500">¡Bienvenido a Puerto Rico Restobar!</h1>
          <p className="text-gray-800 mt-2 px-6">      Comida criolla, piqueos y tragos a solo un clic. ¡Pide ahora o reserva tu evento!</p>
        </section>

      
       
    

        {/* Sección principal adicional */}
        <PrincipalVista />
      </main>
    </>
  );
}
