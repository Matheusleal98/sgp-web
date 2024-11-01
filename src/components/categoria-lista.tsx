import { getCategorias, GetCategoriasResponse } from "@/api/get-categorias";
import { Categoriaitem } from "./categoria-item";
import { useEffect, useState } from "react";

export function CategoriaLista() {

  const [categorias, setCategorias] = useState<GetCategoriasResponse[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await getCategorias();
        setCategorias(data);
      } catch (err) {
        console.log('Erro ao carregar categorias');
      } 
    };

    fetchCategorias();
  }, [])

  return (
    <div className='flex gap-5'>
      {categorias.map((categoria) => (
        <Categoriaitem key={categoria.seq} categoria={categoria} />
      ))}
    </div>
  );
}