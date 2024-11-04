import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/app/home";
import { RestaurantesRecomendados } from "./pages/app/restaurante/recomendados";
import { PedidoRecomendados } from "./pages/app/produto/recomendados";
import { ProdutoDetalhes } from "./pages/app/produto";
import { RestauranteDetalhes } from "./pages/app/restaurante";
import { CategoriaPage } from "./pages/app/categoria";
import { MeusPedidos } from "./pages/app/pedido/meus-pedidos";
import { RestaurantesFavoritos } from "./pages/app/restaurante/restaurante-favoritos";

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
  {
    path: 'produto/:seq',
    element: <ProdutoDetalhes />
  },
  {
    path: 'restaurante/:seq',
    element: <RestauranteDetalhes />
  },
  {
    path: 'categoria/:seq',
    element: <CategoriaPage />
  },
  {
    path: 'meus-pedidos',
    element: <MeusPedidos />
  },
  {
    path: 'restaurantes-favoritos',
    element: <RestaurantesFavoritos />
  },
])