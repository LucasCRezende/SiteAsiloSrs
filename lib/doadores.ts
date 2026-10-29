// Lista de doadores exibida na seção "Nossos Doadores".
// Para incluir alguém, basta adicionar uma linha no grupo certo, por exemplo:
//   { nome: "Supermercado Exemplo" },
//   { nome: "Maria da Silva", descricao: "Doou a Montana da rifa" },

export type Doador = {
  nome: string
  descricao?: string
}

export const empresas: Doador[] = []

export const pessoas: Doador[] = []
