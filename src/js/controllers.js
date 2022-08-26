app.controllers = {
  getPage() {
    const paramsString = window.location.search;
    let searchParams = new URLSearchParams(paramsString);
    const page = searchParams.get("p");

    return page;
  },
  router() {
    setInterval(() => {
      if (app.state.routeRendered) {
        return;
      }
      const page = this.getPage();

      if (page === "ler") {
        this.createLer();
      } else if (!page) {
        this.createMain();
      } else {
      }
      app.state.routeRendered = true;
    }, 100);
  },
  go(p) {
    app.state.routeRendered = false;
    history.pushState({ p }, "", app.state.routes[p]);
  },
  createGeral() {
    const els = app.elements;

    els.root.style.height = "100vh";
    els.root.style.display = "flex";
    els.root.style.flexDirection = "column";
    // this.createHeader();
    els.main.container.style.flexGrow = "1";
    els.root.appendChild(els.main.container);
  },
  crr() {
    const main = document.createElement("main");
    const section = document.createElement("section");
    const img = document.createElement("img");
    const section1 = document.createElement("section");
    const img1 = document.createElement("img");
    const section2 = document.createElement("section");
    const img2 = document.createElement("img");
    const section3 = document.createElement("section");
    const img3 = document.createElement("img");
    const section4 = document.createElement("section");
    const img4 = document.createElement("img");
    const section5 = document.createElement("section");
    const img5 = document.createElement("img");
    const section6 = document.createElement("section");
    const img6 = document.createElement("img");
    const section7 = document.createElement("section");
    const img7 = document.createElement("img");
    const section8 = document.createElement("section");
    const img8 = document.createElement("img");
    const section9 = document.createElement("section");
    const img9 = document.createElement("img");
    const section10 = document.createElement("section");
    const img10 = document.createElement("img");

    section.onclick = () => {
      app.state.countMore();

      app.state.valorMore(1);
    };
    section1.onclick = () => {
      app.state.countMore();

      app.state.valorMore(2);
    };

    img.classList.add("img");
    img1.classList.add("img");
    img2.classList.add("img");
    img3.classList.add("img");
    img4.classList.add("img");
    img5.classList.add("img");
    img6.classList.add("img");
    img7.classList.add("img");
    img8.classList.add("img");
    img9.classList.add("img");
    img10.classList.add("img");

    main.classList.add("main");

    // scrollbar-color: #d4aa70 #ab4949;
    // scrollbar-width: thin;

    img.src = "./assets/1.jpg";
    img1.src = "./assets/2.jpg";
    img2.src = "./assets/3.jpg";
    img3.src = "./assets/4.jpg";
    img4.src = "./assets/5.jpg";
    img5.src = "./assets/6.jpg";
    img6.src = "./assets/7.jpg";
    img7.src = "./assets/8.jpg";
    img8.src = "./assets/9.jpg";
    img9.src = "./assets/10.jpg";
    img10.src = "./assets/11.jpg";

    section.appendChild(img);
    section1.appendChild(img1);
    section2.appendChild(img2);
    section3.appendChild(img3);
    section4.appendChild(img4);
    section5.appendChild(img5);
    section6.appendChild(img6);
    section7.appendChild(img7);
    section8.appendChild(img8);
    section9.appendChild(img9);
    section10.appendChild(img10);
    main.appendChild(section);
    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(section3);
    main.appendChild(section4);
    main.appendChild(section5);
    main.appendChild(section6);
    main.appendChild(section7);
    main.appendChild(section8);
    main.appendChild(section9);
    main.appendChild(section10);

    return main;
  },
  crr1() {
    const main = document.createElement("main");
    const section = document.createElement("section");
    const img = document.createElement("img");
    const section1 = document.createElement("section");
    const img1 = document.createElement("img");
    const section2 = document.createElement("section");
    const img2 = document.createElement("img");
    const section3 = document.createElement("section");
    const img3 = document.createElement("img");
    const section4 = document.createElement("section");
    const img4 = document.createElement("img");
    const section5 = document.createElement("section");
    const img5 = document.createElement("img");
    const section6 = document.createElement("section");
    const img6 = document.createElement("img");
    const section7 = document.createElement("section");
    const img7 = document.createElement("img");
    const section8 = document.createElement("section");
    const img8 = document.createElement("img");
    const section9 = document.createElement("section");
    const img9 = document.createElement("img");
    const section10 = document.createElement("section");
    const img10 = document.createElement("img");

    section4.onclick = () => {
      app.state.countMore();

      app.state.valorMore(3);
    };

    img.classList.add("img");
    img1.classList.add("img");
    img2.classList.add("img");
    img3.classList.add("img");
    img4.classList.add("img");
    img5.classList.add("img");
    img6.classList.add("img");
    img7.classList.add("img");
    img8.classList.add("img");
    img9.classList.add("img");
    img10.classList.add("img");

    main.classList.add("main");

    // scrollbar-color: #d4aa70 #ab4949;
    // scrollbar-width: thin;

    img.src = "./assets/12.jpg";
    img1.src = "./assets/13.jpg";
    img2.src = "./assets/14.jpg";
    img3.src = "./assets/15.jpg";
    img4.src = "./assets/16.jpg";
    img5.src = "./assets/17.jpg";
    img6.src = "./assets/18.jpg";
    img7.src = "./assets/19.jpg";
    img8.src = "./assets/20.jpg";
    img9.src = "./assets/21.jpg";
    img10.src = "./assets/22.jpg";

    section.appendChild(img);
    section1.appendChild(img1);
    section2.appendChild(img2);
    section3.appendChild(img3);
    section4.appendChild(img4);
    section5.appendChild(img5);
    section6.appendChild(img6);
    section7.appendChild(img7);
    section8.appendChild(img8);
    section9.appendChild(img9);
    section10.appendChild(img10);
    main.appendChild(section);
    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(section3);
    main.appendChild(section4);
    main.appendChild(section5);
    main.appendChild(section6);
    main.appendChild(section7);
    main.appendChild(section8);
    main.appendChild(section9);
    main.appendChild(section10);

    return main;
  },
  crr2() {
    const main = document.createElement("main");
    const section = document.createElement("section");
    const img = document.createElement("img");
    const section1 = document.createElement("section");
    const img1 = document.createElement("img");
    const section2 = document.createElement("section");
    const img2 = document.createElement("img");
    const section3 = document.createElement("section");
    const img3 = document.createElement("img");
    const section4 = document.createElement("section");
    const img4 = document.createElement("img");
    const section5 = document.createElement("section");
    const img5 = document.createElement("img");
    const section6 = document.createElement("section");
    const img6 = document.createElement("img");
    const section7 = document.createElement("section");
    const img7 = document.createElement("img");
    const section8 = document.createElement("section");
    const img8 = document.createElement("img");
    const section9 = document.createElement("section");
    const img9 = document.createElement("img");
    const section10 = document.createElement("section");
    const img10 = document.createElement("img");

    img.classList.add("img");
    img1.classList.add("img");
    img2.classList.add("img");
    img3.classList.add("img");
    img4.classList.add("img");
    img5.classList.add("img");
    img6.classList.add("img");
    img7.classList.add("img");
    img8.classList.add("img");
    img9.classList.add("img");
    img10.classList.add("img");

    main.classList.add("main");

    // scrollbar-color: #d4aa70 #ab4949;
    // scrollbar-width: thin;

    img.src = "./assets/23.jpg";
    img1.src = "./assets/24.jpg";
    img2.src = "./assets/25.jpg";
    img3.src = "./assets/26.jpg";
    img4.src = "./assets/27.jpg";
    img5.src = "./assets/28.jpg";
    img6.src = "./assets/29.jpg";
    img7.src = "./assets/30.jpg";
    img8.src = "./assets/31.jpg";
    img9.src = "./assets/32.jpg";
    img10.src = "./assets/33.jpg";

    section.appendChild(img);
    section1.appendChild(img1);
    section2.appendChild(img2);
    section3.appendChild(img3);
    section4.appendChild(img4);
    section5.appendChild(img5);
    section6.appendChild(img6);
    section7.appendChild(img7);
    section8.appendChild(img8);
    section9.appendChild(img9);
    section10.appendChild(img10);
    main.appendChild(section);
    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(section3);
    main.appendChild(section4);
    main.appendChild(section5);
    main.appendChild(section6);
    main.appendChild(section7);
    main.appendChild(section8);
    main.appendChild(section9);
    main.appendChild(section10);

    return main;
  },
  crr3() {
    const main = document.createElement("main");
    const section = document.createElement("section");
    const img = document.createElement("img");
    const section1 = document.createElement("section");
    const img1 = document.createElement("img");
    const section2 = document.createElement("section");
    const img2 = document.createElement("img");
    const section3 = document.createElement("section");
    const img3 = document.createElement("img");
    const section4 = document.createElement("section");
    const img4 = document.createElement("img");
    const section5 = document.createElement("section");
    const img5 = document.createElement("img");
    const section6 = document.createElement("section");
    const img6 = document.createElement("img");
    const section7 = document.createElement("section");
    const img7 = document.createElement("img");
    const section8 = document.createElement("section");
    const img8 = document.createElement("img");
    const section9 = document.createElement("section");
    const img9 = document.createElement("img");
    const section10 = document.createElement("section");
    const img10 = document.createElement("img");
    const section11 = document.createElement("section");
    const img11 = document.createElement("img");
    const section12 = document.createElement("section");
    const img12 = document.createElement("img");
    const section13 = document.createElement("section");
    const img13 = document.createElement("img");
    const section14 = document.createElement("section");
    const img14 = document.createElement("img");
    const section15 = document.createElement("section");
    const img15 = document.createElement("img");

    section.onclick = () => {
      app.state.countMore();

      app.state.valorMore(5);
    };

    section9.onclick = () => {
      app.state.countMore();

      app.state.valorMore(4);
    };

    img.classList.add("img");
    img1.classList.add("img");
    img2.classList.add("img");
    img3.classList.add("img");
    img4.classList.add("img");
    img5.classList.add("img");
    img6.classList.add("img");
    img7.classList.add("img");
    img8.classList.add("img");
    img9.classList.add("img");
    img10.classList.add("img");
    img11.classList.add("img");
    img12.classList.add("img");
    img13.classList.add("img");
    img14.classList.add("img");
    img15.classList.add("img");

    main.classList.add("main");

    // scrollbar-color: #d4aa70 #ab4949;
    // scrollbar-width: thin;

    img.src = "./assets/34.jpg";
    img1.src = "./assets/35.jpg";
    img2.src = "./assets/36.jpg";
    img3.src = "./assets/37.jpg";
    img4.src = "./assets/38.jpg";
    img5.src = "./assets/39.jpg";
    img6.src = "./assets/40.jpg";
    img7.src = "./assets/41.jpg";
    img8.src = "./assets/42.jpg";
    img9.src = "./assets/43.jpg";
    img10.src = "./assets/44.jpg";
    img11.src = "./assets/45.jpg";
    img12.src = "./assets/46.jpg";
    img13.src = "./assets/47.jpg";
    img14.src = "./assets/48.jpg";
    img15.src = "./assets/49.jpg";

    section.appendChild(img);
    section1.appendChild(img1);
    section2.appendChild(img2);
    section3.appendChild(img3);
    section4.appendChild(img4);
    section5.appendChild(img5);
    section6.appendChild(img6);
    section7.appendChild(img7);
    section8.appendChild(img8);
    section9.appendChild(img9);
    section10.appendChild(img10);
    section11.appendChild(img11);
    section12.appendChild(img12);
    section13.appendChild(img13);
    section14.appendChild(img14);
    section15.appendChild(img15);
    main.appendChild(section);
    main.appendChild(section1);
    main.appendChild(section2);
    main.appendChild(section3);
    main.appendChild(section4);
    main.appendChild(section5);
    main.appendChild(section6);
    main.appendChild(section7);
    main.appendChild(section8);
    main.appendChild(section9);
    main.appendChild(section10);
    main.appendChild(section11);
    main.appendChild(section12);
    main.appendChild(section13);
    main.appendChild(section14);
    main.appendChild(section15);

    return main;
  },
  createLer() {
    const els = app.elements;
    const { container, container2 } = els.main.main2;
    const cr = this.crr();
    const cr1 = this.crr1();
    const cr2 = this.crr2();
    const cr3 = this.crr3();

    container2.style.backgroundColor = "blue";
    container2.style.height = "3rem";
    container2.style.display = "flex";
    container2.style.justifyContent = "center";

    const btn = this.createButtons("olá", () => {
      app.controllers.go("home");
    });

    cr.onclick = () => {
      const modal = this.createModal();

      this.openModal(modal);
      container.appendChild(modal);
    };
    cr1.onclick = () => {
      const modal = this.createModal();

      this.openModal(modal);
      container.appendChild(modal);
    };
    cr2.onclick = () => {
      const modal = this.createModal();

      this.openModal(modal);
      container.appendChild(modal);
    };
    cr3.onclick = () => {
      const modal = this.createModal();

      this.openModal(modal);
      container.appendChild(modal);
    };

    container.innerHTML = "";
    container2.innerHTML = "";
    container.appendChild(cr);
    container.appendChild(cr1);
    container.appendChild(cr2);
    container.appendChild(cr3);
    els.main.container.innerHTML = "";
    els.main.container.appendChild(container);
  },
  createHeader() {
    const els = app.elements;

    const { container } = els.header;

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.backgroundColor = "blue";
    container.style.height = "5rem";
    // container.style.border = "1px solid green";

    els.root.appendChild(container);
  },
  createButtons(tText, onClick) {
    const bt = document.createElement("div");
    const text = document.createElement("p");
    const btn = bt.style;

    text.innerHTML = tText;

    btn.display = "flex";
    btn.flexDirection = "column";
    btn.justifyContent = "center";
    btn.border = "1px solid white";
    btn.borderRadius = "20px";
    btn.padding = "5px 16px";
    btn.height = "32px";
    btn.width = "fit-content";
    btn.cursor = "pointer";

    bt.onclick = onClick;

    bt.appendChild(text);

    return bt;
  },
  createMain() {
    const els = app.elements;
    const bt = document.createElement("div");
    const btP = document.createElement("p");
    const { container } = els.main.main;
    const cont = document.createElement("div");

    container.style.backgroundColor = "#e8e8e8";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100%";

    btP.style.color = "#e8e8e8";
    btP.innerHTML = "Ler";
    btP.style.fontSize = "30px";

    bt.style.height = "10rem";
    bt.style.width = "10rem";
    bt.style.borderRadius = "100px";
    // bt.style.border = "6px solid white";
    bt.style.display = "flex";
    bt.style.alignItems = "center";
    bt.style.justifyContent = "center";

    cont.style.display = "flex";
    cont.style.alignItems = "center";
    cont.style.justifyContent = "center";
    cont.style.border = "4px solid gray";
    // cont.style.paddingTop = "15rem";
    // cont.style.paddingBottom = "15rem";
    // cont.style.paddingLeft = "4rem";
    // cont.style.paddingRight = "3.5rem";
    cont.style.margin = "0px";
    cont.style.borderRadius = "150px";
    cont.style.padding = "1rem";

    bt.onclick = () => {
      app.controllers.go("ler");
    };
    bt.style.backgroundColor = "gray";

    container.innerHTML = "";
    bt.appendChild(btP);
    cont.appendChild(bt);
    container.appendChild(cont);
    els.main.container.innerHTML = "";
    els.main.container.appendChild(container);
  },
  createfooter() {
    const els = app.elements;
    const { container } = els.footer;

    container.style.backgroundColor = "blue";
    container.style.height = "5rem";

    els.root.appendChild(container);
  },
  createModal() {
    const closeModal = () => {
      this.closeModal(modal);
    };

    const modal = document.createElement("div");
    const md = document.createElement("div");
    const btn = this.createButtons("X", () => {
      closeModal();
      // app.controllers.go("home");
      app.state.countLess();
      app.state.valorLess();
    });
    const btnVoltar = this.createButtons("⇦", () => {
      app.controllers.go("home");
    });
    const body = document.createElement("div");
    const modal2 = document.createElement("div");
    const modal3 = document.createElement("div");
    const mdDdicio = document.createElement("div");
    const dicio = document.createElement("p");
    const md1 = document.createElement("div");

    modal.style.display = "flex";
    // modal.style.justifyContent = "flex-end";
    // modal.style.alignItems = "center";
    modal.style.justifyContent = "space-between";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.5)";
    modal.style.flexDirection = "column";

    body.style.width = "10rem";
    // body.style.backgroundColor = "red";

    // btn.style.border = "1px solid red";
    btn.style.borderRadius = "15px";

    md.style.display = "flex";
    md.style.backgroundColor = "#FFFFFF";
    // md.style.border = "4px solid red";
    md.style.width = "fit-content";
    md.style.height = "fit-content";
    md.style.borderRadius = "15px";

    md1.style.display = "flex";
    md1.style.backgroundColor = "#FFFFFF";
    // md1.style.border = "4px solid red";
    md1.style.width = "fit-content";
    md1.style.height = "fit-content";
    md1.style.borderRadius = "15px";

    modal2.style.display = "flex";
    modal2.style.justifyContent = "space-between";
    // modal2.style.backgroundColor = "blue";
    // modal2.style.width = "100%";
    modal2.style.margin = "0.7rem";

    modal2.classList.add("backdrop");
    modal2.onclick = (e) => {
      console.log("opaaa");
      if (e.target.classList.contains("backdrop")) {
        closeModal();
        app.state.countLess();
        app.state.valorLess();
      }
    };

    modal3.style.backgroundColor = "red";
    modal3.style.display = "flex";
    modal3.style.justifyContent = "center";
    modal3.style.alignContent = "center";
    modal3.style.backgroundColor = "#FFFFFF";
    // modal3.style.border = "4px solid green";
    modal3.style.width = "fit-content";
    // modal3.style.height = "fit-content";
    modal3.style.padding = "1.5rem";
    modal3.style.margin = "0.5rem";
    modal3.style.borderRadius = "15px";
    modal3.style.position = "relative";
    modal3.style.animationName = "anim";
    // modal3.style.animationDuration = "0.4s";
    modal3.style.animationDuration = "1s";

    mdDdicio.style.display = "flex";
    mdDdicio.style.justifyContent = "center";
    mdDdicio.style.alignContent = "center";
    // mdDdicio.style.border = "1px solid red";

    dicio.style.fontSize = "20px";
    dicio.style.textAlign = "center";
    dicio.style.letterSpacing = "1px";
    dicio.style.color = "#303030";

    // background-color: red;
    // position: relative;
    // animation-name: example;
    // animation-duration: 4s;

    // var scroll = window.pageYOffset;
    // window.onscroll = () => {
    //   var currentScroll = window.pageYOffset;
    //   if (scroll > currentScroll) {
    //     modal3.style.top = "0";
    //   } else {
    //     modal3.style.top = "-6rem";
    //   }
    //   scroll = currentScroll;
    // };

    // text-indent: 50px;
    // text-align: justify;
    // letter-spacing: 3px;

    // md.style.width = "1rem";
    // md.style.height = "1rem";
    // md.style.padding = "10px";
    modal.classList.add("backdrop");
    modal.onclick = (e) => {
      if (e.target.classList.contains("backdrop")) {
        closeModal();
        app.state.countLess();
        app.state.valorLess();
        console.log("olá", app.state.count);
        console.log("valor", app.state.valor);
      }
    };

    // md.appendChild(body);

    md.appendChild(btn);
    md1.appendChild(btnVoltar);
    modal2.appendChild(md1);
    modal2.appendChild(md);
    modal.appendChild(modal2);
    if (app.state.valor > 0) {
      dicio.innerHTML = app.state.dicio.pag1[app.state.valor];

      mdDdicio.appendChild(dicio);
      modal3.appendChild(mdDdicio);
      modal.appendChild(modal3);
    }

    return modal;
  },
  openModal(el) {
    el.style.display = "flex";
  },
  closeModal(el) {
    el.style.display = "none";
  },
};
