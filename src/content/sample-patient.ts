/**
 * The fictional patient every product preview shares, so the odontograma, the faceograma,
 * the history, the anamnese and the products applied all describe one person.
 * Never replace any of this with real patient data.
 */

export type Practice = "both" | "odonto" | "hof";
export type ToothState = "planned" | "completed" | "condition";
export type Area = "odonto" | "hof" | "shared";

export const samplePatient = {
  name: "Marina Alves",
  initials: "MA",
  age: 34,
  since: "mar. 2024",
};

/** FDI numbering, in chart order (patient's right on the viewer's left). */
export const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
export const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

export const toothStates: Record<number, ToothState> = {
  11: "condition",
  16: "planned",
  26: "completed",
  36: "planned",
};

export const dentalEntries = [
  { site: "26", text: "Restauração em resina · face O", status: "Concluído" },
  { site: "16", text: "Tratamento de canal · 1 de 3 sessões", status: "Em andamento" },
  { site: "36", text: "Restauração em resina · faces O e M", status: "Planejado" },
  { site: "11", text: "Coroa feita em outra clínica", status: "Condição" },
] as const;

/** Points on the 200 × 236 face drawing. */
export const toxinPoints = [
  { cx: 80, cy: 62 },
  { cx: 100, cy: 58 },
  { cx: 120, cy: 62 },
  { cx: 100, cy: 90 },
  { cx: 50, cy: 108 },
  { cx: 150, cy: 108 },
];
export const fillerPoints = [
  { cx: 66, cy: 142 },
  { cx: 134, cy: 142 },
  { cx: 100, cy: 169 },
];

export const faceDoses = [
  { region: "Frontal", dose: "10 U", kind: "toxin" },
  { region: "Glabela", dose: "20 U", kind: "toxin" },
  { region: "Periorbital E/D", dose: "12 U", kind: "toxin" },
  { region: "Malar E/D", dose: "1 ml", kind: "filler" },
  { region: "Lábios", dose: "1 ml", kind: "filler" },
] as const;

export const historyEntries: { date: string; area: Area; title: string; detail: string }[] = [
  { date: "16/10", area: "odonto", title: "Restauração em resina · 26", detail: "Face O · concluída nesta sessão" },
  { date: "02/10", area: "hof", title: "Toxina botulínica · frontal, glabela, periorbital", detail: "42 U · lote TB-48213 · reconstituída em 02/10" },
  { date: "18/09", area: "hof", title: "Ácido hialurônico · malar E/D e lábios", detail: "2 ml · lotes HA-55187 e HA-55120 · foto do rótulo anexada" },
  { date: "04/09", area: "odonto", title: "Avaliação e plano de tratamento", detail: "Canal no 16, restauração no 36" },
  { date: "04/09", area: "shared", title: "Anamnese assinada no tablet", detail: "Versão 3 · vale para odontologia e harmonização" },
];
