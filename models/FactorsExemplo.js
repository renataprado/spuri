
const Humor = {
  rate: {
    stages: [
      { value: 0, name: "péssimo" },
      { value: 1, name: "mal" },
      { value: 2, name: "ok" },
      { value: 3, name: "bem" },
      { value: 4, name: "ótimo" },
    ]
  },
  chips: [
    "confiante",
    "contente",
    "focado",
    "pensativo",
    "ansioso",
    "nervoso",
    "irritado",
    "triste",
  ],
};

const Sleep = {
  rate: {
    stages: [
      { value: 0, name: "péssimo" },
      { value: 1, name: "ruim" },
      { value: 2, name: "regular" },
      { value: 3, name: "boa" },
      { value: 4, name: "ótima" },
    ]
  },
  chips: [
    "deitou-se cedo",
    "deitou-se tarde",
    "acordou cedo",
    "acordou tarde",
    "dificuldade para dormir",
    "dormiu com facilidade",
    "suor noturno",
    "pesadelo",
    "sonhos intensos",
  ],
};

const Mindfullness = {
  rate: {
    progress: {
      start: 2,
      end: 30,
      unit: 'mins'
    }
  },
  chips: [
    "respiração",
    "escaneamento corporal",
    "sensorial",
    "gratidão",
    "compaixâo"
  ]
}

const Exercise = {
  rate: {
    progress: {
      start: 2,
      end: 60,
      unit: 'mins'
    }
  },
  chips: [
    "leve",
    "moderado",
    "intenso",
  ]
}

const Nutrition = {
  rate: {
    table: {
      meals: ['café da manhã', 'almoço', 'jantar'],
      options: ['não comeu', 'pouco saudável', 'ok', 'saudável']
    }
  },
  chips: [
    'muito açucar',
    'alcool',
    "comeu pouco",
    "comeu demais",
    "vegetariano",
    "fast food"
  ]
}