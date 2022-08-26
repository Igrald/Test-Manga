app.state = {
  routes: {
    home: `${window.location.origin}${window.location.pathname}`,
    ler: "?p=ler",
  },
  routeRendered: false,
  count: 0,
  valor: 0,
  countMore() {
    this.count++;
    if (this.count > 1) {
      this.count = 1;
    }

    return this.count;
  },
  countLess() {
    this.count--;

    if (this.count < 0) {
      this.count = 0;
    }

    return this.count;
  },
  valorMore(vl) {
    this.valor = vl;

    return this.valor;
  },
  valorLess() {
    this.valor = 0;

    return this.valor;
  },
  dicio: {
    pag1: [
      "",
      "Bakedanuki(cão-guaxinim): animal do folclore japonês que consegue transformar-se em algo e tambêm transformar objetos.",
      "kitsune (raposas): eles podem se transformar em outras coisas ou pessoas, e podem possuir seres humanos.",
      "dango: é um doce tradicional japones feito de farinha de arroz",
      "Yōkai (demônio, espírito, ou monstro): é uma classe de criaturas sobrenaturais do folclore japonês",
      "karague: é um frango empanado feito com gengibre, alho e shoyu",
    ],
  },
};
