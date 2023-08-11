import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalOleosEGorduras = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Óleos e Gorduras"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">AZEITE DE DENDE VIDRO CXA 12X900ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM GALAO 4 X 5,01LT</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM LATA CX 20X500ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM LATA CXA 24X200ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM VIDRO CXA 20X500ML</p>
        <p className="m-0">AZEITE DE OLIVA EXTRA VIRGEM VIDRO CXA 20X500ML</p>
        <p className="m-0">CREME CHANTILLY TP CXA 12X1KG</p>
        <p className="m-0">CREME CULINARIO TP CXA 12X1KG</p>
        <p className="m-0">GORDURA VEGETAL BALDE FRY 400 BD 14,5KG</p>
        <p className="m-0">GORDURA VEGETAL M25 BD 14,5KG</p>
        <p className="m-0">MANTEIGA COMUM COM SAL BLOCO 5KG</p>
        <p className="m-0">MANTEIGA COMUM S/SAL BLOCO RESF 5KG</p>
        <p className="m-0">MANTEIGA COMUM SEM SAL BLOCO 5KG RESF</p>
        <p className="m-0">MARGARINA CREM S/SAL 80% LIPID BD 14,5KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS C/SAL BD 15KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS COM SAL BD 15KG</p>
        <p className="m-0">MARGARINA CREMOSA 75% LIPIDIOS COM SAL BD 15KG</p>
        <p className="m-0">
          MARGARINA CREMOSA COM SAL 80% DE LIPIDEOS BALDE 14,5KG
        </p>
        <p className="m-0">MARGARINA CREMOSA COM SAL CXA 12X500G</p>
        <p className="m-0">OLEO DE ALGODÃO BD 14,5KG</p>
        <p className="m-0">OLEO DE CANOLA PET CXA 20 X 900ML</p>
        <p className="m-0">OLEO DE GIRASSOL PET CXA 20 X 900ML</p>
        <p className="m-0">OLEO DE MILHO PET CXA 20X900ML</p>
        <p className="m-0">OLEO DE SOJA PET CXA 20X900ML</p>
        <p className="m-0">OLEO DE SOJA PET CXA 20X900ML</p>
        <p className="m-0">SACHET VINAGRE TINTO CXA 200X4ML</p>
        <p className="m-0">VINAGRE DE ALCOOL COLORIDO 4% CXA 12X750ML</p>
        <p className="m-0">VINAGRE DE ALCOOL COLORIDO 4% GALAO 5L</p>
      </Dialog>
    </div>
  );
};
