import { Produto } from "@/types/interfaces";
import { ProdutoItem } from "./produto-item";

interface ProdutoListaProps {
  produtos: Produto[];
}

export function ProdutoLista({ produtos }: ProdutoListaProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Pedidos Recomendados</h2>
      <div className="grid grid-cols-6 gap-6">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.seq} produto={produto} />
        ))}
      </div>
    </div>
  );
}
