import { DeliveryInfo } from "@/components/delivery-info";
import { Header } from "@/components/header";
import { ProdutoItem } from "@/components/produto-item";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { Produto, Restaurante } from "@/types/interfaces";
import { ChevronLeftIcon, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function RestauranteDetalhes() {
  const { seq } = useParams();
  const [restaurante, setRestaurante] = useState<Restaurante>();
  const [produtosRestaurante, setProdutosRestaurante] = useState<Produto[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/restaurante/${seq}`);
        setRestaurante(response.data);
        setProdutosRestaurante(response.data.produtos);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [seq]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-32">
          <Header />
        </div>

        <div className="px-32 pt-10">
          <div className="flex gap-8">
            <div className="relative min-w-[750px]">
              <img
                src={restaurante?.imagemUrl}
                alt={restaurante?.nome}
                sizes="100%"
                className="object-cover w-full h-[380px] rounded-sm"
              />

              <Button
                className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
                size="icon"
                onClick={handleBackClick}
              >
                <ChevronLeftIcon />
              </Button>
            </div>

            <div className="relative w-full">
              <div className="flex justify-between">
                <div className="flex items-center gap-[6px]">
                  <img
                    src={restaurante?.imagemUrl}
                    alt={restaurante?.nome}
                    sizes="100%"
                    className="rounded-full h-10 w-10"
                  />
                  <span className="text-xl font-semibold">
                    {restaurante?.nome}
                  </span>
                </div>

                <div className="flex items-center w-[62px] h-[29px] gap-[3px] rounded-full bg-foreground px-2 py-[2px] text-white">
                  <StarIcon
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-base font-semibold">
                    {restaurante?.avaliacao}
                  </span>
                </div>
              </div>

              {restaurante && (
                <div className="mt-[18px]">
                  <DeliveryInfo restaurante={restaurante} />
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold">Sobre</h3>
                <p className="text-sm text-muted-foreground mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean nec nisl lorem. Praesent pharetra, sapien ut fringilla
                  malesuada, nisi felis ullamcorper ex, eu consectetur elit
                  dolor sed dolor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-32 mt-10">
          <h2 className="text-lg font-semibold mb-4">Pedidos Recomendados</h2>
          <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {produtosRestaurante.map((produto) => (
              <ProdutoItem key={produto.seq} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
