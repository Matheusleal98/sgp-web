import { Link } from "react-router-dom";
import { Produto, Restaurante } from "@/types/interfaces";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { CategoriaLista } from "@/components/categoria-lista";
import { api } from "@/lib/axios";
import { ProdutoLista } from "@/components/produto-lista";
import { RestauranteLista } from "@/components/restaurante-lista";

export function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produtosResponse, restaurantesResponse] = await Promise.all([
          api.get<Produto[]>("produtos/desconto"),
          api.get<Restaurante[]>("restaurante/recomendado"),
        ]);
        console.log(produtosResponse, restaurantesResponse);
        setProdutos(produtosResponse.data);
        setRestaurantes(restaurantesResponse.data);
      } catch (err) {
        console.log("Erro ao buscar os dados " + err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="px-32">
        <Header />
      </div>

      <div>
        <img
          src="/banner-oferta.png"
          alt="Banner Ofertas"
          sizes="100%"
          className="object-cover"
        />
      </div>

      <div className="px-32 pt-6">
        <CategoriaLista />
      </div>

      <div className="pt-10 px-32">
        <div className="space-y-4">
          <div className="flex items-center justify-between px-5">
            <h2 className="font-semibold">Pedidos Recomendados</h2>
            <Button
              variant="ghost"
              className="h-fit p-0 text-primary hover:bg-transparent"
              asChild
            >
              <Link to="/">
                Ver todos
                <ChevronRightIcon size={20} />
              </Link>
            </Button>
          </div>
          <ProdutoLista produtos={produtos} />
        </div>
      </div>

      <div className="px-32 pt-10">
        <div className="flex justify-between">
          <img src="/promo-banner-01.png" alt="Banner Promoção 01" width={810} height={215} />

          <img src="/promo-banner-02.png" alt="Banner Promoção 02" width={810} height={215} />
        </div>
      </div>

      <div className="pt-10 px-32">
        <div className="space-y-4">
          <div className="flex items-center justify-between px-5">
            <h2 className="font-semibold">Restaurantes Recomendados</h2>
            <Button
              variant="ghost"
              className="h-fit p-0 text-primary hover:bg-transparent"
              asChild
            >
              <Link to="/">
                Ver todos
                <ChevronRightIcon size={20} />
              </Link>
            </Button>
          </div>
          <RestauranteLista restaurantes={restaurantes} />
        </div>
      </div>
    </>
  );
}

export default Home;
