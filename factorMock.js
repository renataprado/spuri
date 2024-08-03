export const mock = {
  factors: [
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
      name: "Humor",
      qualifier: {
        exclusive: false,
        chipsData: [
          { id: "1", label: "Humor1", selected: false },
          { id: "2", label: "Humor2", selected: false },
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
