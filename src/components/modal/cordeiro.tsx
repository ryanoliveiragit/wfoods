import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalCordeiro = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Cordeiro"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALCATRA COM PICANHA DE CORDEIRO +-800G CONG </p>
        <p className="m-0">COSTELA DE CORDEIRO +-2KG CONG</p>
        <p className="m-0">FRENCH RACK DE CORDEIRO 16/18 CONG</p>
        <p className="m-0">PALETA DE CORDEIRO COM OSSO CONG</p>
        <p className="m-0">PALETA DE CORDEIRO COM OSSO CONG 1,7KG A 2,3KG</p>
      </Dialog>
    </div>
  );
};
