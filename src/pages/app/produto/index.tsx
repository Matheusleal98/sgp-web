import { api } from "@/lib/axios";
import { calculateProductTotalPrice, formatCurrency } from "@/lib/price";
import { Produto } from "@/types/interfaces";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { DescontoBadge } from "@/components/desconto-badge";
import { DeliveryInfo } from "@/components/delivery-info";
import { ProdutoItem } from "@/components/produto-item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function ProdutoDetalhes() {
  const { seq } = useParams();
  const [produto, setProduto] = useState<Produto>();
  const [produtosRestaurante, setProdutosRestaurante] = useState<Produto[]>([]);
  const [quantidade, setQuantidade] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleDecreaseQuantityClick = () => {
    setQuantidade((currentState) => {
      if (currentState === 1) return 1;

      return currentState - 1;
    });
  };

  const handleIncreaseQuantityClick = () => {
    setQuantidade((currentState) => currentState + 1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const produtoResponse = await api.get(`/produtos/${seq}`);
        setProduto(produtoResponse.data);
        console.log(produtoResponse);

        const restauranteSeq = produtoResponse.data.restaurante.seq;
        console.log(restauranteSeq);
        if (restauranteSeq) {
          console.log("entrou");
          const produtosRestauranteResponse = await api.get(
            `/restaurante/${restauranteSeq}/produtos`
          );
          setProdutosRestaurante(produtosRestauranteResponse.data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, [seq]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddToCartClick = () => {
    console.log("clicou para adicionar produto ao carrinho.");
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-32">
          <Header />
        </div>

        <div className="flex px-32 pt-10 gap-8">
          <div>
            <div className="relative max-w-[600px] min-w-[600px]">
              <img
                src={produto?.imagemUrl}
                alt={produto?.nome}
                sizes="100%"
                className="object-cover w-full h-[500px] rounded-sm"
              />

              <Button
                className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
                size="icon"
                onClick={handleBackClick}
              >
                <ChevronLeftIcon />
              </Button>
            </div>
          </div>

          <div className="relative max-w-[582px] z-50 border border-solid border-slate-100 rounded-sm bg-white">
            <div className="px-10 py-10">
              <div className="flex items-center gap-[6px] ">
                <img
                  src={produto?.restaurante.imagemUrl}
                  alt={produto?.restaurante.nome}
                  sizes="100%"
                  className="rounded-full h-6 w-6"
                />
                <span className="text-sm text-muted-foreground">
                  {produto?.restaurante.nome}
                </span>
              </div>

              <h1 className="mt-2 text-2xl font-semibold">{produto?.nome}</h1>

              <div className="flex justify-between mt-5">
                <div>
                  <div className="flex gap-[5px]">
                    <h2 className="text-2xl font-semibold">
                      {produto &&
                        formatCurrency(calculateProductTotalPrice(produto))}
                    </h2>
                    {produto && produto.desconto > 0 && (
                      <DescontoBadge produto={produto} />
                    )}
                  </div>
                  {produto && produto.desconto > 0 && (
                    <p className="text-base text-muted-foreground">
                      De: {formatCurrency(Number(produto.preco))}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 text-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="border border-solid border-muted-foreground"
                    onClick={handleDecreaseQuantityClick}
                  >
                    <ChevronLeftIcon />
                  </Button>
                  <span className="w-4">{quantidade}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="border border-solid border-muted-foreground"
                    onClick={handleIncreaseQuantityClick}
                  >
                    <ChevronRightIcon />
                  </Button>
                </div>
              </div>

              {produto && (
                <div>
                  <DeliveryInfo restaurante={produto.restaurante} />
                </div>
              )}

              <div className="mt-6">
                <h3 className="font-semibold">Sobre</h3>
                <p className="text-sm text-muted-foreground mt-3">
                  {produto?.descricao}
                </p>
              </div>

              <div className="mt-6">
                <Button
                  className="w-full h-[45px] font-semibold"
                  onClick={handleAddToCartClick}
                >
                  Adicionar à sacola
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent className="w-[90vw]">
            <SheetHeader>
              <SheetTitle className="text-left">Sacola</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="px-32 pt-10">
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
