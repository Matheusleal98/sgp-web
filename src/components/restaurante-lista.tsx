import { Restaurante } from "@/types/interfaces";
import { RestauranteItem } from "./restaurante-item";

interface RestauranteListaProps {
  restaurantes: Restaurante[]
}

export function RestauranteLista({ restaurantes }: RestauranteListaProps) {
  return(
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurantes.map((restaurante) => (
        <RestauranteItem
          key={restaurante.seq}
          restaurante={restaurante}
        />
      ))}
    </div>
  );
}