import { Produto } from "@/types/interfaces";

export const calculateProductTotalPrice = (produto: Produto): number => {
  if (produto.desconto === 0) {
    return Number(produto.preco);
  }

  const discount = (Number(produto.preco) * produto.desconto) / 100;

  return Number(produto.preco) - discount;
};

export const formatCurrency = (value: number): string => {
  return `R$ ${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};