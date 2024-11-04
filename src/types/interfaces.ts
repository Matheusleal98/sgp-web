export interface Categoria {
  seq: string
  nome: string
  imagemUrl: string
  restaurantes?: Restaurante[]
  produtos?: Produto[]
}

export interface Restaurante {
  seq: string
  nome: string
  imagemUrl: string
  valorEntrega: number
  tempoEntregaMin: number
  avaliacao: number
  categoria: Categoria
}

export interface Produto {
  seq: string
  nome: string
  descricao: string
  imagemUrl: string
  preco: number
  desconto: number
  restaurante: Restaurante
  categoria: Categoria
}

export interface Usuario {
  name: string,
  imagemUrl?: string
  email: string
  password: string
}