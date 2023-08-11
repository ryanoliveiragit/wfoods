import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalBatata = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Batatas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">ANEIS DE CEBOLA EMPANADAS CONG CXA 6X1,05KG </p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG 10 X 1,1 KG</p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG 16 X 400GR </p>
        <p className="m-0">ANEIS DE CEBOLA EMPANADOS CONG CXA 10X1,05KG </p>
        <p className="m-0">BATATA CANOA (RUSTICA C/ CASCA) CONG CXA 5X2KG</p>
        <p className="m-0">BATATA CANOA CONG CXA 6 X 2,5KG</p>
        <p className="m-0">BATATA CANOA CONG CXA7X2KG</p>
        <p className="m-0">BATATA CARINHAS CONG CXA 10X1,05KG </p>
        <p className="m-0">
          BATATA CORTE ESPECIAL STEAKHOUSE 9X18 CONG CXA 6X2,5KG{" "}
        </p>
        <p className="m-0">
          BATATA CORTE ESPECIAL STEAKHOUSE 9X18MM CONG CXA 5X2,5KG
        </p>
        <p className="m-0">BATATA CRINKLE CONG CXA 12X1,05KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 5 X 2,5KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 5X2,5KG </p>
        <p className="m-0">BATATA CRINKLE CONG CXA 6 X 2KG</p>
        <p className="m-0">BATATA CRINKLE CONG CXA 6X2KG</p>
        <p className="m-0">BATATA CRINKLE WEDGES TEMPERADA CONG 6 X 2KG </p>
        <p className="m-0">BATATA CROSSTRAX (XADREZ) CONG CXA 6 X 2,04 KG</p>
        <p className="m-0">BATATA DIPSTERS SKIN ON CONG 4 X 2,5KG </p>
        <p className="m-0">
          BATATA HASH BROWN TRADICIONAL CONG CXA 10 X 1,1 KG{" "}
        </p>
        <p className="m-0">BATATA HASH BROWN TRIANGULO CONG CXA 8 X 1,06 KG </p>
        <p className="m-0">
          BATATA MINI HASH BROWN TRIANGULO CONG CXA 8 X 1,06 KG
        </p>
        <p className="m-0">BATATA NOISETTES CONG CXA 4 X 2,5 KG</p>
        <p className="m-0">BATATA ONDULADA COM CASCA 9X18 CONG 14X1,05KG</p>
        <p className="m-0">BATATA PALHA CXA 15X400G</p>
        <p className="m-0">BATATA PALITO 10 MM COATED TEMP CONG 5X2,5KG</p>
        <p className="m-0">BATATA PALITO 10 MM CONG 6 X 2KG</p>
        <p className="m-0">BATATA PALITO 10 MM CONG 6 X 2KG</p>
        <p className="m-0">BATATA PALITO 7MM (FININHAS) 20 X 700GR CONG</p>
        <p className="m-0">BATATA PALITO SURECRISP 9MM CONG 6X2,5KG</p>
        <p className="m-0">BATATA PALITO TRAD 9MM CONG 6 X 2,5KG</p>
        <p className="m-0">BATATA PALITO TRADICIONAL 9MM CONG CXA 14X1,05KG</p>
        <p className="m-0">BATATA SURECRISP CRINKLE 4X2,5KG</p>
        <p className="m-0">BROCOLIS CONG CXA 4X2,5KG</p>
        <p className="m-0">CENOURA BABY CONG CXA 4X2,5KG</p>
        <p className="m-0">COUVE FLOR 40/60 CONG CXA 4X2,5KG</p>
        <p className="m-0">COUVE FLOR CONG PCT 30 X 300GR</p>
        <p className="m-0">DADINHO D/BATATA C/QUEIJO CONG 10X1,05KG</p>
        <p className="m-0">ERVILHA FRESCA CONG CXA 4X2,5KG</p>
        <p className="m-0">ERVILHA FRESCA CONG PCT 40 X 300GR</p>
        <p className="m-0">ESPINAFRE FOLHAS CONG CXA 4X2,50KG</p>
        <p className="m-0">JARDINEIRA COM ERVILHA CONG CXA 4X2,5KG</p>
        <p className="m-0">JARDINEIRA PANACHE CONG 30 X 300GR</p>
        <p className="m-0">JARDINEIRA PANACHE CONG CXA 4X2,5KG</p>
        <p className="m-0">JARDINEIRA PRIMAVERA CONG CXA 4 X 2,5KG</p>
        <p className="m-0">MANDIOCA TOLETE CONG 12 X 1 KG</p>
        <p className="m-0">MANDIOCA TOLETE CONG CXA 4 X 2,5KG</p>
        <p className="m-0">POLENTA PALITO CONG 30 X 400GR</p>
        <p className="m-0">POLENTA PALITO CONG CXA 10 X 1,02KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 10X1,05KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 25X400G</p>
        <p className="m-0">POLENTA PALITO CONG CXA 4X2,5KG</p>
        <p className="m-0">POLENTA PALITO CONG CXA 6 X 2KG</p>
        <p className="m-0">POLENTA RECHEADA COM CALABRESA CONG 10 X 1KG</p>
        <p className="m-0">POLENTA RECHEADA COM CALABRESA CONG 10 X 700GR</p>
        <p className="m-0">POLENTA RECHEADA COM CARNE CONG 10 X 700GR</p>
        <p className="m-0">SELETA DE LEGUMES CONG CXA 4X2,5KG</p>
        <p className="m-0">SELETA DE LEGUMES CONG PCT 40 X 300GR</p>
        <p className="m-0">VAGEM EM PEDAÇOS CONG CXA 4X2,5KG</p>
        <p className="m-0">VAGEM INTEIRA CONG CXA 4 X2,5KG</p>
      </Dialog>
    </div>
  );
};
