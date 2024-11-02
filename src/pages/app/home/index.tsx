import { Link } from "react-router-dom";
import { Produto, Restaurante } from "@/types/interfaces";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { CategoriaLista } from "@/components/categoria-lista";
import { ProdutoItem } from "@/components/produto-item";
import { RestauranteItem } from "@/components/restaurante-item";

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
      <div className="max-w-[1440px] mx-auto">
        <div className="px-32">
          <Header />
        </div>

        <div>
          <img
            src="/banner-oferta.png"
            alt="Banner Ofertas"
            className="w-full object-cover"
          />
        </div>

        <div className="px-32 pt-10">
          <CategoriaLista />
        </div>

        <div className="px-32 pt-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Pedidos Recomendados</h2>
              <Button
                variant="ghost"
                className="h-fit p-0 text-primary hover:bg-transparent"
                asChild
              >
                <Link to="/produtos/recomendados">
                  Ver todos
                  <ChevronRightIcon size={20} />
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
              {produtos.map((produto) => (
                <ProdutoItem key={produto.seq} produto={produto} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-32 pt-10">
          <div className="flex gap-5">
            <img
              src="/promo-banner-01.png"
              alt="Banner Promoção 01"
              className="w-[582px] h-[215px]"
            />

            <img
              src="/promo-banner-02.png"
              alt="Banner Promoção 02"
              className="w-[582px] h-[215px]"
            />
          </div>
        </div>

        <div className="py-10 px-32">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Restaurantes Recomendados</h2>
              <Button
                variant="ghost"
                className="h-fit p-0 text-primary hover:bg-transparent"
                asChild
              >
                <Link to="/restaurantes/recomendados">
                  Ver todos
                  <ChevronRightIcon size={20} />
                </Link>
              </Button>
            </div>
            <div className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
              {restaurantes.map((restaurante) => (
                <RestauranteItem
                  key={restaurante.seq}
                  restaurante={restaurante}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
