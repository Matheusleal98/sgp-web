import { Header } from "@/components/header";
import { RestauranteLista } from "@/components/restaurante-lista";
import { api } from "@/lib/axios";
import { Restaurante } from "@/types/interfaces";
import { useEffect, useState } from "react";

export function RestaurantesRecomendados() {

  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Restaurante[]>('restaurante/recomendado')
        setRestaurantes(response.data)
        return response.data;
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto px-32'>
      <Header />
      <div className="py-10">
        <h2 className="text-xl font-bold mb-6">
          Restaurantes Recomendados
        </h2>
        <RestauranteLista restaurantes={restaurantes} />
      </div>
    </div>
  );
}