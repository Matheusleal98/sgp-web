import { Produto } from "@/types/interfaces";
import { ProdutoItem } from "./produto-item";

interface ProdutoListaProps {
  produtos: Produto[]
}

export function ProdutoLista({ produtos }: ProdutoListaProps) {
  return (
    <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.seq} produto={produto} />
      ))}
    </div>
  );
}