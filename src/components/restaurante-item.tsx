import { formatCurrency } from "@/lib/price";
import { cn } from "@/lib/utils";
import { Restaurante } from "@/types/interfaces";
import { BikeIcon, StarIcon, TimerIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface RestauranteitemProps {
  restaurante: Restaurante
  className?: string
}

export function RestauranteItem({ restaurante, className }: RestauranteitemProps) {
  return (
    <div className={cn("min-w-[266px] max-w-[266px]", className)}>
      <div className="w-full space-y-3">
        <div className="relative h-[136px] w-full">
          <Link to='/'>
            <img
              src={restaurante.imagemUrl}
              sizes="100%"
              className="rounded-lg object-cover"
              alt={restaurante.nome}
            />
          </Link>

          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
            <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">{restaurante.avaliacao}</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{restaurante.nome}</h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <BikeIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {Number(restaurante.valorEntrega) === 0
                  ? "Entrega grátis"
                  : formatCurrency(Number(restaurante.valorEntrega))}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <TimerIcon className="text-primary" size={14} />
              <span className="text-xs text-muted-foreground">
                {restaurante.tempoEntregaMin} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}