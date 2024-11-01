import { calculateProductTotalPrice, formatCurrency } from "@/lib/price";
import { cn } from "@/lib/utils";
import { Produto } from "@/types/interfaces";
import { ArrowDownIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProdutoItemProps {
  produto: Produto
  className?: string
}

export function ProdutoItem({ produto, className }: ProdutoItemProps) {
  return (
    <Link
      className={cn("w-[180px] min-w-[180px]", className)}
      to='/'
    >
      <div className="w-full space-y-2">
        <div className="relative aspect-square w-full">
          <img
            src={produto.imagemUrl}
            alt={produto.nome}
            className="rounded-lg object-cover shadow-md h-[180px] w-[180px]"
          />

          {produto.desconto && (
            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
              <ArrowDownIcon size={12} />
              <span className="text-xs font-semibold">
                {produto.desconto}%
              </span>
            </div>
          )}
        </div>

        <div>
          <h2 className="truncate text-sm">{produto.nome}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">
              {formatCurrency(calculateProductTotalPrice(produto))}
            </h3>
            {produto.desconto > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(produto.preco))}
              </span>
            )}
          </div>

          <span className="block text-xs text-muted-foreground">
            {produto.restaurante.nome}
          </span>
        </div>
      </div>
    </Link>
  );
}