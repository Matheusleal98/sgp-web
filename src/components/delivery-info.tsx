import { BikeIcon, TimerIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Restaurante } from "@/types/interfaces";
import { formatCurrency } from "@/lib/price";

interface deliveryInfoProps {
  restaurante: Pick<Restaurante, 'valorEntrega' | 'tempoEntregaMin'>;
}

export function DeliveryInfo({ restaurante }: deliveryInfoProps) {
  return (
    <>
      <Card className='mt-6 flex justify-around py-3'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <span>Entrega</span>
            <BikeIcon size={14} className='text-xs' />
          </div>

          {Number(restaurante.valorEntrega) > 0 ? (
            <p className='text-sm font-semibold'>
              {formatCurrency(Number(restaurante.valorEntrega))}
            </p>
          ) : (
            <p className='text-sm font-semibold'>Grátis</p>
          )}
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <span>Tempo</span>
            <TimerIcon size={14} className='text-sm' />
          </div>

          <p className='text-sm font-semibold'>
            {restaurante.tempoEntregaMin} min
          </p>
        </div>
      </Card>
    </>
  );
}