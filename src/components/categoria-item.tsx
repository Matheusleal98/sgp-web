import { GetCategoriasResponse } from "@/api/get-categorias";
import { Link } from "react-router-dom";

interface CategoriaItemProps {
  categoria: GetCategoriasResponse;
}

export function CategoriaItem({ categoria }: CategoriaItemProps) {
  return (
    <Link 
      to={`/categoria/${categoria.seq}`}
      className='flex items-center justify-center w-[152px] rounded-full gap-3 shadow-sm'>
      <img 
        src={categoria.imagemUrl} 
        alt={categoria.nome}
        height={30}
        width={30}
      />
      <span className="text-sm font-semibold">{categoria.nome}</span>
    </Link>
  );
}