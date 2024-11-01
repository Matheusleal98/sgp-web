import { Restaurante } from "@/types/interfaces";
import { RestauranteItem } from "./restaurante-item";

interface RestauranteListaProps {
  restaurantes: Restaurante[]
}

export function RestauranteLista({ restaurantes }: RestauranteListaProps) {
  return(
    <div className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {restaurantes.map((restaurante) => (
        <RestauranteItem
          key={restaurante.seq}
          restaurante={restaurante}
        />
      ))}
    </div>
  );
}