
const Humor = {
  rate: {
    stages: [
      { 1: "péssimo" },
      { 2: "mal" },
      { 3: "ok" },
      { 4: "bem" },
      { 5: "ótimo" },
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
      { 1: "péssimo" },
      { 2: "ruim" },
      { 3: "regular" },
      { 4: "boa" },
      { 5: "ótima" },
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