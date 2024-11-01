export interface Categoria {
  seq: string
  nome: string
  imagemUrl: string
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