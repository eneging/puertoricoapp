import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("store","./routes/store.tsx"),
    route("contacto","./routes/contact.tsx"),
    route("about","./routes/about.tsx"),
 route("card","./src/componets/Cart.tsx"),
 route("checkout","./src/componets/CheckoutPages.tsx"),
route("/thanks","./src/pages/ThankYouPage.tsx"),
route("ubicacion","./src/pages/Ubicacion.tsx"),
route("prueba","./routes/homePage.tsx")

] satisfies RouteConfig;

