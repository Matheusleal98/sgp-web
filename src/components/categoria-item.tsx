import { GetCategoriasResponse } from "@/api/get-categorias";

interface CategoriaItemProps {
  categoria: GetCategoriasResponse;
}

export function Categoriaitem({ categoria }: CategoriaItemProps) {
  return (
    <div className='flex items-center justify-center w-[152px] rounded-full gap-3 shadow-sm'>
      <img 
        src={categoria.imagemUrl} 
        alt={categoria.nome}
        height={30}
        width={30}
      />
      <span className="text-sm font-semibold">{categoria.nome}</span>
    </div>
  );
}