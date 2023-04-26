function factorSelector(id){
  switch (id) {
    case "sleep":
      return new Sleep(id);
      break;
    case "exercise":
      return new Exercise(id);
      break;
    case "mind":
      return new Mindfullness(id);
    default:
      break;
  }
}

class Factor{
  constructor(id){
    this.id = id;
    this.name = "Factor name"
    this.rate = {
      ratingType: [{value: 'factorRate'}]
    }
  }
  calculateDecimalRate(rate){}
}

class Sleep extends Factor{
  constructor(id){
    super(id);
    this.name = "Sono"
    this.rate = {
      stages: [
        { value: 0, name: "péssimo" },
        { value: 1, name: "ruim" },
        { value: 2, name: "regular" },
        { value: 3, name: "boa" },
        { value: 4, name: "ótima" },
      ]
    };
  }

  calculateDecimalRate(selectedRate){
    return selectedRate * 0.25;
  }
}

class Mindfullness extends Factor{
  constructor(id){
    super(id);
    this.name = "Atenção Plena"
    this.rate = {
      progress: {
        start: 2,
        end: 30,
        unit: "mins",
      },
    };
  }

  calculateDecimalRate(selectedRate){
    return selectedRate * 0.0333;
  }
}

class Exercise extends Factor {
  constructor(id) {
    super(id);
    this.name = "Exercício";
    this.rate = {
      progress: {
        start: 2,
        end: 60,
        unit: "mins",
      },
    };
  }

  calculateDecimalRate(selectedRate) {
    return (selectedRate * 0.0166);
  }
}

class Nutrition extends Factor {
  constructor(id) {
    super(id);
    this.name = "Alimentação";
    this.rate = {
      table: {
        meals: ['café da manhã', 'almoço', 'jantar'],
        options: ['não comeu', 'pouco saudável', 'ok', 'saudável']
      }
    };
  }

  calculateDecimalRate(selectedRate) {
    return (1);
  }
}

export default Factor;

export { factorSelector }