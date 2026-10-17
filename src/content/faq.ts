/**
 * FAQ copy, shared by the visible accordion and the FAQPage JSON-LD.
 * Every answer must stay true to the product and to the offer (CDC art. 30) —
 * see odonto-web/docs/research/termos-de-uso-privacidade-lgpd-saas.md §5.3 for claims to avoid.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

const trialEnd: FaqItem = {
  question: "O que acontece quando o teste de 10 dias termina?",
  answer:
    "Se você já cadastrou o cartão, a assinatura começa e a primeira cobrança é feita no fim do teste. Se ainda não cadastrou, a clínica fica em modo somente leitura: seus dados continuam disponíveis para consulta, mas não dá para criar nem editar nada até cadastrar o cartão. Nesse caso, a cobrança é feita na hora.",
};

const noCard: FaqItem = {
  question: "Preciso de cartão de crédito para testar?",
  answer:
    "Não. Você cria a conta, cadastra a clínica e usa o Hofclin por 10 dias sem informar cartão. O cartão só é pedido quando você decide continuar.",
};

const security: FaqItem = {
  question: "Meus dados e os dos meus pacientes estão seguros?",
  answer:
    "O acesso é protegido por senha e por permissões por função, os arquivos clínicos ficam criptografados na AWS em São Paulo e o banco de dados tem backup automático a cada 6 horas, guardado no Brasil por 90 dias. A equipe Hofclin não acessa conteúdo clínico, como anamneses, odontogramas, assinaturas e anexos. Os detalhes estão na página de Segurança.",
};

const dataLocation: FaqItem = {
  question: "Onde os dados ficam armazenados?",
  answer:
    "Os arquivos clínicos (anexos, fotos e imagens de assinatura) e os backups do banco ficam no Brasil, na AWS em São Paulo. O banco de dados principal e a aplicação são hospedados nos Estados Unidos. A Política de Privacidade explica essa transferência internacional e as proteções aplicadas.",
};

const team: FaqItem = {
  question: "Posso cadastrar minha equipe?",
  answer:
    "Sim. O administrador convida dentistas e secretárias por e-mail, e cada pessoa entra com uma função e permissões próprias. Uma secretária pode cuidar da agenda e dos orçamentos sem ver o prontuário clínico, por exemplo.",
};

export const homeFaq: FaqItem[] = [
  noCard,
  trialEnd,
  {
    question: "Qual a diferença entre os planos Standard e Pro?",
    answer:
      "O Standard tem agenda, prontuário digital com odontograma, faceograma e anamnese, orçamentos, insights e agenda no celular via iCal. O Pro tem tudo isso e mais o módulo financeiro: vendas, parcelas, contas, caixa, despesas, fechamento do dia, inadimplentes e a calculadora de custos.",
  },
  {
    question: "Posso testar o plano Pro?",
    answer:
      "Sim. Escolha \"Testar o Pro grátis\" e o seu teste de 10 dias começa no Pro, com o financeiro liberado. Ao cadastrar o cartão, você escolhe o plano que quer assinar, Standard ou Pro.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se você cancelar em até 7 dias depois da primeira cobrança, devolvemos o valor integral dessa cobrança. Depois desse prazo, o cancelamento interrompe a renovação e o acesso continua até o fim do período já pago, sem reembolso.",
  },
  {
    question: "Como faço para cancelar?",
    answer:
      "O administrador da clínica cancela pelo próprio Hofclin, em Configurações → Assinatura, sem precisar falar com ninguém. A assinatura renova todo mês automaticamente até ser cancelada.",
  },
  {
    question: "O Hofclin serve para quem faz só odontologia?",
    answer:
      "Serve. O odontograma, a agenda, a anamnese e os orçamentos funcionam para qualquer clínica odontológica. O faceograma fica à disposição para quando a clínica fizer harmonização orofacial.",
  },
  team,
  {
    question: "Funciona no tablet?",
    answer:
      "Funciona no navegador, sem instalar nada, e foi pensado para o tablet na cadeira e o computador da recepção. O paciente assina a anamnese e o atendimento no próprio tablet, com o dedo ou a caneta.",
  },
  security,
  dataLocation,
];

export const odontologiaFaq: FaqItem[] = [
  {
    question: "O odontograma registra faces do dente?",
    answer:
      "Sim. Cada registro em um dente indica as faces envolvidas. Para trabalhos que não são de um dente só, como uma profilaxia, o registro é feito por região: boca inteira, arcada superior, arcada inferior ou uma região sua.",
  },
  {
    question: "Consigo separar o que o paciente já tinha do que eu vou fazer?",
    answer:
      "Sim. O odontograma diferencia condição (o que já existe, como uma coroa feita em outro lugar) de tratamento (o que foi planejado na clínica). Um tratamento planejado passa a concluído no atendimento em que é finalizado.",
  },
  {
    question: "Um tratamento pode levar várias sessões?",
    answer:
      "Pode. Um canal, por exemplo, é um único tratamento planejado no dente, e cada atendimento registra o que foi feito naquela sessão até você concluí-lo.",
  },
  noCard,
  trialEnd,
  team,
];

export const harmonizacaoFaq: FaqItem[] = [
  {
    question: "Como os pontos de aplicação são registrados?",
    answer:
      "No faceograma, você marca as regiões do rosto e, se quiser, os pontos exatos de aplicação com a dose de cada um. Um trabalho bilateral fica em um único registro com os dois lados.",
  },
  {
    question: "Dá para registrar lote e validade dos produtos?",
    answer:
      "Sim. Cada procedimento de harmonização guarda os produtos aplicados com marca, lote, validade e, quando for o caso, a data de reconstituição. A foto do rótulo pode ser anexada ao procedimento.",
  },
  {
    question: "O que foi planejado fica separado do que foi aplicado?",
    answer:
      "Fica. Enquanto o tratamento está planejado, as doses e os pontos são o plano. No atendimento, você registra o que foi realmente aplicado sobre o mesmo mapa.",
  },
  noCard,
  trialEnd,
  security,
];

export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
