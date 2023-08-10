import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalFeijoada = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Feijoada"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">CARNE SECA COXAO DURO PCT 5KG </p>
        <p className="m-0">CARNE SECA COXAO DURO PCT 5KG </p>
        <p className="m-0">CARNE SECA DIANTEIRO MANTA PCT 30KG </p>
        <p className="m-0">CARNE SECA DIANTEIRO PCT 5KG </p>
        <p className="m-0">CARNE SECA TRASEIRO CXA 20X500G </p>
        <p className="m-0">CARNE SECA TRASEIRO MANTA PCT 30KG </p>
        <p className="m-0">CARNE SECA TRASEIRO PCT 5KG </p>
        <p className="m-0">COSTELA SUINA DO LOMBO EM TIRAS SALGADA </p>
        <p className="m-0">COSTELA SUINA EM TIRAS SALGADA </p>
        <p className="m-0">COSTELA SUINA SALGADA TIRAS (ESPECIAL) </p>
        <p className="m-0">KIT FEIJOADA RESF </p>
        <p className="m-0">KIT FEIJOADA SALGADO </p>
        <p className="m-0">LINGUA SUINA SALGADA </p>
        <p className="m-0">MASCARA COM ORELHA SUINA SALGADA </p>
        <p className="m-0">ORELHA (COM MASCARA) SUINA SALGADA </p>
        <p className="m-0">PALETA SUINA SALGADA SEM OSSO RESF </p>
        <p className="m-0">PE SUINO SALGADO </p>
        <p className="m-0">PE SUINO SALGADO PCT </p>
        <p className="m-0">PERNIL SUINO SALGADO </p>
        <p className="m-0">PONTA DE COSTELA SALGADA </p>
        <p className="m-0">PONTA DE COSTELA SUINA SALGADA </p>
        <p className="m-0">RABO SUINO SALGADO </p>
      </Dialog>
    </div>
  );
};
