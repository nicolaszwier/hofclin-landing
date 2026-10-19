import type { PlanKey } from "./site";

/**
 * Mirrors the active `odonto-api` Plan rows. The offer binds (CDC art. 30):
 * list only what a clinic on that Plan can reach in the app today.
 * Documentos is hidden in the app and therefore absent here (CONTEXT.md, Standard).
 */
export interface Plan {
  key: PlanKey;
  name: string;
  /** Monthly list price in BRL. */
  price: number;
  tagline: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    key: "standard",
    name: "Standard",
    price: 99.99,
    tagline: "Agenda e prontuário para odontologia e harmonização orofacial.",
    features: [
      "Agenda com visão de dia e semana",
      "Prontuário digital com odontograma, faceograma e anamnese",
      "Orçamentos com link e PDF para o paciente",
      "Insights de retornos, aniversários e tratamentos pendentes",
      "Agenda no calendário do celular (iCal)",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    price: 149.99,
    tagline: "Tudo do Standard, mais o financeiro completo da clínica.",
    features: [
      "Tudo do plano Standard",
      "Financeiro: vendas, parcelas, contas, caixa e despesas",
      "Fechamento do dia e lista de inadimplentes",
      "Calculadora de custos para precificar procedimentos",
    ],
  },
];

const brl = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** "99,99" — the amount without the currency sign, for large price typography. */
export function formatPrice(value: number): string {
  return brl.format(value);
}
