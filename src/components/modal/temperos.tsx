import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalTemperos = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Temperos"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ALHO FRITO FDO 20X500G </p>
        <p className="m-0">ALHO INTEIRO DESCASCADO CONG 15X1,02KG</p>
        <p className="m-0">ALHO INTEIRO DESCASCADO IMPORTADO CONG CXA 5X2KG</p>
        <p className="m-0">ALHO TRITURADO 36 X 200G</p>
        <p className="m-0">ALHO TRITURADO BALDE 4 X 3KG</p>
        <p className="m-0">AMACIANTE DE CARNES CXA 10X1,01KG</p>
        <p className="m-0">
        AMACIANTE DE CARNES CXA 10X1,05KG
        </p>
        <p className="m-0">AMACIANTE DE CARNES CXA 6X1,01KG</p>
        <p className="m-0">CALDO DE BACON CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE BACON CXA 10X1,05KG</p>
        <p className="m-0">CALDO DE CARNE CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE CARNE CXA 10X1,05KG</p>
        <p className="m-0">CALDO DE CARNE CXA 6X1,01KG</p>
        <p className="m-0">CALDO DE GALINHA CXA 10X1,01KG</p>
        <p className="m-0">CALDO DE GALINHA CXA 6X1,01KG</p>
        <p className="m-0">CALDO DE PEIXE CXA 10X1,01KG</p>
        <p className="m-0">CREME DE CEBOLA CXA 10X1,01KG</p>
        <p className="m-0">CREME DE CEBOLA CXA 6X1KG</p>
        <p className="m-0">TEMPERO FONDOR CXA 6 X 1,1KG</p>
        <p className="m-0">TEMPERO REALCE DE SABOR PARA CARNES/LEGUMES/ARROZ</p>
      </Dialog>
    </div>
  );
};
