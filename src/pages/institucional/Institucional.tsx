import React, { useState } from "react";

import styles from "../../styles/Institucional.module.scss";

import Sobre from "../sobre/Sobre";
import Pagamento from "../pagamento/Pagamento";
import Entrega from "../entrega/Entrega";
import Devolucao from "../devolução/Devolucao";
import Seguranca from "../segurança/Seguranca";
import Contato from "../contato/Contato";


function Institucional() {
  const [step, setStep] = useState("");

  function render() {
    switch (step) {
      case "sobre":
        return <Sobre />;
      case "pagamento":
        return <Pagamento />;
      case "entrega":
        return <Entrega />;
      case "devolucao":
        return <Devolucao />;
      case "seguranca":
        return <Seguranca />;
      case "contato":
        return <Contato />;
      default:
        return <Sobre />;
    }
  }

  return (
    <div>
        <h1 className={styles["title"]}>institucional</h1>
      <div className={styles["inst__container"]}>
        <ul>
          <li onClick={() => setStep("sobre")}>Sobre</li>
          <li onClick={() => setStep("pagamento")}>Forma de Pagamento</li>
          <li onClick={() => setStep("entrega")}>Entrega</li>
          <li onClick={() => setStep("devolucao")}>Troca e Devolução</li>
          <li onClick={() => setStep("seguranca")}>Segurança e Privacidade</li>
          <li onClick={() => setStep("contato")}>Contato</li>
        </ul>
        <div className={styles["rend__container"]}>
          {render()}
        </div>


      </div>
    </div>
  );
}

export default Institucional;
