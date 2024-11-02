import { Restaurante } from "@/types/interfaces";
import { RestauranteItem } from "./restaurante-item";

interface RestauranteListaProps {
  restaurantes: Restaurante[];
}

export function RestauranteLista({ restaurantes }: RestauranteListaProps) {
  return (
      <div className="grid grid-cols-3 gap-6">
        {restaurantes.map((restaurante) => (
          <RestauranteItem key={restaurante.seq} restaurante={restaurante} />
        ))}
      </div>
  );
}
