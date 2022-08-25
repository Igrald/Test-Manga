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
      "Bakedanuki: animal do folclore japonês que consegue transformar-se em algo e tambêm transformar objetos.",
      "kitsune: kitsuné é uma raposa mitológica do solclore japonês que consegue se transofrmar-se em algo e tambêm transformar objetos",
      "dango: é um doce tradicional japones feito de arroz",
      "yokai: ser folclorico da cultura japonesa, também pode ser interpretado como fantasma ou monstro",
      "karague: é um frango empanado feito com gengibre, alho e shoyu",
    ],
  },
};
