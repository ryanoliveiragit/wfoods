import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalConservas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Conservas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALCAPARRA 12/13 CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA PRETA COM CAROÇO CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA PRETA FATIADA CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA PRETA SEM CAROÇO CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE COM CAROÇO 28/32 CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE FATIADA CONSERVA BD 2KG</p>
        <p className="m-0">AZEITONA VERDE SEM CAROÇO MEDIA CONSERVA BD 2KG</p>
        <p className="m-0">CEBOLINHA CRISTAL CONSERVA BD 2KG</p>
        <p className="m-0">CHAMPIGNON FATIADO CONSERVA BD 2KG</p>
        <p className="m-0">CHAMPIGNON INTEIRO CONSERVA BD 2KG </p>
        <p className="m-0">DUETO (ERV/MILHO) CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">
          DUETO CROCRANTE (ERV/MILHO) AO VAPOR LATA CXA 30X170G
        </p>
        <p className="m-0">ERVILHA CONSERVA SACHET CXA 6X1,7KG </p>
        <p className="m-0">ERVILHA EM CONSERVA LATA CXA 6X1,7KG </p>
        <p className="m-0">ERVILHA TIPO 1 FOOD SERVICE FDO 5X2KG </p>
        <p className="m-0">ERVILHA/MILHO EM CONSERVA SACHET CXA 24 X 170GR</p>
        <p className="m-0">MILHO VERDE EM CONSERVA LATA CXA 6X1,7KG</p>
        <p className="m-0">MILHO VERDE EM CONSERVA LATA CXA 6X1,7KG </p>
        <p className="m-0">OVOS DE CODORNA 2 </p>
        <p className="m-0">OVOS DE CODORNA CONSERVA </p>
        <p className="m-0">PALMITO DE PUPUNHA PICADO VIDRO 6 X 1,8KG</p>
        <p className="m-0">PALMITO DE PUPUNHA RODELA VIDRO 6 X 1,8KG</p>
        <p className="m-0">PALMITO DE PUPUNHA TOLETE VIDRO 15 X 300GR</p>
        <p className="m-0">PEPINO FATIADO (PICKLES) CONSERVA BD 2KG</p>
        <p className="m-0">
          PICKLES MISTO (CENOURA,NABO,COUVEFLOR,PEPIN)CONSERVA BD 2KG
        </p>
        <p className="m-0">PIMENTA BIQUINHO CONSERVA BD 2KG</p>
        <p className="m-0">SELETA DE LEGUMES EM CONSERVA LATA CXA 24 X 170G</p>
        <p className="m-0">TOMATE SECO CONSERVA BD 1,4KG</p>
        <p className="m-0">TOMATES PELADOS INTEIROS LATA CXA 6X1,5KG</p>
      </Dialog>
    </div>
  );
};
