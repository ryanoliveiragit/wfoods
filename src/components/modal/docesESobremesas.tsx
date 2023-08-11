import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export const ModalDocesESobremesas = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Mostrar categorias"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Doces e sobremesas"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">BROWNIE DE CHOCOLATE COM NOZES 12 X 240GR</p>
        <p className="m-0">BROWNIE SEM NOZES CONG CXA 20 X 80GR</p>
        <p className="m-0">CHOCOLATE EM PO FDO 12X1KG</p>
        <p className="m-0">COCO RALADO 10 X 1KG</p>
        <p className="m-0">CÔCO RALADO MAIS CÔCO 24 X 100GR</p>
        <p className="m-0">COCO RALADO SOCOCO 24 X 100 GR</p>
        <p className="m-0">DOCE CHICLETE MELANCIA AZEDINHA CXA 12X80G</p>
        <p className="m-0">
          DOCE CHICLETE OVOS DE DINOSSAURO AZEDINHO CXA 12X80G
        </p>
        <p className="m-0">DOCE GELATINAS AMORAS CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS BANANAS CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS BEIJOS DE MORANGO CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS DENTADURAS CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS MINHOCAS BRILHO CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS MINHOCAS CITRICAS CXA 12X90G</p>
        <p className="m-0">DOCE GELATINAS URSINHOS BRILHO CXA 12X90G</p>
        <p className="m-0">DOCE MARSHMALLOW ALVORADA CXA 12X250G</p>
        <p className="m-0">DOCE MARSHMALLOW CAMPING CXA 12 X 250GR</p>
        <p className="m-0">DOCE MARSHMALLOW TORÇAO CXA 12X250G</p>
        <p className="m-0">DOCE MARSHMALLOW TORÇAO RECHEADO CXA 12X250G</p>
        <p className="m-0">DOCE PASTILHAS HORTELA CXA 12X40UND</p>
        <p className="m-0">DOCE PASTILHAS MENTA CXA 12 X 40 X 14GR</p>
        <p className="m-0">DOCE TUBES DE MORANGO CÍTRICO CXA 12X80G</p>
        <p className="m-0">DOCE TUBES DE MORANGO CXA 12X12X15G</p>
        <p className="m-0">DOCE TUBES DE MORANGO CXA 12X80G</p>
        <p className="m-0">
          DOCE TUBES GIGANTE DE MORANGO CITRICO CXA 6X24X27G
        </p>
        <p className="m-0">DOCE TUBES TUTTI FRUTTI CXA12X80G</p>
        <p className="m-0">FLOCOS DE COCO SWEET SOCOCO 4 X 5 KG</p>
        <p className="m-0">LEITE DE COCO TRADICIONAL TP 24 X 200ML</p>
        <p className="m-0">LEITE DE COCO VIDRO 24 X 200ML</p>
        <p className="m-0">MOUSSE CHOCOLATE AO LEITE CONG CXA 12X80G</p>
        <p className="m-0">MOUSSE LAKA COM OREO CONG 12 X 80GR (FS/VA)</p>
        <p className="m-0">
          PETIT GATEAU CHOCOLATE 18X240GR CXETA 4UN 60G (VA)
        </p>
        <p className="m-0">PETIT GATEAU CHOCOLATE CONG 24 X 60GR</p>
        <p className="m-0">PETIT GATEAU CHOCOLATE CONG 24X100G(FS)</p>
        <p className="m-0">PETIT GATEAU CHOCOLATE CONG CXA 12 X 160GR</p>
        <p className="m-0">PETIT GATEAU DOCE DE LEITE CONG 24 X 80GR (FS)</p>
        <p className="m-0">
          PETIT GATEAU DOCE DE LEITE HAVANNA CONG 12 X 160GR
        </p>
        <p className="m-0">PO PARA FLAN BAUNILHA CXA 6X1KG</p>
        <p className="m-0">PO PARA GELATINA ABACAXI CXA 10X1KG</p>
        <p className="m-0">PO PARA GELATINA CEREJA CXA 10X1KG</p>
        <p className="m-0">PO PARA GELATINA LIMAO CXA 10X1KG</p>
        <p className="m-0">PO PARA GELATINA MORANGO CXA 10X1KG</p>
        <p className="m-0">PO PARA GELATINA PESSEGO CXA 10X1KG</p>
        <p className="m-0">PO PARA GELATINA UVA CXA 10X1KG</p>
        <p className="m-0">PUDIM DE LEITE CONG CXA 12 X 160G</p>
        <p className="m-0">RECHEIO FORNEAVEL CREME DE AVELA CXA 8X1,005KG</p>
        <p className="m-0">
          SACHET MEL PURO (PARA HOTEIS E POUSADAS) CXA 144X12G
        </p>
        <p className="m-0">TORTA DE LIMÃO CONG CXA 4 X 500GR (FS/VA)</p>
        <p className="m-0">TORTA HOLANDESA CONG 4 X 500GR (FS/VA)</p>
        <p className="m-0">TORTA HOLANDESA CONG CXA12X140G</p>
        <p className="m-0">TORTA HOLANDESA CONG CXA12X70G</p>
        <p className="m-0">TORTA HOLANDESA DE OREO CONG 12 X 160GR</p>
      </Dialog>
    </div>
  );
};
