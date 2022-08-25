const app = {
  init() {
    console.log("start");

    this.controllers.createGeral();
    this.controllers.router();
    // const md = this.controllers.createModal();
    // const btn = this.controllers.createButtons("olá", () => {
    //   console.log("olá");
    //   this.controllers.openModal(md);
    // });

    // this.elements.root.appendChild(md);
    // this.elements.root.appendChild(btn);

    console.log("end");
  },
};
