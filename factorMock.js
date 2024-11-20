export const mock = {
  factors: [
    {
      name: "Sono",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Acordou cedo", selected: false },
          { id: "2", label: "Pesadelo", selected: false },
        ],
      },
      rating: {
        type: "fixed",
        title: "Como foi sua noite de sono?",
        rateValues: [
          { value: 1, description: "Péssimo" },
          { value: 2, description: "Ruim" },
          { value: 3, description: "Ok" },
          { value: 4, description: "Bom" },
          { value: 5, description: "Ótimo" },
        ],
      },
    },
    {
      name: "Exercise",
      question: {
        statement: "Você fez exercicios hoje?",
        qualifier: {
          exclusive: true,
          chipsData: [
            { id: "y", label: "Sim", selected: false },
            { id: "n", label: "Não", selected: false },
          ],
        },
      },
      qualifier: {
        exclusive: true,
        chipsData: [
          { id: "1", label: "Leve", selected: false },
          { id: "2", label: "Moderado", selected: false },
          { id: "3", label: "Intenso", selected: false },
        ],
      },
      rating: {
        type: "range",
        title: "Duração",
        minimumValue: 0,
        maximumValue: 30,
        step: 5,
        unit: "Minutos",
      },
    },
    {
      name: "Humor",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Humor1", selected: false },
          { id: "2", label: "Humor2", selected: false },
        ],
      },
      rating: {
        rateValues: [
          { value: 1, description: "Péssimo" },
          { value: 2, description: "Ruim" },
          { value: 3, description: "Ok" },
          { value: 4, description: "Bom" },
          { value: 5, description: "Ótimo" },
        ],
      },
    },

    {
      name: "Food",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Food1", selected: false },
          { id: "2", label: "Food2", selected: false },
          { id: "3", label: "Food3", selected: false },
        ],
      },
    },
  ],
};


const mock2 = {
  factors: [
    {
      name: "Sono",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Acordou cedo", selected: false },
          { id: "2", label: "Pesadelo", selected: false },
        ],
      },
      rating: {
        type: "fixed",
        title: "Como foi sua noite de sono?",
        rateValues: [
          { value: 1, description: "Péssimo"},
          { value: 2, description: "Ruim"},
          { value: 3, description: "Ok"},
          { value: 4, description: "Bom"},
          { value: 5, description: "Ótimo"},
        ]
      }
    },
    {
      name: "Humor",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Humor1", selected: false },
          { id: "2", label: "Humor2", selected: false },
        ],
      },
      rating: {
        rateValues: [
          { value: 1, description: "Péssimo"},
          { value: 2, description: "Ruim"},
          { value: 3, description: "Ok"},
          { value: 4, description: "Bom"},
          { value: 5, description: "Ótimo"},
        ]
      }
    },
    {
      name: "Exercise",
      question: {
        statement: "Você fez exercicios hoje?",
        qualifier: {
          exclusive: true,
          chipsData: [
            { id: "y", label: "Sim", selected: false },
            { id: "n", label: "Não", selected: false },
          ],
        },
      },
      qualifier: {
        exclusive: true,
        chipsData: [
          { id: "1", label: "Leve", selected: false },
          { id: "2", label: "Moderado", selected: false },
          { id: "3", label: "Intenso", selected: false },
        ],
      },
    },
    {
      name: "Food",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Food1", selected: false },
          { id: "2", label: "Food2", selected: false },
          { id: "3", label: "Food3", selected: false },
        ],
      },
    },
  ],
};
