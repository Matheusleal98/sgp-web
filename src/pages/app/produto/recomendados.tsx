import { api } from "@/lib/axios";
import { Produto } from "@/types/interfaces";
import { useEffect, useState } from "react";

import { Header } from "@/components/header";
import { ProdutoLista } from "@/components/produto-lista";

export function PedidoRecomendados() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Produto[]>("produtos/desconto");
        setProdutos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-32">
        <Header />
      </div>
      <div className="px-32 py-10">
      <h2 className="text-xl font-bold mb-4">Pedidos Recomendados</h2>
        <ProdutoLista produtos={produtos} />
      </div>
    </div>
  );
}
