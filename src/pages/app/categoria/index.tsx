import { Header } from "@/components/header";
import { ProdutoLista } from "@/components/produto-lista";
import { RestauranteLista } from "@/components/restaurante-lista";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { Categoria } from "@/types/interfaces";
import { ChevronLeftIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function CategoriaPage() {
  const { seq } = useParams();
  const [categoria, setCategoria] = useState<Categoria>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<Categoria>(`/categorias/${seq}`);
        setCategoria(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [seq]);

  const handleBackClick = () => navigate(-1);

  return (
    <>
      <div className="max-w-[1440px] mx-auto mb-10">
        <div className="px-32">
          <Header />
        </div>

        <div className="px-32 mt-10">
        <Button
            className="rounded-full bg-white text-foreground hover:text-white"
            size="icon"
            onClick={handleBackClick}
          >
            <ChevronLeftIcon />
          </Button>
          <h2 className="text-lg font-semibold mt-6">
            Comida {categoria?.nome}
          </h2>

          <div className="mt-6">
            {categoria && categoria.produtos && (
              <ProdutoLista produtos={categoria.produtos} />
            )}
          </div>
        </div>

        {categoria &&
          categoria.restaurantes &&
          categoria.restaurantes.length > 0 && (
            <div className="px-32 mt-10">
              <h2 className="text-lg font-semibold">Restaurantes</h2>

              <div className="mt-6 mb-10">
                <RestauranteLista restaurantes={categoria.restaurantes} />
              </div>
            </div>
          )}
      </div>
    </>
  );
}
