import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalPaesEMassas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Pães, Massas e Farinhas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">CRISPY DE QUEIJO GOUDA CONG CXA 6X1KG</p>
        <p className="m-0">FARINHA DE MANDIOCA CRUA FINA TIPO 1 FDO 20X500G</p>
        <p className="m-0">FARINHA DE MANDIOCA CRUA GROSSA TIPO 1 FDO 20X500G</p>
        <p className="m-0">FARINHA DE MILHO AMARELA CXA 20X500G</p>
        <p className="m-0">FARINHA DE ROSCA FDO 5X5KG</p>
        <p className="m-0">FARINHA DE TRIGO FDO 10X1KG</p>
        <p className="m-0">FARINHA DE TRIGO FDO 10X1KG</p>
        <p className="m-0">FARINHA DE TRIGO FDO 5X5KG</p>
        <p className="m-0">FARINHA DE TRIGO PARA PASTEL PCT 5 X 5KG</p>
        <p className="m-0">FARINHA DE TRIGO PARA PASTEL PCT 5 X 5KG</p>
        <p className="m-0">FARINHA DE TRIGO PARA PIZZA PCT 5 X 5KG</p>
        <p className="m-0">FARINHA DE TRIGO PCT 5 X 5KG</p>
        <p className="m-0">FARINHA FLOCADA P/EMPANAR PANKO FDO 10X1KG</p>
        <p className="m-0">FARINHA PRONTA P/EMPANAR MILANESA FDO 10X1KG</p>
        <p className="m-0">FAROFA PRONTA DE MANDIOCA FINA TRADICIONAL FDO
20X500G</p>
        <p className="m-0">FAROFA TEMP C/BACON FDO 12X400GR (STAND UP)</p>
        <p className="m-0">FAROFA TEMP PICANTE FDO 12X400GR (STAND UP)</p>
        <p className="m-0">
        FAROFA TEMP TRAD FDO 12 X 400GR (STAND UP)
        </p>
        <p className="m-0">FAROFA TEMP TRADICIONAL CXA 12 X 400GR</p>
        <p className="m-0">FAROFA TEMPERADA COM BACON CXA 12X400GR</p>
        <p className="m-0">FAROFA TEMPERADA PICANTE CXA 12X400G</p>
        <p className="m-0">FUBA MIMOSO FDO 30X500G</p>
        <p className="m-0">MACARRAO ESPAGUETE COM OVOS N8 FDO 20X500G</p>
        <p className="m-0">MACARRAO PARAFUSO COM OVOS FDO 20X500G</p>
        <p className="m-0">MISTURA PRONTA PARA PREPARO DE KIBE FDO 5X5KG</p>
        <p className="m-0">PAO DE QUEIJO 15G COQUETEL CONG CXA 10X1KG</p>
        <p className="m-0">PAO DE QUEIJO 25G COQUETEL CONG PCT 15 X 1KG</p>
        <p className="m-0">PO PARA PURE DE BATATA COMPLETO CXA 6 X 800G</p>
      </Dialog>
    </div>
  );
};
