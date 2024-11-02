import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/app/home";
import { RestaurantesRecomendados } from "./pages/app/restaurante/recomendados";
import { PedidoRecomendados } from "./pages/app/produto/recomendados";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'restaurantes/recomendados',
    element: <RestaurantesRecomendados />
  },
  {
    path: 'produtos/recomendados',
    element: <PedidoRecomendados />
  },
])