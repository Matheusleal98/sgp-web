import { api } from "@/lib/axios";

export interface GetCategoriasResponse {
  seq: string
  nome: string
  imagemUrl: string
}


export async function getCategorias() {
  const response = await api.get<GetCategoriasResponse[]>('categorias')
  return response.data;
}